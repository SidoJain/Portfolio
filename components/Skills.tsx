"use client"

import { motion } from "framer-motion"
import { CodeXml, Server, Brain, Blocks, Cloud, Wrench } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const colorMap: Record<string, any> = {
    slate: {
        bg: "bg-slate-50",
        text: "text-slate-700",
        hover: "bg-slate-100",
        border: "border-slate-200",
        borderHover: "border-slate-300",
        shadow: "shadow-slate-500/12",
        ring: "ring-slate-300",
    },
    indigo: {
        bg: "bg-indigo-50",
        text: "text-indigo-600",
        hover: "bg-indigo-100",
        border: "border-indigo-200",
        borderHover: "border-indigo-300",
        shadow: "shadow-indigo-500/12",
        ring: "ring-indigo-300",
    },
    emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        hover: "bg-emerald-100",
        border: "border-emerald-200",
        borderHover: "border-emerald-300",
        shadow: "shadow-emerald-500/12",
        ring: "ring-emerald-300",
    },
    amber: {
        bg: "bg-amber-50",
        text: "text-amber-700",
        hover: "bg-amber-100",
        border: "border-amber-200",
        borderHover: "border-amber-300",
        shadow: "shadow-amber-500/12",
        ring: "ring-amber-300",
    },
    rose: {
        bg: "bg-rose-50",
        text: "text-rose-600",
        hover: "bg-rose-100",
        border: "border-rose-200",
        borderHover: "border-rose-300",
        shadow: "shadow-rose-500/12",
        ring: "ring-rose-300",
    },
    violet: {
        bg: "bg-violet-50",
        text: "text-violet-600",
        hover: "bg-violet-100",
        border: "border-violet-200",
        borderHover: "border-violet-300",
        shadow: "shadow-violet-500/12",
        ring: "ring-violet-300",
    },
}

const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 20,
        },
    },
    hover: {
        scale: 1.1,
        transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 10,
        },
    },
}

export default function Skills() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    const skills = {
        frontend: {
            title: "Frontend",
            icon: CodeXml,
            color: "indigo",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
            gradient: "from-indigo-500 to-blue-500",
        },
        backend: {
            title: "Backend",
            icon: Server,
            color: "emerald",
            skills: ["Node.js", "Express", "Python", "MySQL", "MongoDB", "Flask", "Auth"],
            gradient: "from-emerald-500 to-teal-500",
        },
        ml: {
            title: "Machine Learning",
            icon: Brain,
            color: "violet",
            skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Neural Networks", "Ollama", "Jupyter"],
            gradient: "from-violet-500 to-purple-500",
        },
        blockchain: {
            title: "Blockchain",
            icon: Blocks,
            color: "amber",
            skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Hardhat"],
            gradient: "from-amber-500 to-orange-500",
        },
        devops: {
            title: "DevOps",
            icon: Cloud,
            color: "rose",
            skills: ["Docker", "Kubernetes", "AWS", "Vercel", "Github Actions"],
            gradient: "from-rose-500 to-pink-500",
        },
        tools: {
            title: "Tools",
            icon: Wrench,
            color: "slate",
            skills: ["Figma", "Vite", "Postman", "Git", "JWT", "Socket.io", "BCrypt", "ESLint", "Prettier"],
            gradient: "from-slate-500 to-gray-500",
        },
    }

    return (
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
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-xl"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
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
                        <h2 className="text-4xl font-bold text-slate-800">
                            Skills & Technologies
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        A comprehensive toolkit of technologies I use to bring ideas to life
                    </motion.p>
                </motion.div>

                {/* Skill Cards */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        initial: {},
                        animate: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {Object.entries(skills).map(([key, skillCategory]) => {
                        const Icon = skillCategory.icon
                        const color = colorMap[skillCategory.color]
                        const isHovered = hoveredCard === key

                        return (
                            <motion.div
                                key={key}
                                variants={{
                                    initial: { opacity: 0, y: 60 },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
                                    },
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    transition: { type: "spring", stiffness: 400, damping: 10 },
                                }}
                                onHoverStart={() => setHoveredCard(key)}
                                onHoverEnd={() => setHoveredCard(null)}
                                className="group"
                            >
                                <Card className={`relative overflow-hidden h-full cursor-pointer transition-all duration-500 ${color.borderHover} sm:${color.border} sm:hover:${color.borderHover} ${color.shadow} ${color.bg} sm:${isHovered ? color.bg : "bg-white"}`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${skillCategory.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${skillCategory.gradient} opacity-20 sm:opacity-0 sm:group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />

                                    <CardHeader className="relative z-10">
                                        <div className="flex items-center gap-3 mb-2">
                                            <motion.div
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6, type: "spring" }}
                                                className={`p-2 rounded-xl border ${color.border} ${color.bg} shadow-lg sm:shadow-none sm:group-hover:shadow-lg transition-all duration-300`}
                                            >
                                                <Icon className={`w-5 h-5 ${color.text}`} />
                                            </motion.div>
                                            <CardTitle className={`text-lg ${color.text} group-hover:scale-105 transition-all duration-300`}>
                                                {skillCategory.title}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="relative z-10">
                                        <div className="flex flex-wrap gap-2">
                                            {skillCategory.skills.map((skill) => (
                                                <motion.div
                                                    key={skill}
                                                    variants={badgeVariants}
                                                    initial="initial"
                                                    animate="animate"
                                                    whileHover="hover"
                                                >
                                                    <Badge className={`font-medium ${color.border} ${color.text} ${color.bg} hover:${color.hover} transition-all duration-300 cursor-pointer`}>
                                                        {skill}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <motion.div
                                        className={`absolute -inset-1 bg-gradient-to-r ${skillCategory.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                                        animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        className="text-slate-600 text-lg font-medium bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full border border-slate-200 shadow-lg inline-block"
                    >
                        ✨ Always learning and exploring new technologies
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
