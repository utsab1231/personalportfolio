import CountUp from "react-countup";
function Stats() {
  const data = [
    {
      title: "Year of Experience",
      value: 1,
    },
    {
      title: "Technologies Mastered",
      value: 6,
    },
    {
      title: "Cups of Coffee",
      value: 1000,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-6 md:items-center">
      {data.map((item, index) => (
        <div key={index} className="flex items-baseline gap-2">
          <h1 className="text-4xl font-bold text-secondarylight p-0">
            <CountUp end={item.value} duration={10} />
          </h1>
          <p className="text-lg text-neutral">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
export default Stats;
