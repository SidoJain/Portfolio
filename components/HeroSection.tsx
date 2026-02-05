"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail, FileText, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const AnimatedLogo = () => {
    const [orbitStyles, setOrbitStyles] = useState(
        Array(6).fill({ transformOrigin: "", transform: "" })
    )

    useEffect(() => {
        const radius = 35
        const newStyles = [0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180
            return {
                transformOrigin: `${Math.cos(rad) * radius}px ${Math.sin(rad) * radius}px`,
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px)`
            }
        })
        setOrbitStyles(newStyles)
    }, [])

    return (
        <div className="relative w-40 h-40 mx-auto mb-8 mt-20 sm:mt-0">
            {/* Outer rotating ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
            />

            {/* Inner rotating ring - opposite direction */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 border border-slate-400/40 rounded-full"
            />

            {/* Floating geometric shapes */}
            <motion.div
                animate={{ rotate: [0, 120, 240, 360], scale: [1, 1.1, 1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute inset-8 flex items-center justify-center"
            >
                <div className="relative">
                    {/* Central hexagon */}
                    <motion.div
                        animate={{ rotate: [0, 60, 120, 180, 240, 300, 360] }}
                        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 transform rotate-45 rounded-lg shadow-lg"
                    />

                    {/* Orbiting dots */}
                    {orbitStyles.map((style, index) => (
                        <motion.div
                            key={index}
                            animate={{ rotate: 360, scale: [1, 1.5, 1] }}
                            transition={{
                                rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }
                            }}
                            className="absolute w-3 h-3 bg-blue-400 rounded-full"
                            style={style}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Pulsing glow effect */}
            <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl"
            />
        </div>
    )
}

const BackgroundPattern = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
    </div>
)

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-20 md:pt-24">
            <BackgroundPattern />
            <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px] animate-blob-move -z-10" style={{ animationDelay: '0s', animationDuration: '20s' }} />
            <div className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-blue-900 rounded-full blur-[120px] animate-blob-move -z-10" style={{ animationDelay: '5s', animationDuration: '10s' }} />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                >
                    <AnimatedLogo />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold text-slate-800 mb-6"
                >
                    <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-slate-700 bg-clip-text text-transparent">
                        Siddharth Jain
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-md sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
                >
                    <span className="flex justify-center gap-2 items-center">
                        <MapPin />
                        New Delhi, India
                    </span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto"
                >
                    Full Stack Developer • ML Enthusiast <span className="hidden sm:inline">•</span> <span className="block sm:inline">Blockchain Explorer</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto"
                >
                    Computer Science student passionate about building innovative solutions that shape the future
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex gap-4 justify-center mb-16 flex-wrap"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <a href="mailto:sidojain30705@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Mail className="w-4 h-4 mr-2" />
                            Get In Touch
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-slate-300 text-slate-700 bg-slate-200 hover:bg-slate-100 transition-all duration-300 shadow-sm"
                    >
                        <a href="https://github.com/SidoJain" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="icons/github.svg"
                                alt="GitHub"
                                width="24"
                                height="24"
                                style={{ fill: '#181717' }}
                                loading="lazy"
                            />
                            GitHub
                        </a>
                    </Button>
                    <Link href="/resume">
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-blue-700 bg-blue-100 hover:bg-slate-100 transition-all duration-300 shadow-sm"
                        >
                            <FileText className="w-4 h-4 mr-2" />
                            Resume
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="relative mb-8 sm:mb-0"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="text-slate-400"
                    >
                        <ArrowDown className="w-6 h-6 mx-auto" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
