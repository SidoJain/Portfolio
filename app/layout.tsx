import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'

export const metadata: Metadata = {
    title: 'Siddharth Jain | Developer',
    description: 'Full-stack developer, Blockchain explorer, ML enthusiast and Lifelong Learner.',
    icons: {
        icon: "/favicon.ico"
    },
    alternates: {
        canonical: "https://sidojain.vercel.app/",
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
