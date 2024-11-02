import { motion } from "framer-motion";

const CurtainTransition = ({ onComplete }: { onComplete: () => void }) => (
  <motion.div
    initial={{ y: "-100%" }}
    animate={{ y: 0 }}
    exit={{ y: "100%" }}
    transition={{ duration: 2, ease: "linear" }}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#333",
    }}
    onAnimationComplete={onComplete}
  />
);

export default CurtainTransition;
