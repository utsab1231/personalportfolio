import Navbar from "../layout/Navbar";
import Contact from "../pages/Contact";
import HireMe from "../pages/HireMe";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Services from "../pages/Services";
import Work from "../pages/Work";
const RouterList = {
  AppLayout: Navbar,
  Home: Home,
  Services: Services,
  Resume: Resume,
  Work: Work,
  Contact: Contact,
  HireMe: HireMe,
};

export default RouterList;
