import { motion } from "framer-motion";

export default function AnimatedList() {
    const filmes = ["Oppenheimer", "A Lista de Schidler", "O Resgate do Soldado Ryan", "Dunkirk", "1917", "Nada de Novo no Front"];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const animatedItem = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="list-none p-5"
        >
            {filmes.map((filme, index) => (
                <motion.li key={index} variants={animatedItem} className="p-4 mb-2 bg-blue-700 rounded-lg text-white">
                    {filme}
                </motion.li>
            ))}
        </motion.ul>
    )
}