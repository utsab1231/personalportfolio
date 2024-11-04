import { ResumeData } from "../../../utils/Constant";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function ContactSection() {
  const data = ResumeData.PERSONALINFO;
  return (
    <div className="flex flex-col items-baseline justify-center gap-8 h-full">
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 rounded-sm bg-primarylight text-secondary flex justify-center items-center">
          <FaPhoneAlt />
        </div>
        <div className="flex flex-col gap-1 justify-start">
          <p className="text-white/55 font-bold">Phone</p>
          <p className="text-white font-bold text-lg font-jetbrains">
            {data.Phone}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 rounded-sm bg-primarylight text-secondary flex justify-center items-center">
          <MdEmail />
        </div>
        <div className="flex flex-col gap-1 justify-start">
          <p className="text-white/55 font-bold">Email</p>
          <p className="text-white font-bold text-lg font-jetbrains">
            {data.Email}
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 rounded-sm bg-primarylight text-secondary flex justify-center items-center">
          <FaLocationDot />
        </div>
        <div className="flex flex-col gap-1 justify-start">
          <p className="text-white/55 font-bold">Location</p>
          <p className="text-white font-bold text-lg font-jetbrains">
            {data.location}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ContactSection;
