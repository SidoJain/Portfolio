import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Siddharth Jain | Software Dev Portfolio',
    description: 'Full-stack developer, Blockchain explorer, ML enthusiast and Lifelong Learner.',
    icons: {
        icon: "/favicon.ico"
    },
    alternates: {
        canonical: "https://www.sidojain.dev",
    },
    authors: [{ name: "Siddharth Jain", url: "https://www.sidojain.dev" }],
    creator: "Siddharth Jain",
    publisher: "Siddharth Jain",
    keywords: ["Siddharth Jain", "Sido Jain", "sidojain", "Vaultify", "Software Engineer", "Software Developer", "Full Stack Developer", "AI/ML Developer", "Blockchain Developer", "Artificial Intelligence", "Machine Learning", "Computer Science", "USICT", "GGSIPU", "Open Source", "Tech Portfolio"],
    robots: "index,follow"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
