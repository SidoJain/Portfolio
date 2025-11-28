import type { Metadata } from 'next'
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

export const metadata: Metadata = {
    title: 'Siddharth Jain | Software Dev Portfolio',
    description: 'Full-stack developer, Blockchain explorer, ML enthusiast and Lifelong Learner. Each project is an experiment in shipping reliable systems, understanding trade‑offs, and writing code that can be read, extended, and debugged.',
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
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Siddharth Jain",
                        "jobTitle": "Full-stack Developer",
                        "description": "Full-Stack developer, Blockchain explorer, ML enthusiast, and lifelong learner.",
                        "url": "https://www.sidojain.dev",
                        "sameAs": ["https://github.com/SidoJain"],
                        "knowsAbout": ["Next.js", "Solidity", "Machine Learning", "Backend", "Frontend", "Flask", "React.js", "Express.js", "TailwindCSS", "BootstrapCSS", ""],
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Self-employed Open-source Contributor"
                        },
                        "@graph": [
                            {
                                "@type": "SoftwareApplication",
                                "name": "Sepolia ETH Faucet",
                                "description": "A faucet application dispensing daily Sepolia testnet coins built with Solidity and Hardhat.",
                                "url": "https://sepolia-faucet-five.vercel.app",
                                "applicationCategory": "Blockchain",
                                "programmingLanguage": "Solidity",
                                "datePublished": "2025-7-3"
                            },
                            {
                                "@type": "SoftwareApplication",
                                "name": "Pokémon Dashboard",
                                "description": "Web-based dashboard with filters, team timelines, using Next.js, MongoDB and Supabase.",
                                "url": "https://pokemon-soul-link.vercel.app",
                                "applicationCategory": "Web Application",
                                "programmingLanguage": "Next.js, TypeScript",
                                "datePublished": "2025-9-6"
                            },
                            {
                                "@type": "SoftwareApplication",
                                "name": "Cypher - Text Editor",
                                "description": "Lightweight, feature rich, terminal-based text editor written in C.",
                                "url": "https://github.com/SidoJain/Cypher",
                                "applicationCategory": "Terminal Text Editor",
                                "programmingLanguage": "C",
                                "datePublished": "2025-8-22"
                            }
                        ],
                    })}
                </script>
            </Head>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
