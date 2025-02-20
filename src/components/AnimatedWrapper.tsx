"use client"; 
import { motion } from "framer-motion";

export default function AnimatedWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0, 1, 0.8, 1], y: [20, 0, 5, 0] }}
    //   animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    //   transition={{ duration: 0.6, ease: "easeInOut" }}
    transition={{ 
        duration: 3.5, 
        ease: "easeInOut", 
        // repeat: Infinity, // Loop indefinitely
        repeatType: "reverse" // Reverses animation for a smooth effect
      }}
    >
      {children}
    </motion.div>
  );
}
