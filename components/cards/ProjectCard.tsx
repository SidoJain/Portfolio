"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TechBadge } from "@/components/ui/TechBadge"
import Image from "next/image"

type ColorProps = {
    border: string
    shadow: string
    text: string
    bg: string
    badgeBg: string
    badgeText: string
    badgeBorder: string
}

interface ProjectCardProps {
    title: string
    description: string
    tech: string[]
    github: string
    live?: string
    color: ColorProps
    gradient: string
    isHovered: boolean
    onHoverStart: () => void
    onHoverEnd: () => void
}

export function ProjectCard({ title, description, tech, github, live, color, gradient, isHovered, onHoverStart, onHoverEnd }: ProjectCardProps) {
    const techBadgeColors = {
        badgeBg: color.badgeBg,
        badgeText: color.badgeText,
        badgeBorder: color.badgeBorder,
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 10 }}
            whileInView={{
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
            }}
            viewport={{ once: true, margin: "-50px" }}
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
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className="group"
        >
            <motion.div className="perspective-1000">
                <Card className={`h-full aspect-square transition-all duration-500 cursor-default relative overflow-hidden border-slate-200 ${isHovered ? color.border : ""} hover:${color.shadow} ${isHovered ? color.bg : "bg-white"} transform-gpu flex flex-col`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    <motion.div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <CardHeader className="relative z-10">
                        <CardTitle className={`text-slate-800 group-hover:${color.text} transition-all duration-300 text-xl group-hover:scale-125 mb-2`}>
                            {title}
                        </CardTitle>
                        <CardDescription className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed text-justify">
                            {description}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10 flex-1 flex flex-col justify-between">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {tech.map((technology) => (
                                <TechBadge key={technology} tech={technology} colorClasses={techBadgeColors} variant="secondary" />
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="border-slate-300 text-slate-600 bg-transparent group-hover:bg-white hover:scale-105 group-hover:text-black group-hover:border-slate-600 transition-all duration-300 flex-1"
                            >
                                <a href={github} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="icons/github.svg"
                                        alt="GitHub"
                                        width="24"
                                        height="24"
                                        style={{ fill: "#181717" }}
                                        loading="lazy"
                                    />
                                    Code
                                </a>
                            </Button>
                            {live && (
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="border-emerald-300 text-emerald-600 hover:scale-105 bg-transparent group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300 flex-1"
                                >
                                    <a href={live} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live
                                    </a>
                                </Button>
                            )}
                        </div>
                    </CardContent>

                    <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                        animate={isHovered ? { scale: [1, 1.02, 1] } : {}}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                </Card>
            </motion.div>
        </motion.div>
    )
}
