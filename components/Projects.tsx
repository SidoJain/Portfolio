import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const Projects = () => {
    const projects = [
        {
            title: "Real Time Chat App",
            description: "A full-stack project that enables users to connect, communicate, and share messages instantly.",
            tech: ["Next.js", "MongoDB", "Socket.io", "JWT", "Tailwind", "Lucide", "BCrypt"],
            github: "https://github.com/SidoJain/Vero-Chat",
            live: "https://vero-chat.onrender.com/"
        },
        {
            title: "C-SQL",
            description: "An SQL like database implementation in C using B-Trees for indexing.",
            tech: ["C", "Low Level Systems Programming", "REPL", "B-Tree", "File I/O"],
            github: "https://github.com/SidoJain/C-SQL"
        },
        {
            title: "Sepolia Faucet",
            description: "A simple web application that allows Ethereum developers to request and receive free testnet ETH on the Sepolia test network.",
            tech: ["Solidity", "JavaScript", "Web3.js", "Hardhat"],
            github: "https://github.com/SidoJain/Sepolia-Faucet",
            live: "https://sepolia-faucet-five.vercel.app/"
        },
    ]

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
                    <p className="text-lg text-gray-600">Some of the projects I've worked on</p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <Badge key={tech} variant="outline">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <Button asChild variant="outline" size="sm">
                                            <a href={project.github} target="_blank">
                                                <img
                                                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                                                    alt="GitHub"
                                                    width="20"
                                                    height="20"
                                                    style={{ fill: '#181717' }}
                                                />
                                                Code
                                            </a>
                                        </Button>
                                        {project.live && (
                                            <Button asChild variant="outline" size="sm">
                                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}