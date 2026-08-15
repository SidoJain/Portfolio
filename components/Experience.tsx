"use client"

import { LazyMotion, domAnimation, m } from "framer-motion"
import { CTA } from "@/components/cards/CTA"
import { ExperienceCard } from "@/components/cards/ExpeienceCard"
import { useState } from "react"

export default function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const experiences = [
        {
            title: "Software Development Intern",
            company: "Deloitte India",
            location: "Gurgaon, India",
            period: "Jun 2026 - Aug 2026",
            description: "Developed an LLM-agnostic Text-to-SQL pipeline using LangGraph to convert natural language queries into executable SQL, supporting multiple SQL dialects and relational databases with sub-10 sec execution. Built a schema-aware semantic routing system using Neo4j Aura and FAISS embeddings to identify relevant tables, concepts, relationships, and business rules for SQL generation, significantly improving query generation over the previous vector-only architecture. Implemented PII masking, SQL AST validation, self correction, and automated evaluation using DeepEval and LangSmith, achieving 96% accuracy across test cases and improving reliability of generated queries.",
            skills: ["Python", "RAG", "GenAI", "SQL", "Vector DB", "Graph DB", "PII", "LangGraph", "LangSmith", "DeepEval", "NLP", "Semantic Search", "FAISS", "Architecture Design"],
            color: "emerald"
        },
        {
            title: "AI/ML, Blockchain & Full Stack Intern",
            company: "Vaultify.club",
            location: "Remote",
            period: "Jun 2025 - Sept 2025",
            description: "Developed and maintained a financial calculator platform using Next.js, implementing 40+ financial calculators for loans, retirement planning, and other financial use cases with 100% calculation accuracy. Integrated AWS Bedrock models (Claude, Llama 2, Titan) with Lambda, WAF, Textract, S3, and Kendra to build scalable Generative AI applications, supporting 1k+ requests/day. Designed and implemented smart contracts using Solidity on the Ethereum Blockchain, optimizing contract execution to reduce gas consumption by 12% and improve transaction efficiency.",
            skills: ["TypeScript", "Python", "Solidity", "Next.js", "AWS Bedrock", "AWS Lambda", "AWS WAF", "AWS Textract", "AWS S3", "AWS Kendra", "Ethereum"],
            color: "blue"
        }
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
