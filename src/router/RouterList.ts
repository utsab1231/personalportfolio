import Navbar from "../layout/Navbar";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Services from "../pages/Services";
import Work from "../pages/Work";
import NotFound from "../pages/NotFound/NotFound";
const RouterList = {
  AppLayout: Navbar,
  Home: Home,
  Services: Services,
  Resume: Resume,
  Work: Work,
  Contact: Contact,
  NotFound: NotFound,
};

export default RouterList;
