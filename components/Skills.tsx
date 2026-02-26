"use client"

import { LazyMotion, domAnimation, m } from "framer-motion"
import { CodeXml, Server, Brain, Blocks, Cloud, Wrench } from "lucide-react"
import { useState } from "react"
import { CTA } from "@/components/cards/CTA"
import { SkillCard } from "@/components/cards/SkillCard"

type ColorProps = {
    bg: string
    text: string
    border: string
    hover: string
    borderHover: string
    shadow: string
    ring: string
}

const colorMap: Record<string, ColorProps> = {
    blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:bg-blue-100",
        borderHover: "hover:border-blue-400",
        shadow: "hover:shadow-blue-500/20",
        ring: "ring-blue-300",
    },
    emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        border: "border-emerald-200",
        hover: "hover:bg-emerald-100",
        borderHover: "hover:border-emerald-400",
        shadow: "hover:shadow-emerald-500/20",
        ring: "ring-emerald-300",
    },
    purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:bg-purple-100",
        borderHover: "hover:border-purple-400",
        shadow: "hover:shadow-purple-500/20",
        ring: "ring-purple-300",
    },
    orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-100",
        borderHover: "hover:border-orange-400",
        shadow: "hover:shadow-orange-500/20",
        ring: "ring-orange-300",
    },
    pink: {
        bg: "bg-pink-50",
        text: "text-pink-600",
        border: "border-pink-200",
        hover: "hover:bg-pink-100",
        borderHover: "hover:border-pink-400",
        shadow: "hover:shadow-pink-500/20",
        ring: "ring-pink-300",
    },
    cyan: {
        bg: "bg-cyan-50",
        text: "text-cyan-600",
        border: "border-cyan-200",
        hover: "hover:bg-cyan-100",
        borderHover: "hover:border-cyan-400",
        shadow: "hover:shadow-cyan-500/20",
        ring: "ring-cyan-300",
    },
}

const skills = {
    frontend: {
        title: "Frontend",
        icon: CodeXml,
        color: "blue",
        skills: ["HTML", "CSS", "React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Framer Motion", "Axios"],
        gradient: "from-blue-500 to-cyan-500",
    },
    backend: {
        title: "Backend",
        icon: Server,
        color: "emerald",
        skills: ["Node.js", "Express.js", "Flask", "FastAPI", "WebSocket", "MongoDB", "Redis", "PostgreSQL", "MySQL", "Supabase", "SQLite"],
        gradient: "from-emerald-500 to-teal-500",
    },
    ml: {
        title: "Machine Learning",
        icon: Brain,
        color: "purple",
        skills: ["Generative AI", "Neural Networks", "Scikit-Learn", "Pandas", "NLTK", "TensorFlow", "Ollama"],
        gradient: "from-purple-500 to-pink-500",
    },
    blockchain: {
        title: "Blockchain",
        icon: Blocks,
        color: "orange",
        skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Hardhat"],
        gradient: "from-orange-500 to-red-500",
    },
    devops: {
        title: "DevOps",
        icon: Cloud,
        color: "pink",
        skills: ["Docker", "AWS", "Vercel", "Render", "Github Actions", "CI/CD Pipelines", "SSH"],
        gradient: "from-pink-500 to-rose-500",
    },
    tools: {
        title: "Tools",
        icon: Wrench,
        color: "cyan",
        skills: ["Figma", "Vite", "Postman", "Git", "WSL2", "Linux", "LaTeX"],
        gradient: "from-cyan-500 to-blue-500",
    },
}

export default function Skills() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    return (
        <LazyMotion features={domAnimation}>
            <section
                id="skills"
                className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 pt-32 relative overflow-hidden"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <m.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
                    />
                    <m.div
                        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl"
                    />
                    <m.div
                        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-xl"
                    />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Heading */}
                    <m.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <m.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-4"
                        >
                            <h2 className="text-4xl font-bold text-slate-800">
                                Skills & Technologies
                            </h2>
                        </m.div>
                        <m.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-slate-600 max-w-2xl mx-auto"
                        >
                            A comprehensive toolkit of technologies I use to bring ideas to life
                        </m.p>
                    </m.div>

                    {/* Skill Cards */}
                    <m.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            initial: {},
                            animate: { transition: { staggerChildren: 0.1 } },
                        }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {Object.entries(skills).map(([key, skillCategory]) => (
                            <SkillCard
                                key={key}
                                title={skillCategory.title}
                                icon={skillCategory.icon}
                                color={colorMap[skillCategory.color]}
                                skills={skillCategory.skills}
                                gradient={skillCategory.gradient}
                                isHovered={hoveredCard === key}
                                onHoverStart={() => setHoveredCard(key)}
                                onHoverEnd={() => setHoveredCard(null)}
                            />
                        ))}
                    </m.div>

                    <CTA subline="✨ Always learning and exploring new technologies" />
                </div>
            </section>
        </LazyMotion>
    )
}
