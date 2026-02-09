"use client"

import dynamic from 'next/dynamic'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const HeroSection = dynamic(() => import('@/components/HeroSection'), {
    loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg"></div>,
})

const AboutMe = dynamic(() => import('@/components/AboutMe'), {
    loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded-lg"></div>,
})

const Projects = dynamic(() => import('@/components/Projects'), {
    loading: () => <div className="h-96 animate-pulse bg-gray-200 rounded-lg"></div>,
})

const Experience = dynamic(() => import('@/components/Experience'), {
    loading: () => <div className="h-80 animate-pulse bg-gray-200 rounded-lg"></div>,
})

const Skills = dynamic(() => import('@/components/Skills'), {
    loading: () => <div className="h-48 animate-pulse bg-gray-200 rounded-lg"></div>,
})

const Contact = dynamic(() => import('@/components/Contact'), {
    loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded-lg"></div>,
})

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
            <Header />
            <HeroSection />
            <AboutMe />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}
