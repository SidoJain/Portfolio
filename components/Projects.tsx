"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const colorMap: Record<string, any> = {
    blue: {
        border: "border-blue-400",
        shadow: "shadow-blue-500/25",
        text: "text-blue-600",
        bg: "bg-blue-50/50",
        badgeBg: "bg-blue-50",
        badgeText: "text-blue-700",
        badgeBorder: "border-blue-200",
    },
    purple: {
        border: "border-purple-400",
        shadow: "shadow-purple-500/25",
        text: "text-purple-600",
        bg: "bg-purple-50/50",
        badgeBg: "bg-purple-50",
        badgeText: "text-purple-700",
        badgeBorder: "border-purple-200",
    },
    emerald: {
        border: "border-emerald-400",
        shadow: "hover:shadow-emerald-500/25",
        text: "text-emerald-600",
        bg: "bg-emerald-50/50",
        badgeBg: "bg-emerald-50",
        badgeText: "text-emerald-700",
        badgeBorder: "border-emerald-200",
    },
}

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    const projects = [
        {
            title: "Real Time Chat App",
            description: "A full-stack project that enables users to connect, communicate, and share messages instantly.",
            tech: ["Next.js", "MongoDB", "Socket.io", "JWT", "Tailwind", "Lucide", "BCrypt"],
            github: "https://github.com/SidoJain/Vero-Chat",
            live: "https://vero-chat.onrender.com/",
            color: "blue",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "C-SQL",
            description: "An SQL like database implementation in C using B-Trees for indexing.",
            tech: ["C", "Low Level Systems Programming", "REPL", "B-Tree", "File I/O"],
            github: "https://github.com/SidoJain/C-SQL",
            color: "purple",
            gradient: "from-purple-500 to-violet-500",
        },
        {
            title: "Sepolia Faucet",
            description: "A simple web application that allows Ethereum developers to request and receive free testnet ETH on the Sepolia test network.",
            tech: ["Solidity", "JavaScript", "Web3.js", "Hardhat"],
            github: "https://github.com/SidoJain/Sepolia-Faucet",
            live: "https://sepolia-faucet-five.vercel.app/",
            color: "emerald",
            gradient: "from-emerald-500 to-teal-500",
        },
    ]

    return (
        <section id="projects" className="py-20 px-4 pt-32 bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,69,19,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(139,69,19,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-24 right-16 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-lg"
                />
                <motion.div
                    animate={{ x: [0, 30, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
                        <h2 className="text-4xl font-bold text-slate-800">
                            Featured Projects
                        </h2>
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

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        initial: {},
                        animate: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
                >
                    {projects.map((project, index) => {
                        const isHovered = hoveredProject === index
                        const colorClasses = colorMap[project.color]

                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    initial: { opacity: 0, y: 60, scale: 0.9, rotateX: 10 },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        rotateX: 0,
                                        transition: {
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 80,
                                            damping: 15,
                                        },
                                    },
                                }}
                                whileHover={{
                                    y: -12,
                                    rotateX: 5,
                                    rotateY: 2,
                                    scale: 1.03,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15,
                                        duration: 0.4,
                                    },
                                }}
                                onHoverStart={() => setHoveredProject(index)}
                                onHoverEnd={() => setHoveredProject(null)}
                                className="group"
                            >
                                <motion.div className="perspective-1000">
                                    <Card className={`h-full aspect-square transition-all duration-500 cursor-default relative overflow-hidden border-slate-200 ${isHovered ? colorClasses.border : ""} hover:${colorClasses.shadow} ${isHovered ? colorClasses.bg : "bg-white"} transform-gpu flex flex-col`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                        <motion.div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        <CardHeader className="relative z-10">
                                            <CardTitle className={`text-slate-800 group-hover:${colorClasses.text} transition-all duration-300 text-xl group-hover:scale-125 mb-2`}>
                                                {project.title}
                                            </CardTitle>
                                            <CardDescription className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                                                {project.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="relative z-10 flex-1 flex flex-col justify-between">
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tech.map((tech) => (
                                                    <motion.div key={tech} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                                                        <Badge
                                                            variant="secondary"
                                                            className={`${colorClasses.badgeBg} ${colorClasses.badgeText} ${colorClasses.badgeBorder} border hover:shadow-sm transition-all duration-300 font-medium text-xs`}
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <div className="flex gap-3">
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-slate-300 text-slate-600 bg-transparent group-hover:bg-white hover:bg-slate-50 group-hover:text-black group-hover:border-slate-600 transition-all duration-300 flex-1"
                                                >
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                        <img
                                                            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                                                            alt="GitHub"
                                                            width="24"
                                                            height="24"
                                                            style={{ fill: '#181717' }}
                                                        />
                                                        Code
                                                    </a>
                                                </Button>
                                                {project.live && (
                                                    <Button
                                                        asChild
                                                        variant="outline"
                                                        size="sm"
                                                        className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 bg-transparent group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300 flex-1"
                                                    >
                                                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="w-4 h-4 mr-2" />
                                                            Live
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>

                                        <motion.div
                                            className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                                            animate={isHovered ? { scale: [1, 1.02, 1] } : {}}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </Card>
                                </motion.div>
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
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full border border-slate-200 shadow-lg"
                    >
                        <p className="text-slate-600 text-lg font-medium flex items-center justify-center gap-2">
                            More projects on{" "}
                            <a
                                href="https://github.com/SidoJain"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-700 transition-colors underline flex items-center gap-1"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                                    alt="GitHub"
                                    width="24"
                                    height="24"
                                    style={{ fill: '#181717' }}
                                />
                                GitHub
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
