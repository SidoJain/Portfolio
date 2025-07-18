"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export default function Skills() {
    const skills = {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
        backend: ["Node.js", "Express", "Python", "MySQL", "MongoDB", "Flask", "Auth"],
        ml: ["Scikit-learn", "Pandas", "NumPy", "Neural Networks", "Ollama", "Jupyter"],
        blockchain: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Hardhat"],
        devops: ["Docker", "Kubernetes", "AWS", "Vercel", "Github Actions"],
        tools: ["Figma", "Vite", "Postman", "Git", "JWT", "Socket.io", "BCrypt"],
    }

    return (
        <section id="skills" className="py-20 px-4 bg-slate-50 pt-32">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-slate-800 mb-6">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-slate-600">Technologies I work with and continue to learn</p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <motion.div variants={fadeInUp}>
                        <Card className="border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
                            <CardHeader>
                                <CardTitle className="text-blue-600 group-hover:scale-105 transition-transform duration-300">
                                    Frontend
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.frontend.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors duration-300"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group">
                            <CardHeader>
                                <CardTitle className="text-emerald-600 group-hover:scale-105 transition-transform duration-300">
                                    Backend
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.backend.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 transition-colors duration-300"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="border-slate-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
                            <CardHeader>
                                <CardTitle className="text-purple-600 group-hover:scale-105 transition-transform duration-300">
                                    Machine Learning
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.ml.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 transition-colors duration-300"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="border-slate-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group">
                            <CardHeader>
                                <CardTitle className="text-orange-600 group-hover:scale-105 transition-transform duration-300">
                                    Blockchain
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.blockchain.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 transition-colors duration-300"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <div className="hidden lg:block" />

                    <motion.div variants={fadeInUp}>
                        <Card className="border-slate-200 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 group">
                            <CardHeader>
                                <CardTitle className="text-pink-600 group-hover:scale-105 transition-transform duration-300">
                                    DevOps
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.devops.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 transition-colors duration-300"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="border-slate-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group">
                            <CardHeader>
                                <CardTitle className="text-cyan-600 group-hover:scale-105 transition-transform duration-300">
                                    Tools
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100 transition-colors duration-300"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
