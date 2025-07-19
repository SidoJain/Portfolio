"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, Check } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
    const lastUpdated = "July 9, 2025"
    const [status, setStatus] = useState<"idle" | "done">("idle")

    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = "/resume.pdf"
        link.download = "Siddharth_Jain_Resume.pdf"
        link.click()

        setStatus("done")
        setTimeout(() => setStatus("idle"), 2500)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
            {/* Header */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="font-bold text-xl text-slate-800 cursor-pointer"
                        >
                            <Link href={"/"}>
                                <span className="text-blue-600" title="Siddharth Jain">
                                    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <text x="0" y="24" fontFamily="Fira Code, monospace" fontSize="24" fill="#1E3A8A">&lt;</text>
                                        <text x="16" y="24" fontFamily="Fira Code, monospace" fontSize="24" fill="#2563EB">S</text>
                                        <text x="32" y="24" fontFamily="Fira Code, monospace" fontSize="24" fill="#2563EB">J</text>
                                        <text x="48" y="24" fontFamily="Fira Code, monospace" fontSize="24" fill="#1E3A8A">/&gt;</text>
                                    </svg>
                                </span>
                            </Link>
                        </motion.div>

                        {/* Animated Download Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                            onClick={handleDownload}
                            disabled={status === "done"}
                        >
                            <div className="relative flex items-center justify-center w-[150px] h-10 rounded-md bg-blue-600 hover:bg-blue-700 text-white overflow-hidden">

                                <AnimatePresence mode="wait" initial={false}>
                                    {status === "idle" && (
                                        <motion.div
                                            key="idle"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Download className="w-4 h-4" />
                                            Download PDF
                                        </motion.div>
                                    )}

                                    {status === "done" && (
                                        <motion.div
                                            key="done"
                                            initial={{ opacity: 0, scale: 0.6 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.6 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                            className="flex items-center gap-2 text-green-300"
                                        >
                                            <Check className="w-4 h-4" />
                                            Done!
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            <div className="text-sm text-slate-500 text-center pt-20">
                Last updated: <span className="font-medium text-blue-600">{lastUpdated}</span>
            </div>

            {/* PDF Viewer */}
            <div className="max-w-6xl mx-auto p-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xl">
                        <div className="overflow-x-auto w-full">
                            <div className="min-w-[320px] max-w-full md:max-w-[100%] mx-auto scale-[0.85] origin-top-left sm:scale-100">
                                <iframe
                                    src="/resume.html"
                                    className="w-[120%] md:w-full h-[1000px] rounded-lg shadow-xl border border-slate-200"
                                    title="Resume"
                                    style={{ border: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
