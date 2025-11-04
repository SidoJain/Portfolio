"use client"

import { motion } from "framer-motion"
import { CodeXml, Brain, Blocks, Lightbulb } from "lucide-react"
import { useState } from "react"
import { CTA } from "@/components/cards/CTA"
import { AboutMeCard } from "@/components/cards/AboutMeCard"

const colorMap = {
    blue: {
        border: "border-blue-200",
        hoverBorder: "border-blue-400",
        shadow: "shadow-blue-500/25",
        text: "text-blue-700",
        bg: "bg-blue-50/50",
        iconBg: "bg-blue-100",
    },
    purple: {
        border: "border-purple-200",
        hoverBorder: "border-purple-400",
        shadow: "shadow-purple-500/25",
        text: "text-purple-700",
        bg: "bg-purple-50/50",
        iconBg: "bg-purple-100",
    },
    orange: {
        border: "border-orange-200",
        hoverBorder: "border-orange-400",
        shadow: "shadow-orange-500/25",
        text: "text-orange-700",
        bg: "bg-orange-50/50",
        iconBg: "bg-orange-100",
    },
    emerald: {
        border: "border-emerald-200",
        hoverBorder: "border-emerald-400",
        shadow: "shadow-emerald-500/25",
        text: "text-emerald-700",
        bg: "bg-emerald-50/50",
        iconBg: "bg-emerald-100",
    },
}

export default function AboutMe() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    const aboutCards = {
        fullstack: {
            title: "Full Stack Developer",
            icon: CodeXml,
            color: "blue",
            description: "Crafting seamless web experiences from frontend to backend.",
            gradient: "from-blue-500 to-indigo-600",
        },
        ml: {
            title: "ML Enthusiast",
            icon: Brain,
            color: "purple",
            description: "Enthusiastic about AI/ML for creating intelligent solutions.",
            gradient: "from-purple-500 to-violet-600",
        },
        blockchain: {
            title: "Blockchain Explorer",
            icon: Blocks,
            color: "orange",
            description: "Exploring the future of decentralized technologies.",
            gradient: "from-orange-500 to-amber-600",
        },
        student: {
            title: "Lifelong Learner",
            icon: Lightbulb,
            color: "emerald",
            description: "Always curious, always growing, always building.",
            gradient: "from-emerald-500 to-green-600",
        },
    }

    return (
        <section id="about" className="py-20 px-4 pt-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute top-20 right-20 w-32 h-32 border border-blue-200/30 rounded-full"
                />
                <motion.div
                    animate={{ rotate: [360, 0], x: [0, 20, 0] }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute bottom-32 left-16 w-24 h-24 border border-purple-200/30 rounded-lg transform rotate-45"
                />
                <motion.div
                    animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute top-1/2 left-8 w-16 h-16 bg-gradient-to-br from-emerald-200/40 to-blue-200/40 rounded-full"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <h2 className="text-4xl font-bold text-slate-800">About Me</h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        I&apos;m a passionate Computer Science student who believes in the power of technology to transform ideas into reality.
                        My journey spans across multiple domains, always driven by curiosity and the desire to create meaningful impact.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        initial: {},
                        animate: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                    className="grid md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {Object.entries(aboutCards).map(([key, card], index) => (
                        <AboutMeCard
                            key={key}
                            title={card.title}
                            icon={card.icon}
                            color={colorMap[card.color as keyof typeof colorMap]}
                            description={card.description}
                            gradient={card.gradient}
                            index={index}
                            isHovered={hoveredCard === key}
                            onHoverStart={() => setHoveredCard(key)}
                            onHoverEnd={() => setHoveredCard(null)}
                        />
                    ))}
                </motion.div>

                <CTA boldline="🎓 BTech in Computer Science & Engineering" subline="Class of 2027 • USICT, GGSIPU • Delhi, India" />
            </div>
        </section>
    )
}
