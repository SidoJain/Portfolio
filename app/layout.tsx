import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

export const metadata: Metadata = {
    title: 'Siddharth Jain\'s Portfolio',
    description: 'Full-stack developer and ML enthusiast portfolio',
    icons: {
        icon: "/favicon.ico"
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
