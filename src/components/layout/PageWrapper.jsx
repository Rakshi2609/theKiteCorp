import { motion } from 'framer-motion';

/**
 * PageWrapper provides a consistent entrance animation 
 * and layout padding for all Kite Corp pillars.
 */
export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Custom "Elite" ease
      className="w-full pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.div>
  );
}