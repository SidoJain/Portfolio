"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
            <Header />
            <HeroSection />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}