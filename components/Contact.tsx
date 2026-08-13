"use client"

import type React from "react"
import { useCallback, useState } from "react"
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion"
import Script from "next/script"
import Image from "next/image"
import { Mail, Send, User, MessageSquare, Copy, Check, BookOpenText, type LucideIcon } from "lucide-react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const EMAIL = "sidojain01@gmail.com"

const SOCIAL_LINKS = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sido-jain/", icon: "/icons/linkedin.svg" },
    { label: "GitHub", href: "https://github.com/SidoJain", icon: "/icons/github.svg" },
    { label: "LeetCode", href: "https://leetcode.com/u/Jain_Sido/", icon: "/icons/leetcode.svg" },
    { label: "Codeforces", href: "https://codeforces.com/profile/SidoJain", icon: "/icons/codeforces.svg" },
    { label: "GeeksForGeeks", href: "https://www.geeksforgeeks.org/profile/sidojain", icon: "/icons/geeksforgeeks.svg" },
    { label: "Twitter", href: "https://x.com/JainSido", icon: "/icons/x.svg" },
    { label: "Instagram", href: "https://instagram.com/sido_jain", icon: "/icons/instagram.svg" },
]

type FormField = {
    id: "user_name" | "user_email" | "subject" | "message"
    label: string
    icon: LucideIcon
    placeholder: string
    type: "text" | "email" | "textarea"
    autoComplete?: string
    rows?: number
}

const FORM_FIELDS: FormField[] = [
    { id: "user_name", label: "Name", icon: User, placeholder: "Your name", type: "text", autoComplete: "name" },
    { id: "user_email", label: "Email", icon: Mail, placeholder: "your.name@email.com", type: "email", autoComplete: "email" },
    { id: "subject", label: "Subject", icon: BookOpenText, placeholder: "What's this about?", type: "text" },
    { id: "message", label: "Message", icon: MessageSquare, placeholder: "Tell me about your project or just say hello!", type: "textarea", rows: 5 },
]

declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void
            execute: (siteKey: string, options: { action: string }) => Promise<string>
        }
    }
}

function waitForRecaptcha(timeoutMs = 10_000): Promise<NonNullable<Window["grecaptcha"]>> {
    return new Promise((resolve, reject) => {
        const started = Date.now()
        const poll = () => {
            if (window.grecaptcha?.execute) {
                window.grecaptcha.ready(() => resolve(window.grecaptcha!))
                return
            }
            if (Date.now() - started > timeoutMs) {
                reject(new Error("reCAPTCHA failed to load"))
                return
            }
            setTimeout(poll, 100)
        }
        poll()
    })
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [copied, setCopied] = useState(false)
    const [loadRecaptcha, setLoadRecaptcha] = useState(false)

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(EMAIL)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // Clipboard API rejects on insecure origins or denied permissions.
        }
    }, [])

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        const form = event.currentTarget
        try {
            const grecaptcha = await waitForRecaptcha()
            const token = await grecaptcha.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
                { action: "submit" },
            )

            const verifyResponse = await fetch("/api/verify-recaptcha", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            })

            const verifyData = await verifyResponse.json()
            if (!verifyData.success) {
                setSubmitStatus("error")
                return
            }

            const data = new FormData(form)
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    user_name: data.get("user_name"),
                    user_email: data.get("user_email"),
                    subject: data.get("subject"),
                    message: data.get("message"),
                    grecaptcha_token: token,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            )

            setSubmitStatus("success")
            form.reset()
        } catch {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }, [])

    return (
        <>
            {/* Load reCAPTCHA script */}
            {loadRecaptcha && (
                <Script
                    src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                    strategy="afterInteractive"
                />
            )}

            <LazyMotion features={domAnimation}>
                <section id="contact" aria-labelledby="contact-heading" className="py-12 px-4 bg-slate-800 text-white pt-20 md:pt-32">
                    <div className="max-w-4xl mx-auto">
                        <m.div
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
                        </m.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
                            {/* Contact Info */}
                            <m.div
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
                                                        <m.div
                                                            key="check"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.8 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <Check className="w-4 h-4 text-green-400" />
                                                        </m.div>
                                                    ) : (
                                                        <m.div
                                                            key="copy"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.8 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <Copy className="w-4 h-4" />
                                                        </m.div>
                                                    )}
                                                </AnimatePresence>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl w-full"
                                        >
                                            <a href={`mailto:${EMAIL}`}>
                                                <Mail className="w-5 h-5" aria-hidden="true" />
                                                <span className="text-white font-semibold">Email Me</span>
                                            </a>
                                        </Button>

                                        {SOCIAL_LINKS.map(({ label, href, icon }) => (
                                            <Button
                                                key={label}
                                                asChild
                                                variant="outline"
                                                size="lg"
                                                className="border-slate-300 text-slate-700 bg-slate-300 hover:bg-white transition-all duration-300 shadow-sm"
                                            >
                                                <a href={href} target="_blank" rel="noopener noreferrer">
                                                    <Image
                                                        src={icon}
                                                        alt=""
                                                        aria-hidden="true"
                                                        width={20}
                                                        height={20}
                                                        loading="lazy"
                                                        unoptimized
                                                    />
                                                    <span className="text-black font-semibold">{label}</span>
                                                </a>
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <m.div
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
                                </m.div>
                            </m.div>

                            {/* Contact Form */}
                            <m.div
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
                                        <form
                                            onSubmit={handleSubmit}
                                            onFocus={() => setLoadRecaptcha(true)}
                                            aria-busy={isSubmitting}
                                            className="space-y-4 md:space-y-6"
                                        >
                                            {FORM_FIELDS.map(({ id, label, icon: Icon, placeholder, type, autoComplete, rows }) => (
                                                <div key={id}>
                                                    <label htmlFor={id} className="block text-sm font-medium text-slate-200 mb-2">
                                                        <Icon className="w-4 h-4 inline mr-2" aria-hidden="true" />
                                                        {label}
                                                    </label>
                                                    {type === "textarea" ? (
                                                        <textarea
                                                            id={id}
                                                            name={id}
                                                            required
                                                            rows={rows}
                                                            placeholder={placeholder}
                                                            className={`w-full px-3 py-2 md:px-4 md:py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm md:text-base resize-none`}
                                                        />
                                                    ) : (
                                                        <input
                                                            id={id}
                                                            name={id}
                                                            type={type}
                                                            required
                                                            autoComplete={autoComplete}
                                                            placeholder={placeholder}
                                                            className="w-full px-3 py-2 md:px-4 md:py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm md:text-base"
                                                        />
                                                    )}
                                                </div>
                                            ))}

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

                                            <div aria-live="polite" className="empty:hidden">
                                                {submitStatus === "success" && (
                                                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                                                        <p className="text-green-400 text-sm">
                                                            Message sent successfully! I&apos;ll get back to you soon.
                                                        </p>
                                                    </div>
                                                )}
                                                {submitStatus === "error" && (
                                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                                        <p className="text-red-400 text-sm">
                                                            Failed to send message. Please try again or{" "}
                                                            <a href={`mailto:${EMAIL}`} className="underline">email me directly</a>.
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </form>
                                    </CardContent>
                                </Card>
                            </m.div>
                        </div>
                    </div>
                </section>
            </LazyMotion>
        </>
    )
}