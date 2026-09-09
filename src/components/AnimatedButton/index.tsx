import { motion } from "framer-motion";

export default function AnimatedButton() {
    return (
        <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: "#4b82f6" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="p-3 border rounded-md">
            Clique aqui
        </motion.button>
    )
}