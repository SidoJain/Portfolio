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
            ready: (callback: () => void) => void
            execute: (siteKey: string, options: { action: string }) => Promise<string>
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)

        try {
            const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action: "submit" })
            const templateParams = {
                user_name: form.current?.user_name.value,
                user_email: form.current?.user_email.value,
                subject: form.current?.subject.value,
                message: form.current?.message.value,
                grecaptcha_token: token,
            }

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            )

            setSubmitStatus("success")
        } catch {
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
                        <h2 className="text-4xl font-semibold mb-6 text-white">Contact Me</h2>
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
                                            <p className="text-slate-200 font-medium">Copy Email Address</p>
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
                                        <a href="https://www.linkedin.com/in/sido-jain/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                            <Image
                                                src="icons/linkedin.svg"
                                                alt="LinkedIn"
                                                width="20"
                                                height="20"
                                                style={{ fill: '#181717' }}
                                                loading="lazy"
                                            />
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
                                                src="icons/github.svg"
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
                                            <Image
                                                src="icons/leetcode.svg"
                                                alt="Leetcode"
                                                width="20"
                                                height="20"
                                                style={{ fill: '#181717' }}
                                                loading="lazy"
                                            />
                                            <span className="text-black font-semibold">LeetCode</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-slate-300 text-slate-700 bg-slate-300 hover:bg-white transition-all duration-300 shadow-sm"
                                    >
                                        <a href="https://codeforces.com/profile/SidoJain" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="icons/codeforces.svg"
                                                alt="Codeforces"
                                                width="20"
                                                height="20"
                                                style={{ fill: '#181717' }}
                                                loading="lazy"
                                            />
                                            <span className="text-black font-semibold">Codeforces</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-slate-300 text-slate-700 bg-slate-300 hover:bg-white transition-all duration-300 shadow-sm"
                                    >
                                        <a href="https://www.geeksforgeeks.org/profile/sidojain" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="icons/geeksforgeeks.svg"
                                                alt="Geeksforgeeks"
                                                width="20"
                                                height="20"
                                                style={{ fill: '#181717' }}
                                                loading="lazy"
                                            />
                                            <span className="text-black font-semibold">GeeksForGeeks</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-slate-300 text-slate-700 bg-slate-300 hover:bg-white transition-all duration-300 shadow-sm"
                                    >
                                        <a href="https://x.com/JainSido" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="icons/x.svg"
                                                alt="twitter"
                                                width="20"
                                                height="20"
                                                style={{ fill: '#181717' }}
                                                loading="lazy"
                                            />
                                            <span className="text-black font-semibold">Twitter</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-slate-300 text-slate-700 bg-slate-300 hover:bg-white transition-all duration-300 shadow-sm"
                                    >
                                        <a href="https://instagram.com/sido_jain" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="icons/instagram.svg"
                                                alt="instagram"
                                                width="20"
                                                height="20"
                                                style={{ fill: '#181717' }}
                                                loading="lazy"
                                            />
                                            <span className="text-black font-semibold">Instagram</span>
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
                                    I&apos;m genuinely curious about your goals and committed to finding solutions that work for both
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