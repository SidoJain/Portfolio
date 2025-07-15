import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export const Skills = () => {
    const skills = {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
        backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Flask", "Auth"],
        ml: ["Scikit-learn", "Pandas", "NumPy", "Neural Networks", "Ollama"],
        blockchain: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "Hardhat"],
        devops: ["Docker", "Kubernetes", "AWS", "Vercel", "Github Actions"],
        tools: ["Figma", "Vite", "Postman", "Git", "JWT", "Socket.io", "BCrypt"],
    }

    return (
        <section id="skills" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
                    <p className="text-lg text-gray-600">Technologies I use and continue to learn</p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <motion.div variants={fadeInUp}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-purple-600">Frontend</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.frontend.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-green-600">Backend</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.backend.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-pink-600">Machine Learning</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.ml.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-orange-600">Blockchain</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.blockchain.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-blue-600">DevOps</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.devops.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-yellow-600">Tools</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}