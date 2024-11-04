import { HiArrowLongRight } from "react-icons/hi2";
import { IWorkData } from "../../../utils/Constant";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

function Slides({ data }: { data: IWorkData }) {
  return (
    <div className="w-[90%] mx-auto p-10">
      <div className="border-b-[1px] py-3 border-b-neutrallight ">
        <h1 className="text-neutral text-5xl font-jetbrains">{`0${data.id}`}</h1>
        <h1 className="text-neutral text-3xl font-mono">{data.title}</h1>
        <p className="text-neutralmedium text-lg font-mono">
          {data.description}
        </p>
        <div className="flex gap-4 mt-4">
          {data.languages.map((lang, index) => (
            <p key={index} className="text-secondary">
              {lang}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-4 p-3">
        {data?.liveLink && (
          <Link to={data.liveLink} target="_blank">
            <div
              className="bg-neutral w-16 h-16 rounded-full hover:bg-secondary flex justify-center items-center"
              data-tooltip-id="slide-tooltip"
              data-tooltip-content={"live-link"}
            >
              <HiArrowLongRight className="text-5xl text-black -rotate-45 hover:rotate-0 transition-all" />
            </div>
          </Link>
        )}
        {data?.githubLink && (
          <Link to={data.githubLink} target="_blank">
            <div
              data-tooltip-id="slide-tooltip"
              data-tooltip-content={"github-link"}
              className=""
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#12c583",
                  color: "#000",
                  borderColor: "#fff",
                }}
                className="p-3 rounded-full border-2 border-secondarylight text-secondarylight"
              >
                <FaGithub className="text-4xl" />
              </motion.button>
            </div>
          </Link>
        )}
      </div>
      <Tooltip
        id="slide-tooltip"
        style={{
          background: "#FDFCFF",
          color: "#000",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      />
    </div>
  );
}
export default Slides;
