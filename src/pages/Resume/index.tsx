import { useState } from "react";
import ResumeDescription from "./ResumeDescription";
import ResumeIndex from "./ResumeIndex";
import { ResumeData, ResumeStatus } from "../../utils/Constant";

function Resume() {
  const [resumeStatus, setResumeStatus] = useState(ResumeStatus.EXPERIENCE);
  const hireMeData = {
    message:
      "I’m a skilled software engineer with expertise in .NET for backend and React for frontend, experienced in optimizing APIs and ensuring efficient, secure applications. My adaptability and eagerness to learn keep me up-to-date with best practices, and I bring a collaborative approach to every project.",
  };
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="max-w-screen-sm md:w-2/5">
          <ResumeIndex
            hireMeData={hireMeData}
            setResumeStatus={setResumeStatus}
            resumeStatus={resumeStatus}
          />
        </div>
        <div className="flex-1">
          <ResumeDescription
            resumeStatus={resumeStatus}
            data={ResumeData[resumeStatus]}
          />
        </div>
      </div>
    </>
  );
}
export default Resume;
