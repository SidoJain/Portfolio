"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Script from "next/script"
import { Mail, Send, User, MessageSquare, Copy, Check, BookOpenText } from "lucide-react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

declare global {
    interface Window {
        grecaptcha: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        }
    }
}

export default function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [copied, setCopied] = useState(false)

    const email = "sidojain30705@gmail.com"
    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.current) return

        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            // Execute reCAPTCHA
            const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
            const token = await new Promise((resolve, reject) => {
                window.grecaptcha.ready(() => {
                    window.grecaptcha.execute(siteKey, { action: "submit" })
                        .then(resolve)
                        .catch(reject)
                })
            })

            if (!window.grecaptcha) {
                alert("reCAPTCHA failed to load. Please try again.")
                setIsSubmitting(false)
                return
            }

            // Add reCAPTCHA token to form data
            const formData = new FormData(form.current)
            formData.append("g-recaptcha-response", token as string)

            // Send email using EmailJS
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                publicKey,
            )

            if (result.status === 200) {
                setSubmitStatus("success")
                form.current.reset()
            } else {
                setSubmitStatus("error")
            }
        } catch (error) {
            console.error("Error sending email:", error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            {/* Load reCAPTCHA script */}
            <Script
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                strategy="afterInteractive"
            />

            <section id="contact" className="py-12 px-4 bg-slate-800 text-white pt-20 md:pt-32">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-semibold mb-6 text-white">
                            Contact Me
                        </h2>
                        <p className="text-xl text-slate-300 mb-12">
                            I&apos;m always open to discussing new opportunities and interesting projects
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-8 lg:mb-0"
                        >
                            <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                            <p className="text-slate-300 mb-8 leading-relaxed text-justify">
                                Whether you have a project in mind, want to collaborate, or just want to say hello, I&apos;d love to hear
                                from you. Let&apos;s create something amazing together!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <p className="text-slate-200 font-medium">Email</p>
                                            <p className="text-slate-300">{email}</p>
                                        </div>

                                        <button
                                            onClick={handleCopy}
                                            className="text-slate-400 hover:text-blue-500 transition-colors"
                                            aria-label="Copy email"
                                            disabled={copied}
                                        >
                                            <AnimatePresence mode="wait" initial={false}>
                                                {copied ? (
                                                    <motion.div
                                                        key="check"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <Check className="w-4 h-4 text-green-400" />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="copy"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <Copy className="w-4 h-4" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 sm:flex-row gap-4 pt-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl w-full sm:w-auto"
                                    >
                                        <a href="mailto:sidojain30705@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <Mail className="w-5 h-5 mr-2" />
                                            <span className="text-white font-semibold">Email Me</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-slate-300 text-slate-700 bg-slate-300 hover:bg-white transition-all duration-300 shadow-sm"
                                    >
                                        <a href="https://www.linkedin.com/in/sido-jain/" target="_blank" className="flex items-center gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                width="20"
                                                height="20"
                                                fill="#0A66C2"
                                            >
                                                <title>LinkedIn</title>
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.37-1.851 3.602 0 4.269 2.37 4.269 5.451v6.291zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                                            </svg>
                                            <span className="text-black font-semibold">LinkedIn</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-slate-300 text-slate-700 bg-slate-300 hover:bg-white transition-all duration-300 shadow-sm"
                                    >
                                        <a href="https://github.com/SidoJain" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                                                alt="GitHub"
                                                width="20"
                                                height="20"
                                                style={{ fill: '#181717' }}
                                                loading="lazy"
                                            />
                                            <span className="text-black font-semibold">GitHub</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-slate-300 text-slate-700 bg-slate-300 hover:bg-white transition-all duration-300 shadow-sm"
                                    >
                                        <a href="https://leetcode.com/u/Jain_Sido/" target="_blank" className="flex items-center gap-2" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode">
                                                <path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path>
                                                <path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path>
                                                <path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path>
                                            </svg>
                                            <span className="text-black font-semibold">LeetCode</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="mt-12"
                            >
                                <h3 className="text-2xl font-semibold text-white mb-6">Why start a conversation?</h3>
                                <p className="text-slate-300 mb-8 leading-relaxed text-justify">
                                    Beyond just coding, I bring a fresh perspective to technical challenges.
                                    I'm genuinely curious about your goals and committed to finding solutions that work for both
                                    your users and your business.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <Card className="bg-slate-700 border-slate-600 w-full">
                                <CardHeader>
                                    <CardTitle className="text-white">Send a Message</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 md:p-6">
                                    <form ref={form} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                        <div>
                                            <label htmlFor="user_name" className="block text-sm font-medium text-slate-200 mb-2">
                                                <User className="w-4 h-4 inline mr-2" />
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="user_name"
                                                name="user_name"
                                                required
                                                className="w-full px-3 py-2 md:px-4 md:py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm md:text-base"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="user_email" className="block text-sm font-medium text-slate-200 mb-2">
                                                <Mail className="w-4 h-4 inline mr-2" />
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="user_email"
                                                name="user_email"
                                                required
                                                className="w-full px-3 py-2 md:px-4 md:py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm md:text-base"
                                                placeholder="your.name@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-2">
                                                <BookOpenText className="w-4 h-4 inline mr-2" />
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                className="w-full px-3 py-2 md:px-4 md:py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm md:text-base"
                                                placeholder="What's this about?"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                                                <MessageSquare className="w-4 h-4 inline mr-2" />
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                className="w-full px-3 py-2 md:px-4 md:py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none text-sm md:text-base"
                                                placeholder="Tell me about your project or just say hello!"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center justify-center">
                                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                    Sending...
                                                </div>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>

                                        {/* Status Messages */}
                                        {submitStatus === "success" && (
                                            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                                                <p className="text-green-400 text-sm">Message sent successfully! I&apos;ll get back to you soon.</p>
                                            </div>
                                        )}

                                        {submitStatus === "error" && (
                                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                                <p className="text-red-400 text-sm">
                                                    Failed to send message. Please try again or email me directly.
                                                </p>
                                            </div>
                                        )}

                                        <p className="text-xs text-slate-400 text-center">
                                            This form is protected by reCAPTCHA and the Google{" "}
                                            <a href="https://policies.google.com/privacy" className="text-blue-400 hover:underline">
                                                Privacy Policy
                                            </a>{" "}
                                            and{" "}
                                            <a href="https://policies.google.com/terms" className="text-blue-400 hover:underline">
                                                Terms of Service
                                            </a>{" "}
                                            apply.
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}
