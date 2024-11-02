import { motion } from "framer-motion";
import HeroImage from "../../../assets/HeroImage.png";
function HeroSection() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 1.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] md:w-[498px] md:h-[498px] mix-blend-lighten absolute"
        >
          <img
            src={HeroImage}
            alt="Utsab Adhikari"
            className="object-contain w-full h-full rounded-md"
          />
        </motion.div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[300px] md:w-[506px] h-[300px] md:h-[506px]"
          fill={"transparent"}
          viewBox={"0 0 506 506"}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth={4}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            className="text-neutral"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
              transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
export default HeroSection;
