import { NavLink, Outlet, useLocation } from "react-router-dom";
import NameTitle from "../components/NameTitle";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CurtainTransition from "./Curtain";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const handleCompleteTransition = () => {
    setIsTransitioning(false);
  };

  useEffect(() => {
    // Trigger curtain on route change
    setIsTransitioning(true);
  }, [location]);
  return (
    <div className="w-4/5 mx-auto max-w-screen-lg pt-6">
      <div className="flex items-center justify-between">
        {/* Left side - NameTitle */}
        <div>
          <NameTitle />
        </div>

        {/* Right side - Menu items */}
        <div className="hidden md:flex text-md text-neutral font-bold">
          <ul className="flex gap-2">
            <li className="mr-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondarylight underline underline-offset-8 decoration-4"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-secondarylight underline underline-offset-8 decoration-4"
                    : ""
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-secondarylight underline underline-offset-8 decoration-4"
                    : ""
                }
                to="/resume"
              >
                Resume
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-secondarylight underline underline-offset-8 decoration-4"
                    : ""
                }
                to="/work"
              >
                Work
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-secondarylight underline underline-offset-8 decoration-4"
                    : ""
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="mr-4">
              <NavLink
                className={({ isActive }) => (isActive ? "" : "")}
                to="/hire-me"
              >
                Hire Me
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral font-bold"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile sidebar menu */}
      <div
        className={`md:hidden fixed inset-y-100 left-0 w-64 bg-primary text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-4 gap-4">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-secondarylight border-b border-dashed" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-secondarylight border-b border-dashed" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-secondarylight border-b border-dashed" : ""
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-secondarylight border-b border-dashed" : ""
              }
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-secondarylight border-b border-dashed" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hire-me"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-secondarylight border-b border-dashed" : ""
              }
            >
              Hire Me
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Outlet for nested routes */}
      <div className="mt-6">
        <AnimatePresence>
          {isTransitioning && (
            <CurtainTransition onComplete={handleCompleteTransition} />
          )}
          !isTransitioning &&{" "}
          <motion.div key={location.pathname}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
