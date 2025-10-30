"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const experiences = [
        {
            title: "AI/ML, Blockchain & Full Stack Intern",
            company: "Vaultify.club",
            location: "Remote",
            period: "June 2025 - September 2025",
            description: "Built scalable web applications using Next.js and Node.js. Leveraged AWS Bedrock models, integrated with Lambda, WAF, Textract, S3 and Kendra, for scalable Gen AI apps. Designed and implemented smart contracts using Solidity on the Ethereum Blockchain.",
            skills: ["TypeScript", "Python", "Solidity", "Next.js", "AWS Bedrock", "AWS Lambda", "AWS WAF", "AWS Textract", "AWS S3", "AWS Kendra", "Ethereum"],
            color: "blue"
        },
        {
            title: "Open Source Contributor",
            company: "Self Employed",
            location: "Remote",
            period: "2024 – Present",
            description: "Contribute code, documentation, and tests to multiple open-source projects, focusing on performance, reliability, and developer experience. Engage with maintainers and the community via discussions, issues, and PRs; mentor new contributors and improve contributor onboarding.",
            skills: ["C", "JavaScript", "TypeScript", "Python", "SQL", "MongoDB", "React", "Next.js", "Express.js", "Docker", "CI/CD"],
            color: "purple"
        },
    ]

    const getColorClasses = (color: string, isHovered: boolean) => {
        const colors = {
            blue: {
                border: isHovered ? "border-blue-400" : "border-blue-300",
                shadow: "shadow-blue-500/25",
                text: "text-blue-600",
                bg: "bg-blue-50/50",
                badgeBg: "bg-blue-50",
                badgeText: "text-blue-700",
                badgeBorder: "border-blue-200",
                dotBg: "bg-blue-500",
                gradient: "from-blue-500 to-cyan-500",
            },
            purple: {
                border: isHovered ? "border-purple-400" : "border-purple-300",
                shadow: "shadow-purple-500/25",
                text: "text-purple-600",
                bg: "bg-purple-50/50",
                badgeBg: "bg-purple-50",
                badgeText: "text-purple-700",
                badgeBorder: "border-purple-200",
                dotBg: "bg-purple-500",
                gradient: "from-purple-500 to-violet-500",
            },
            emerald: {
                border: isHovered ? "border-emerald-400" : "border-emerald-300",
                shadow: "shadow-emerald-500/25",
                text: "text-emerald-600",
                bg: "bg-emerald-50/50",
                badgeBg: "bg-emerald-50",
                badgeText: "text-emerald-700",
                badgeBorder: "border-emerald-200",
                dotBg: "bg-emerald-500",
                gradient: "from-emerald-500 to-teal-500",
            },
        }
        return colors[color as keyof typeof colors]
    }

    return (
        <section id="experience" className="py-20 px-4 pt-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-15">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.2)_1px,transparent_0)] bg-[size:40px_40px]" />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute top-32 right-24 w-40 h-40 border border-blue-200/30 rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        x: [0, 20, 0],
                    }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute bottom-40 left-20 w-32 h-32 border border-purple-200/30 rounded-lg transform rotate-45"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
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
                        <h2 className="text-4xl font-bold text-slate-800">Work Experience</h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        My professional journey and roles where I&apos;ve contributed to impactful projects
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
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                    className="space-y-8"
                >
                    {experiences.map((exp, index) => {
                        const isHovered = hoveredIndex === index
                        const colorClasses = getColorClasses(exp.color, isHovered)

                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    initial: { opacity: 0, x: -50, y: 30 },
                                    animate: {
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                        transition: {
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 80,
                                            damping: 20,
                                        },
                                    },
                                }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className="group relative md:ml-0"
                            >
                                {index < experiences.length - 1 && (
                                    <motion.div
                                        className="hidden md:block absolute left-6 top-20 w-1 h-12 bg-gradient-to-b from-slate-300 to-transparent"
                                        animate={isHovered ? { scaleY: 1.2 } : { scaleY: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}

                                <motion.div
                                    className={`hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full border-4 border-white ${colorClasses.dotBg} shadow-lg items-center justify-center`}
                                    animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <motion.div
                                        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-2 h-2 bg-white rounded-full"
                                    />
                                </motion.div>

                                <Card className={`md:ml-20 transition-all duration-500 cursor-pointer relative overflow-hidden border-slate-200 hover:${colorClasses.border} hover:shadow-xl hover:${colorClasses.shadow} ${isHovered ? colorClasses.bg : "bg-white"}`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}/>
                                    <motion.div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>

                                    <CardHeader className="relative z-10 pb-3">
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex-1">
                                                <CardTitle className={`text-slate-800 group-hover:${colorClasses.text} group-hover:scale-110 transition-all duration-300 text-xl group-hover:translate-x-1`}>
                                                    {exp.title}
                                                </CardTitle>
                                                <p className={`text-base font-semibold ${colorClasses.text} mt-1`}>{exp.company}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="relative z-10">
                                        <p className="text-slate-700 mb-4 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <motion.div
                                                    key={skill}
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <Badge
                                                        variant="secondary"
                                                        className={`${colorClasses.badgeBg} ${colorClasses.badgeText} ${colorClasses.badgeBorder} border hover:shadow-sm transition-all duration-300 cursor-pointer font-medium text-xs`}
                                                    >
                                                        {skill}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <motion.div
                                        className={`absolute -inset-1 bg-gradient-to-r ${colorClasses.gradient} rounded-lg blur opacity-0 group-hover:opacity-15 transition-opacity duration-500 -z-10`}
                                        animate={isHovered ? { scale: [1, 1.02, 1] } : {}}
                                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                    />
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block bg-gradient-to-r from-slate-50 to-blue-50 px-10 py-6 rounded-2xl border border-slate-200/50 shadow-lg"
                    >
                        <p className="text-slate-800 text-lg font-medium">Open to new opportunities and exciting projects</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
