"use client"

import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { AboutMe } from "@/components/AboutMe"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
            <Header />
            <HeroSection />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}