"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TechBadge } from "@/components/ui/TechBadge"

interface ExperienceCardProps {
    title: string
    company: string
    location: string
    period: string
    description: string
    skills: string[]
    color: string
    isHovered: boolean
    isLast: boolean
    onHoverStart: () => void
    onHoverEnd: () => void
}

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

export function ExperienceCard({ title, company, location, period, description, skills, color, isHovered, isLast, onHoverStart, onHoverEnd }: ExperienceCardProps) {
    const colorClasses = getColorClasses(color, isHovered)

    return (
        <motion.div
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
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className="group relative md:ml-0"
        >
            {/* Timeline connector */}
            {!isLast && (
                <motion.div
                    className="hidden md:block absolute left-6 top-20 w-1 h-12 bg-gradient-to-b from-slate-300 to-transparent"
                    animate={isHovered ? { scaleY: 1.2 } : { scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* Timeline dot */}
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

            {/* Experience Card */}
            <Card className={`md:ml-20 transition-all duration-500 cursor-pointer relative overflow-hidden border-slate-200 hover:${colorClasses.border} hover:shadow-xl hover:${colorClasses.shadow} ${isHovered ? colorClasses.bg : "bg-white"}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <motion.div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <CardHeader className="relative z-10 pb-3">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                            <CardTitle className={`text-slate-800 group-hover:${colorClasses.text} group-hover:scale-110 transition-all duration-300 text-xl group-hover:translate-x-1`}>
                                {title}
                            </CardTitle>
                            <p className={`text-base font-semibold ${colorClasses.text} mt-1`}>{company}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {period}
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {location}
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="relative z-10">
                    <p className="text-slate-700 mb-4 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <TechBadge
                                key={skill}
                                tech={skill}
                                colorClasses={colorClasses}
                                variant="secondary"
                            />
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
}
