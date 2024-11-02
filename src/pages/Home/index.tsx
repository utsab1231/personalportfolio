import "../../CSS/customcss/Home.css";
import HeroSection from "./components/HeroSection";
import NameAndTitle from "./components/NameAndTitle";
import SocialButtons from "./components/SocialButtons";
import Stats from "./components/Stats";

function Home() {
  return (
    <div className="pt-6">
      <div className="flex flex-col-reverse md:flex-row">
        <div>
          <NameAndTitle />
          <SocialButtons />
        </div>

        <div className="w-full h-full mb-8">
          <HeroSection />
        </div>
      </div>
      <div className="mt-3">
        <Stats />
      </div>
    </div>
  );
}
export default Home;
