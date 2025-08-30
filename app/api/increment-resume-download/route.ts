import { NextResponse } from 'next/server'

export async function POST() {
    const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL
    const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

    if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
        return NextResponse.json({ error: 'Missing Upstash credentials.' }, { status: 500 })
    }

    const resp = await fetch(`${UPSTASH_REDIS_REST_URL}/incr/resume_download_counter`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
            'Content-Type': 'application/json'
        }
    })

    if (!resp.ok) {
        return NextResponse.json({ error: 'Upstash error' }, { status: 500 })
    }

    const data = await resp.json()
    return NextResponse.json({ count: data.result })
}