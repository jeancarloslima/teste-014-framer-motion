import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export default function AnimatedModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-100 p-5 border">
      <button onClick={() => setOpen(!open)} className="p-2 bg-white border rounded">Toggle Modal</button>

      <AnimatePresence>
        {open && (
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-amber-500 p-5 mt-2 rounded-md text-white"
            >
                Exemplo de modal
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
