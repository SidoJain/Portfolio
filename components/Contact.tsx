import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { Button } from "./ui/button"

export const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
                    <p className="text-xl text-gray-300 mb-12">
                        I'm always open to discussing new opportunities and interesting projects
                    </p>

                    <div className="grid gap-4 sm:flex sm:gap-6 sm:justify-center">
                        <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                            <a href="mailto:sidojain30705@gmail.com" target="_blank">
                                <Mail className="w-5 h-5 mr-2" />
                                Email Me
                            </a>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-gray-600 text-white bg-transparent bg-gray-700 hover:bg-gray-600 flex items-center gap-2"
                        >
                            <a href="https://www.linkedin.com/in/sido-jain/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                                    alt="LinkedIn"
                                    width="20"
                                    height="20"
                                    style={{ fill: '#0A66C2' }}
                                />
                                LinkedIn
                            </a>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-gray-600 text-white bg-transparent bg-gray-700 hover:bg-gray-600 flex items-center gap-2"
                        >
                            <a href="https://github.com/SidoJain" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                                    alt="GitHub"
                                    width="20"
                                    height="20"
                                    style={{ fill: '#181717' }}
                                />
                                GitHub
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}