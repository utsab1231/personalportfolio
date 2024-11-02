import { useEffect, useState } from "react";
function NameTitle() {
  // Define a list of colors
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  // State to hold the current color
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    // Set up an interval to change color every second
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    }, 1000); // Change color every 1 second

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-baseline gap-1">
      <div className="text-neutral font-bold text-3xl">Utsab</div>
      <div className={`h-3 w-3 ${color} rounded-full animate-pulse`}></div>
    </div>
  );
}
export default NameTitle;
