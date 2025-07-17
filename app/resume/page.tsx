"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResumePage() {
    const lastUpdated = "July 9, 2025"

    const handleDownload = () => {
        // Create a link to download the resume
        const link = document.createElement("a")
        link.href = "/resume.pdf"
        link.download = "Siddharth_Jain_Resume.pdf"
        link.click()
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Button variant="ghost" className="text-slate-600 hover:text-blue-600">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Portfolio
                            </Button>
                        </Link>

                        <div className="flex items-center gap-4">
                            <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
                                <Download className="w-4 h-4 mr-2" />
                                Download PDF
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="text-sm text-slate-500 text-center">
                Last updated: <span className="font-medium text-blue-600">{lastUpdated}</span>
            </div>

            {/* PDF Viewer */}
            <div className="max-w-6xl mx-auto px-4 py-8">
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
