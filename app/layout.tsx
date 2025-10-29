import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'

export const metadata: Metadata = {
    title: 'Siddharth Jain | Software Dev',
    description: 'Full-stack developer, Blockchain explorer, ML enthusiast and Lifelong Learner.',
    icons: {
        icon: "/favicon.ico"
    },
    alternates: {
        canonical: "https://sidojain.dev/",
    },
    robots: "index,follow"
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
                <SpeedInsights />
            </body>
        </html>
    )
}
