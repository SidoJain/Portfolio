"use client"

import { m } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CSSProperties } from "react"

interface ColorScheme {
    border: string
    hoverBorder: string
    shadow: string
    text: string
    bg: string
    iconBg: string
}

interface AboutMeCardProps {
    title: string
    icon: LucideIcon
    color: ColorScheme
    description: string
    gradient: string
    index: number
    isHovered: boolean
    onHoverStart: () => void
    onHoverEnd: () => void
}

export function AboutMeCard({ title, icon: Icon, color, description, gradient, index, isHovered, onHoverStart, onHoverEnd }: AboutMeCardProps) {
    return (
        <m.div
            variants={{
                initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 },
                animate: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.7, type: "spring", stiffness: 80, damping: 20 },
                },
            }}
            whileHover={{
                scale: 1.03,
                rotate: index % 2 === 0 ? 1 : -1,
                transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            className="group"
        >
            <Card className={`h-full transition-all duration-700 cursor-pointer relative overflow-hidden ${color.border} ${isHovered ? color.hoverBorder : color.border} ${isHovered ? `shadow-xl ${color.shadow}` : "shadow-md"} ${isHovered ? color.bg : "bg-white"} hover-always:shadow-2xl`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover-always:opacity-10 transition-opacity duration-700`} />

                <m.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${gradient} opacity-0 group-hover-always:opacity-20 transition-opacity duration-500`}
                    style={{ WebkitClipPath: "polygon(100% 0%, 0% 0%, 100% 100%)", clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)" } as CSSProperties}
                />

                <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start gap-4">
                        <m.div
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className={`p-3 rounded-2xl ${color.iconBg} border-2 ${color.border} group-hover-always:shadow-lg transition-all duration-500 flex-shrink-0`}
                        >
                            <Icon className={`w-7 h-7 ${color.text}`} />
                        </m.div>
                        <div className="flex-1">
                            <CardTitle className={`text-slate-800 group-hover-always:${color.text} transition-all duration-500 text-xl group-hover-always:translate-x-1`}>
                                {title}
                            </CardTitle>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                    <m.p
                        className={`text-slate-600 group-hover-always:text-slate-800 transition-all duration-500 text-base leading-relaxed group-hover-always:font-medium`}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {description}
                    </m.p>
                </CardContent>

                <m.div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg opacity-0 group-hover-always:opacity-10 transition-opacity duration-700 blur-xl`}
                    animate={
                        isHovered
                            ? { scale: [1, 1.02, 1], opacity: [0, 0.1, 0] }
                            : {}
                    }
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </Card>
        </m.div>
    )
}
