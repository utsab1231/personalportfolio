import { HiArrowLongRight } from "react-icons/hi2";

function CardComponent({
  data,
}: {
  data: { id: number; title: string; description: string }[];
}) {
  return (
    <div className="grid grid-rows-1 md:grid-rows-2 grid-flow-row md:grid-flow-col gap-16">
      {data.map((item) => (
        <div
          key={item.id}
          className="group border-b-[0.5px] border-b-neutrallight py-3"
        >
          <div className="flex items-center justify-between py-4">
            <h1 className="font-jetbrains text-5xl text-outline text-transparent group-hover:text-outline-hover">{`0${item.id}`}</h1>
            <div className="bg-neutral w-16 h-16 rounded-full group-hover:bg-secondary flex justify-center items-center">
              <HiArrowLongRight className="text-5xl text-black rotate-45 hover:rotate-0 transition-all" />
            </div>
          </div>
          <h2 className="text-4xl text-neutral font-bold font-mono group-hover:text-secondary">
            {item.title}
          </h2>
          <p className="text-neutral opacity-75">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
export default CardComponent;
