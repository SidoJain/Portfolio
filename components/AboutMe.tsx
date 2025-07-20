"use client"

import { motion } from "framer-motion"
import { CodeXml, GraduationCap, Brain, Blocks } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export default function AboutMe() {
    return (
        <section id="about" className="py-20 px-4 pt-32 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-slate-800 mb-6">
                        About Me
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        I'm a passionate Computer Science student with a deep interest in full-stack development, machine learning, and
                        blockchain technology. I love building innovative solutions that solve real-world problems and constantly
                        learning new technologies to stay at the forefront of the tech industry.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <motion.div variants={fadeInUp}>
                        <Card className="text-center h-full border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
                            <CardHeader>
                                <CodeXml className="w-12 h-12 mx-auto text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <CardTitle className="text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                                    Full Stack
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">Building end-to-end web applications with modern technologies</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="text-center h-full border-slate-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
                            <CardHeader>
                                <Brain className="w-12 h-12 mx-auto text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <CardTitle className="text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                                    Machine Learning
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">Exploring AI/ML to create intelligent solutions</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="text-center h-full border-slate-200 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 group">
                            <CardHeader>
                                <Blocks className="w-12 h-12 mx-auto text-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <CardTitle className="text-slate-800 group-hover:text-pink-600 transition-colors duration-300">
                                    Blockchain
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">Learning decentralized technologies and smart contracts</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="text-center h-full border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group">
                            <CardHeader>
                                <GraduationCap className="w-12 h-12 mx-auto text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <CardTitle className="text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                                    BTech Student
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600">Pursuing engineering degree while building real projects</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
