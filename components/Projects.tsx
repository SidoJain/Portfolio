"use client"

import { motion } from "framer-motion"
import { CTA } from "@/components/cards/CTA"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { useState } from "react"
import Image from "next/image"

type ColorProps = {
    border: string
    shadow: string
    text: string
    bg: string
    badgeBg: string
    badgeText: string
    badgeBorder: string
}

const colorMap: Record<string, ColorProps> = {
    indigo: {
        border: "border-indigo-300",
        shadow: "shadow-indigo-500/25",
        text: "text-indigo-600",
        bg: "bg-indigo-50/50",
        badgeBg: "bg-indigo-50",
        badgeText: "text-indigo-700",
        badgeBorder: "border-indigo-200",
    },
    cyan: {
        border: "border-cyan-300",
        shadow: "shadow-cyan-500/25",
        text: "text-cyan-600",
        bg: "bg-cyan-50/50",
        badgeBg: "bg-cyan-50",
        badgeText: "text-cyan-700",
        badgeBorder: "border-cyan-200",
    },
    emerald: {
        border: "border-emerald-300",
        shadow: "shadow-emerald-500/25",
        text: "text-emerald-600",
        bg: "bg-emerald-50/50",
        badgeBg: "bg-emerald-50",
        badgeText: "text-emerald-700",
        badgeBorder: "border-emerald-200",
    },
    amber: {
        border: "border-amber-300",
        shadow: "shadow-amber-500/25",
        text: "text-amber-600",
        bg: "bg-amber-50/50",
        badgeBg: "bg-amber-50",
        badgeText: "text-amber-700",
        badgeBorder: "border-amber-200",
    },
    rose: {
        border: "border-rose-300",
        shadow: "shadow-rose-500/25",
        text: "text-rose-600",
        bg: "bg-rose-50/50",
        badgeBg: "bg-rose-50",
        badgeText: "text-rose-700",
        badgeBorder: "border-rose-200",
    },
    violet: {
        border: "border-violet-300",
        shadow: "shadow-violet-500/25",
        text: "text-violet-600",
        bg: "bg-violet-50/50",
        badgeBg: "bg-violet-50",
        badgeText: "text-violet-700",
        badgeBorder: "border-violet-200",
    },
}

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    const projects = [
        {
            title: "Pokemon Soul Link",
            description: "A full-stack project that enables users manage collaborative Pokemon Soul Link games. Has 25+ active users.",
            tech: ["Next.js", "TypeScript", "MongoDB", "Supabase", "JWT", "Tailwind", "Lucide", "Auth"],
            github: "https://github.com/SidoJain/Pokemon-Soul-Link",
            live: "https://pokemon-soul-link.vercel.app/",
            color: "indigo",
            gradient: "from-indigo-500 to-blue-500",
        },
        {
            title: "Cypher",
            description: "A terminal-based text editor implemented in C featuring advanced functionalities.",
            tech: ["C", "Low Level Systems Programming", "Terminal", "Linux", "WSL2", "macOS", "File I/O", "Data Structures"],
            github: "https://github.com/SidoJain/Cypher",
            color: "cyan",
            gradient: "from-cyan-500 to-blue-500",
        },
        {
            title: "Sepolia Faucet",
            description: "A simple web application that allows Ethereum developers to request and receive free testnet ETH on the Sepolia test network.",
            tech: ["Solidity", "JavaScript", "Web3.js", "Hardhat", "Ethereum", "Blockchain"],
            github: "https://github.com/SidoJain/Sepolia-Faucet",
            live: "https://sepolia-faucet-five.vercel.app/",
            color: "emerald",
            gradient: "from-emerald-500 to-teal-500",
        },
        {
            title: "CQL",
            description: "An SQLite like database implementation in C using B-Tree data structure for indexing.",
            tech: ["C", "Low Level Systems Programming", "SQLite", "Database", "File I/O", "Data Structures"],
            github: "https://github.com/SidoJain/CQL",
            color: "amber",
            gradient: "from-amber-500 to-orange-500",
        },
        {
            title: "Vero Chat",
            description: "A full-stack project that enables users to connect, communicate, and share messages instantly. Has 10+ active users.",
            tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "JWT", "Tailwind", "Lucide", "BCrypt"],
            github: "https://github.com/SidoJain/Vero-Chat",
            live: "https://vero-chat.onrender.com/",
            color: "violet",
            gradient: "from-violet-500 to-blue-500",
        },
        {
            title: "Tetris",
            description: "Tetris game in PyGame using a Flask server and Redis for the high score.",
            tech: ["Python", "PyGame", "Flask", "Redis", "GUI"],
            github: "https://github.com/SidoJain/Tetris-V2",
            color: "rose",
            gradient: "from-rose-500 to-pink-500",
        },
    ]

    return (
        <section id="projects"className="py-20 px-4 pt-32 bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,69,19,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(139,69,19,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute top-24 right-16 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-lg"
                />
                <motion.div
                    animate={{ x: [0, 30, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute top-1/3 left-12 w-12 h-12 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <h2 className="text-4xl font-bold text-slate-800">Featured Projects</h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-slate-600"
                    >
                        Here are a few projects where I applied these skills and brought ideas to life
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            github={project.github}
                            live={project.live}
                            color={colorMap[project.color]}
                            gradient={project.gradient}
                            isHovered={hoveredProject === index}
                            onHoverStart={() => setHoveredProject(index)}
                            onHoverEnd={() => setHoveredProject(null)}
                        />
                    ))}
                </div>

                <CTA subline={
                    <p className="text-slate-600 text-lg font-medium flex items-center justify-center gap-2">
                        More projects on{" "}
                        <a
                            href="https://github.com/SidoJain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-700 transition-colors underline flex items-center gap-1"
                        >
                            <Image
                                src="icons/github.svg"
                                alt=""
                                width="24"
                                height="24"
                                style={{ fill: "#181717" }}
                                loading="lazy"
                            />
                            GitHub
                        </a>
                    </p>} />
            </div>
        </section>
    )
}
