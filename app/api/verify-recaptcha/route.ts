import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const { token } = await request.json()

    if (!token) {
        return NextResponse.json(
            { success: false, message: 'Token is required' },
            { status: 400 }
        )
    }

    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY
        if (!secretKey) {
            console.error('RECAPTCHA_SECRET_KEY is not set')
            return NextResponse.json(
                { success: false, message: 'reCAPTCHA configuration error' },
                { status: 500 }
            )
        }

        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                secret: secretKey,
                response: token,
            }).toString(),
        })

        const data = await response.json()

        if (!data.success) {
            console.log('reCAPTCHA verification failed:', data)
            return NextResponse.json(
                { success: false, message: 'reCAPTCHA verification failed', errors: data['error-codes'] },
                { status: 400 }
            )
        }

        if (data.score < 0.5) {
            console.log('reCAPTCHA score too low:', data.score)
            return NextResponse.json(
                { success: false, message: 'reCAPTCHA score too low' },
                { status: 400 }
            )
        }

        return NextResponse.json({
            success: true,
            score: data.score,
            action: data.action,
        })
    } catch (error) {
        console.error('reCAPTCHA verification error:', error)
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        )
    }
}