import { motion } from "framer-motion"
import { Code, Database, Brain, Blocks } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

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

export const AboutMe = () => {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        I'm a passionate BTech student with a deep interest in full-stack development, machine learning, and
                        blockchain technology. I love building innovative solutions that solve real-world problems and constantly
                        learning new technologies to stay at the forefront of the tech industry.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <motion.div variants={fadeInUp}>
                        <Card className="text-center h-full">
                            <CardHeader>
                                <Code className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                                <CardTitle>Full Stack</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Building end-to-end web applications with modern technologies</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="text-center h-full">
                            <CardHeader>
                                <Brain className="w-12 h-12 mx-auto text-pink-600 mb-4" />
                                <CardTitle>Machine Learning</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Exploring AI/ML to create intelligent solutions</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="text-center h-full">
                            <CardHeader>
                                <Blocks className="w-12 h-12 mx-auto text-orange-600 mb-4" />
                                <CardTitle>Blockchain</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Learning decentralized technologies and smart contracts</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="text-center h-full">
                            <CardHeader>
                                <Database className="w-12 h-12 mx-auto text-green-600 mb-4" />
                                <CardTitle>BTech Student</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">Pursuing engineering degree while building real projects</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}