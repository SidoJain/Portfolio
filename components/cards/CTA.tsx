import { m } from "framer-motion"

type CTAProps = {
    boldline?: React.ReactNode
    subline?: React.ReactNode
}

export const CTA = ({ boldline, subline }: CTAProps) => {
    return (
        <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
        >
            <m.div
                whileHover={{ scale: 1.05 }}
                className="text-slate-600 text-lg font-medium bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full border border-slate-200 shadow-lg inline-block"
            >
                {boldline && (<div className="flex items-center justify-center gap-3 mb-3">
                    <p className="text-slate-800 text-xl font-bold">{boldline}</p>
                </div>)}
                {subline && (subline)}
            </m.div>
        </m.div>
    )
}
