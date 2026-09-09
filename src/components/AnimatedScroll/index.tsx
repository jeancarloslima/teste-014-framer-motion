import { motion } from "framer-motion";

export default function AnimatedScroll() {
    return (
        <div className="pt-[100dvh] pb-[50dvw] text-center">
            <p>Rola para baixo</p>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                className="bg-red-400 p-10 rounded-2xl inline-block"
            >
                <h2>Exemplo de título</h2>
                <p>Exemplo de texto</p>
            </motion.div>
        </div>
    )
}