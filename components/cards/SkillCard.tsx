"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TechBadge } from "@/components/ui/TechBadge"

type ColorProps = {
    bg: string;
    text: string;
    border: string;
    hover: string;
    borderHover: string;
    shadow: string;
    ring: string;
}

interface SkillCardProps {
    title: string
    icon: LucideIcon
    color: ColorProps
    skills: string[]
    gradient: string
    isHovered: boolean
    onHoverStart: () => void
    onHoverEnd: () => void
}

export function SkillCard({ title, icon: Icon, color, skills, gradient, isHovered, onHoverStart, onHoverEnd }: SkillCardProps) {
    const techBadgeColors = {
        badgeBg: color.bg,
        badgeText: color.text,
        badgeBorder: color.border,
    }

    return (
        <motion.div
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
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className="group"
        >
            <Card className={`relative overflow-hidden h-full cursor-pointer transition-all duration-500 ${color.border} ${color.borderHover} ${color.shadow} ${isHovered ? color.bg : "bg-white"}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover-always:opacity-5 transition-opacity duration-500`} />
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradient} opacity-0 group-hover-always:opacity-20 transition-opacity duration-500 blur-sm`} />

                <CardHeader className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className={`p-2 rounded-xl border ${color.border} ${color.bg} group-hover-always:shadow-lg transition-all duration-300`}
                        >
                            <Icon className={`w-5 h-5 ${color.text}`} />
                        </motion.div>
                        <CardTitle className={`text-lg ${color.text} group-hover-always:scale-105 transition-all duration-300`}>
                            {title}
                        </CardTitle>
                    </div>
                </CardHeader>

                <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <TechBadge
                                key={skill}
                                tech={skill}
                                colorClasses={techBadgeColors}
                            />
                        ))}
                    </div>
                </CardContent>

                <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-lg blur opacity-0 group-hover-always:opacity-20 transition-opacity duration-500 -z-10`}
                    animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </Card>
        </motion.div>
    )
}
