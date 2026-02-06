import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Siddharth Jain | Software Dev Portfolio',
    description: 'Full-stack developer, Blockchain explorer, ML enthusiast, and Lifelong Learner building practical, scalable products on the web.',
    icons: {
        icon: "/favicon.ico"
    },
    alternates: {
        canonical: BASE_URL,
    },
    authors: [{ name: "Siddharth Jain", url: BASE_URL }],
    creator: "Siddharth Jain",
    publisher: "Siddharth Jain",
    keywords: ["Siddharth Jain", "Sido Jain", "sidojain", "Vaultify", "Software Engineer", "Software Developer", "Frontend", "Backend", "Full Stack Developer", "AI/ML Developer", "Blockchain Developer", "Artificial Intelligence", "Machine Learning", "Computer Science", "USICT", "GGSIPU", "Open Source", "Tech Portfolio"],
    robots: "index,follow",
    openGraph: {
        title: 'Siddharth Jain - Software Dev Portfolio',
        description: 'Full-stack developer, Blockchain explorer, ML enthusiast, and Lifelong Learner building practical, scalable products on the web.',
        url: BASE_URL,
        siteName: 'Portfolio Website',
        images: [
            {
                url: 'og-image.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Siddharth Jain - Software Developer Portfolio',
        description: 'Full-stack developer, Blockchain explorer, ML enthusiast, and Lifelong Learner building practical, scalable products on the web.',
        images: ['/og-image.jpg'],
        creator: '@JainSido',
        site: '@JainSido',
    },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                {process.env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />}
                {children}
                <Analytics />
                {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />}
            </body>
        </html>
    )
}
