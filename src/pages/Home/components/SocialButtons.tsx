import { motion } from "framer-motion";
import { GrDocumentDownload } from "react-icons/gr";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
function SocialButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-6 md:item-center">
      {/* Download CV */}
      <div className="">
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#12c583",
            color: "#000",
            borderColor: "#fff",
          }}
          className="px-2 py-1 md:px-5 md:py-3 rounded-full border-2 border-secondarylight text-secondarylight flex md:gap-3 items-center"
        >
          <span className="font-bold tracking-[0.2em]">DOWNLOAD CV</span>
          <span>
            <GrDocumentDownload className="text-lg" />
          </span>
        </motion.button>
      </div>

      {/* Social Media Buttons */}
      <div className="flex gap-6 items-center">
        <div>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#12c583",
              color: "#000",
              borderColor: "#fff",
            }}
            className="p-2 rounded-full border-2 border-secondarylight text-secondarylight"
          >
            <FaGithub className="text-lg" />
          </motion.button>
        </div>
        <div>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#12c583",
              color: "#000",
              borderColor: "#fff",
            }}
            className="p-2 rounded-full border-2 border-secondarylight text-secondarylight"
          >
            <FaLinkedin className="text-lg" />
          </motion.button>
        </div>
        <div>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#12c583",
              color: "#000",
              borderColor: "#fff",
            }}
            className="p-2 rounded-full border-2 border-secondarylight text-secondarylight"
          >
            <FaInstagram className="text-lg" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
export default SocialButtons;
