"use client"

import Footer from "@/components/Footer"
import { useState } from "react"
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion"
import { Download, Check } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
    const lastUpdated = "June 9, 2026"
    const [status, setStatus] = useState<"idle" | "done">("idle")

    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
                {/* Header */}
                <m.header
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
                >
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex items-center justify-between h-16">
                            <m.div
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
                            </m.div>

                            {/* Animated Download Button */}
                            <m.a
                                href="/resume/resume.pdf"
                                download="Siddharth_Jain_Resume.pdf"
                                onClick={() => {
                                    setStatus("done")
                                    setTimeout(() => setStatus("idle"), 2500)
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-3 py-2 text-sm font-medium"
                            >
                                <div className="relative flex items-center justify-center w-[150px] h-10 rounded-md bg-blue-600 hover:bg-blue-700 text-white overflow-hidden transition-colors">
                                    <AnimatePresence mode="wait" initial={false}>
                                        <m.span
                                            key={status}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className={`flex items-center gap-2 ${status === "done" ? "text-green-300" : ""}`}
                                        >
                                            {status === "done" ? (
                                                <>
                                                    <Check className="w-4 h-4" aria-hidden="true" />
                                                    Done!
                                                </>
                                            ) : (
                                                <>
                                                    <Download className="w-4 h-4" aria-hidden="true" />
                                                    Download PDF
                                                </>
                                            )}
                                        </m.span>
                                    </AnimatePresence>
                                </div>
                            </m.a>
                        </div>
                    </div>
                </m.header>

                <div className="text-sm text-slate-500 text-center pt-20">
                    Last updated: <span className="font-medium text-blue-600">{lastUpdated}</span>
                </div>

                <div className="block md:hidden text-center text-red-600 p-4">
                    Best seen on landscape view on mobile screens
                </div>

                {/* PDF Viewer */}
                <div className="max-w-6xl mx-auto p-4 mb-8">
                    <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="bg-white rounded-lg border h-[60vh] md:h-[80vh] border-slate-200 overflow-hidden shadow-2xl">
                            <div className="overflow-x-auto h-full w-full">
                                <div className="min-w-[320px] max-w-full h-full md:max-w-[100%] mx-auto scale-[0.35] sm:scale-[0.666] origin-top-left md:scale-100">
                                    <iframe
                                        src="/resume/resume.html"
                                        className="w-[calc(100%/0.35)] sm:w-[150%] md:w-full md:h-full h-[calc(100%/0.35)] sm:h-[150%] rounded-lg shadow-xl border border-slate-200"
                                        title="Resume"
                                        style={{ border: "none" }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </m.div>
                </div>

                <Footer />
            </div>
        </LazyMotion>
    )
}