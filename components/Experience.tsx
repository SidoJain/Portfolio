"use client"

import { LazyMotion, domAnimation, m } from "framer-motion"
import { CTA } from "@/components/cards/CTA"
import { ExperienceCard } from "@/components/cards/ExpeienceCard"
import { useState } from "react"

export default function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const experiences = [
        {
            title: "AI/ML, Blockchain & Full Stack Intern",
            company: "Vaultify.club",
            location: "Remote",
            period: "June 2025 - Sept 2025",
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

    return (
        <LazyMotion features={domAnimation}>
            <section id="experience" className="py-20 px-4 pt-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.2)_1px,transparent_0)] bg-[size:40px_40px]" />
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <m.div
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="absolute top-32 right-24 w-40 h-40 border border-blue-200/30 rounded-full"
                    />
                    <m.div
                        animate={{
                            rotate: [360, 0],
                            x: [0, 20, 0],
                        }}
                        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="absolute bottom-40 left-20 w-32 h-32 border border-purple-200/30 rounded-lg transform rotate-45"
                    />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
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
                            <h2 className="text-4xl font-bold text-slate-800">Work Experience</h2>
                        </m.div>
                        <m.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-slate-600 max-w-2xl mx-auto"
                        >
                            My professional journey and roles where I&apos;ve contributed to impactful projects
                        </m.p>
                    </m.div>

                    <m.div
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
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={index}
                                title={exp.title}
                                company={exp.company}
                                location={exp.location}
                                period={exp.period}
                                description={exp.description}
                                skills={exp.skills}
                                color={exp.color}
                                isHovered={hoveredIndex === index}
                                isLast={index === experiences.length - 1}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            />
                        ))}
                    </m.div>

                    <CTA subline="Always open to new opportunities and exciting projects" />
                </div>
            </section>
        </LazyMotion>
    )
}
