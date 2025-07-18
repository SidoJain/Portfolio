"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export default function Projects() {
    const projects = [
        {
            title: "Real Time Chat App",
            description: "A full-stack project that enables users to connect, communicate, and share messages instantly.",
            tech: ["Next.js", "MongoDB", "Socket.io", "JWT", "Tailwind", "Lucide", "BCrypt"],
            github: "https://github.com/SidoJain/Vero-Chat",
            live: "https://vero-chat.onrender.com/"
        },
        {
            title: "C-SQL",
            description: "An SQL like database implementation in C using B-Trees for indexing.",
            tech: ["C", "Low Level Systems Programming", "REPL", "B-Tree", "File I/O"],
            github: "https://github.com/SidoJain/C-SQL"
        },
        {
            title: "Sepolia Faucet",
            description: "A simple web application that allows Ethereum developers to request and receive free testnet ETH on the Sepolia test network.",
            tech: ["Solidity", "JavaScript", "Web3.js", "Hardhat"],
            github: "https://github.com/SidoJain/Sepolia-Faucet",
            live: "https://sepolia-faucet-five.vercel.app/"
        },
    ]

    return (
        <section id="projects" className="py-20 px-4 pt-32 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-slate-800 mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-slate-600">Here are a few projects where I applied these skills…</p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="h-full border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
                                <CardHeader>
                                    <CardTitle className="text-slate-800 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="text-slate-600">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <Badge key={tech} variant="outline" className="border-slate-300 text-slate-600">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                                        >
                                            <a href={project.github} target="_blank">
                                                <img
                                                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                                                    alt="GitHub"
                                                    width="20"
                                                    height="20"
                                                    style={{ fill: '#181717' }}
                                                />
                                                Code
                                            </a>
                                        </Button>

                                        {project.live && (<Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="border-emerald-300 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                                        >
                                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live
                                            </a>
                                        </Button>)}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
