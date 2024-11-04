import {
  IEducation,
  Iexperience,
  ResumeStatus,
  ISkills,
} from "../../utils/Constant";
import { Tooltip } from "react-tooltip";

function ResumeDescription({
  resumeStatus,
  data,
}: {
  resumeStatus: string;
  data: any;
}) {
  switch (resumeStatus) {
    // case for experience and education
    case ResumeStatus.EXPERIENCE:
    case ResumeStatus.EDUCATION:
      return (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl text-neutral">My Experience</h1>
            <p className="text-neutralmedium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quos veniam dolorem totam sunt animi obcaecati voluptatibus
              eveniet maiores. Quas natus dignissimos nulla repellat magni fuga
              quis quo odio voluptatibus!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 max-h-96 overflow-x-hidden overflow-y-scroll scrollbar">
            {data?.map((item: IEducation | Iexperience, index: number) => (
              <div key={index} className="bg-primarylight p-3">
                <div className="text-secondary">
                  <span>
                    {item.startDate} - {item.endDate}
                  </span>
                </div>
                <div className="text-neutral text-2xl">{item.title}</div>
                <div className="text-neutralmedium font-jetbrains">
                  <ul className="list-none">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      <span>{item.description}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    // case for skills
    case ResumeStatus.SKILLS:
      return (
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl text-neutral">My Skills</h1>
            <p className="text-neutralmedium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quos veniam dolorem totam sunt animi obcaecati voluptatibus
              eveniet maiores. Quas natus dignissimos nulla repellat magni fuga
              quis quo odio voluptatibus!
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {data?.map((item: ISkills, index: number) => (
              <div
                key={index}
                className="bg-primarylight p-3 flex items-center justify-center"
                data-tooltip-id="tooltipId"
                data-tooltip-content={item.title}
              >
                {
                  <item.icon className="text-neutral text-8xl p-3 hover:text-secondary" />
                }
              </div>
            ))}
          </div>
          <Tooltip
            id="tooltipId"
            style={{
              background: "#FDFCFF",
              color: "#000",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          />
        </div>
      );

    // case for personal info
    case ResumeStatus.PERSONALINFO:
      return (
        <>
          {
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl text-neutral">About Me</h1>
              </div>
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-neutralmedium">Name: </span>
                    <span className="text-neutral">{data?.Name}</span>
                  </div>
                  <div>
                    <span className="text-neutralmedium">Email: </span>
                    <span className="text-neutral">{data?.Email}</span>
                  </div>
                  <div>
                    <span className="text-neutralmedium">Phone: </span>
                    <span className="text-neutral">{data?.Phone}</span>
                  </div>
                  <div>
                    <span className="text-neutralmedium">Location: </span>
                    <span className="text-neutral">{data?.location}</span>
                  </div>
                  <div>
                    <span className="text-neutralmedium">Experience: </span>
                    <span className="text-neutral">
                      {data?.experience} years
                    </span>
                  </div>
                  <div>
                    <span className="text-neutralmedium">Freelance: </span>
                    <span className="text-neutral">
                      {data?.freelance ? "Available" : "Not Available"}
                    </span>
                  </div>
                </div>
                <div className="text-neutralmedium font-jetbrains">
                  {data?.description}
                </div>
              </div>
            </div>
          }
        </>
      );
  }
  return <></>;
}
export default ResumeDescription;
