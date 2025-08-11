import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ErrorToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function ErrorToast({ message, visible, onClose }: ErrorToastProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg text-sm font-semibold z-50"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
