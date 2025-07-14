import { motion } from "framer-motion"
import { ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
                        SJ
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                >
                    Siddharth Jain
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
                >
                    Full Stack Developer • ML Enthusiast • Blockchain Explorer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg text-gray-500 mb-12"
                >
                    BTech Student passionate about building innovative solutions
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex gap-4 justify-center mb-16"
                >
                    <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                        <a href="mailto:sidojain30705@gmail.com" target="_blank">
                            <Mail className="w-4 h-4 mr-2" />
                            Get In Touch
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <a href="https://github.com/SidoJain" target="_blank">
                            <img
                                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                                alt="GitHub"
                                width="28"
                                height="28"
                                style={{ fill: '#181717' }}
                            />
                            GitHub
                        </a>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="animate-bounce"
                >
                    <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
                </motion.div>
            </div>
        </section>
    )
}
