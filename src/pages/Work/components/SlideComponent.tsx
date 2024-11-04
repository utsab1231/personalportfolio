import Slides from "./Slides";
import { WorkData } from "../../../utils/Constant";
import { Carousel } from "flowbite-react";

function SlideComponent() {
  return (
    <div>
      <Carousel slideInterval={10000} className="mt-5 md:mt-40">
        {WorkData.map((data, index) => (
          <Slides key={index} data={data} />
        ))}
      </Carousel>
    </div>
  );
}
export default SlideComponent;
