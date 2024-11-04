import { ResumeStatus } from "../../utils/Constant";

function ResumeIndex({
  hireMeData,
  setResumeStatus,
  resumeStatus,
}: {
  hireMeData: { message: string };
  setResumeStatus: React.Dispatch<React.SetStateAction<ResumeStatus>>;
  resumeStatus: string;
}) {
  const isActiveField = (field: string) => {
    return field === resumeStatus;
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="">
        <h1 className="text-5xl text-neutral font-mono my-3">Why hire me ?</h1>
        <div className="text-neutralmedium font-jetbrains w-full md:w-3/4">
          {hireMeData.message}
        </div>
      </div>
      <div className="flex md:flex-col gap-1 md:gap-3 ">
        <div
          className={`${
            isActiveField(ResumeStatus.EXPERIENCE)
              ? "bg-secondary text-black"
              : "bg-primarylight text-neutral"
          } px-3 py-1 rounded-md text-center w-3/4`}
          onClick={() => setResumeStatus(ResumeStatus.EXPERIENCE)}
        >
          <span className="font-bold">Experience</span>
        </div>
        <div
          className={`${
            isActiveField(ResumeStatus.EDUCATION)
              ? "bg-secondary text-black"
              : "bg-primarylight text-neutral"
          } px-3 py-1 rounded-md text-center w-3/4`}
          onClick={() => setResumeStatus(ResumeStatus.EDUCATION)}
        >
          <span className="font-bold">Education</span>
        </div>
        <div
          className={`${
            isActiveField(ResumeStatus.SKILLS)
              ? "bg-secondary text-black"
              : "bg-primarylight text-neutral"
          } px-3 py-1 rounded-md text-center w-3/4`}
          onClick={() => {
            setResumeStatus(ResumeStatus.SKILLS);
          }}
        >
          <span className="font-bold">Skills</span>
        </div>
        <div
          className={`${
            isActiveField(ResumeStatus.PERSONALINFO)
              ? "bg-secondary text-black"
              : "bg-primarylight text-neutral"
          } px-3 py-1 rounded-md text-center w-3/4`}
          onClick={() => {
            setResumeStatus(ResumeStatus.PERSONALINFO);
          }}
        >
          <span className="font-bold">About Me</span>
        </div>
      </div>
    </div>
  );
}
export default ResumeIndex;
