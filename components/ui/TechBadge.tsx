"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface TechBadgeProps {
    tech: string
    colorClasses?: {
        badgeBg: string
        badgeText: string
        badgeBorder: string
    }
    variant?: "secondary" | "default" | "destructive" | "outline"
}

const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 200,
            damping: 20,
        },
    },
    hover: {
        scale: 1.05,
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 10,
        },
    },
}

export function TechBadge({ tech, colorClasses, variant = "secondary" }: TechBadgeProps) {
    return (
        <motion.div
            variants={badgeVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
        >
            <Badge
                variant={variant}
                className={`${colorClasses?.badgeBg} ${colorClasses?.badgeText} ${colorClasses?.badgeBorder} border hover:shadow-sm transition-all duration-300 cursor-pointer font-medium text-xs`}
            >
                {tech}
            </Badge>
        </motion.div>
    )
}
