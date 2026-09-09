import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1
  },
  hover: {
    scale: 1.05,
    rotate: 1,
  },
};

export default function AnimatedCard() {
  return (
    <motion.div
      className="max-w-sm bg-green-500 text-white rounded-lg p-8 shadow-lg"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <p className="font-medium text-lg">Exemplo de texto</p>
    </motion.div>
  );
}
