"use client"

import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const [clickedSection, setClickedSection] = useState<string | null>(null)

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
        { name: "Resume", href: "/resume" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "contact"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        setClickedSection(null)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        if (href.startsWith("/")) return

        const sectionId = href.substring(1)
        setClickedSection(sectionId)

        const element = document.getElementById(href.substring(1))
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false)
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60"
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="font-bold text-xl text-slate-800 cursor-pointer"
                        onClick={() => scrollToSection("#home")}
                    >
                        {"SJ"}
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item, index) =>
                            item.href.startsWith("/") ? (
                                <Link key={item.name} href={item.href}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                                    >
                                        <span className="text-blue-600 mr-1">0{index + 1}.</span>
                                        {item.name}
                                    </motion.button>
                                </Link>
                            ) : (
                                <motion.button
                                    key={item.name}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`px-3 py-2 text-sm font-medium transition-colors ${(clickedSection === item.href.substring(1) || activeSection === item.href.substring(1))
                                            ? "text-blue-600 font-semibold"
                                            : "text-slate-600 hover:text-blue-600"
                                        }`}
                                >
                                    <span className="text-blue-600 mr-1">0{index + 1}.</span>
                                    {item.name}
                                </motion.button>
                            ),
                        )}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden py-4 border-t border-slate-200/60"
                    >
                        {navItems.map((item, index) =>
                            item.href.startsWith("/") ? (
                                <Link key={item.name} href={item.href}>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                                    >
                                        <span className="text-blue-600 mr-1">0{index + 1}.</span>
                                        {item.name}
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.href.substring(1) ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                                        }`}
                                >
                                    <span className="text-blue-600 mr-1">0{index + 1}.</span>
                                    {item.name}
                                </button>
                            ),
                        )}
                    </motion.nav>
                )}
            </div>
        </motion.header>
    )
}
