import "./NavbarBottom.scss";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import profiles_svg from "../../assets/Navbar_Bottom/user.svg";
import dashboard_svg from "../../assets/Navbar_Bottom/dashboard.svg";
import notification_svg from "../../assets/Navbar_Bottom/notifications.svg";
import settings_svg from "../../assets/Navbar_Bottom/settings.svg";

function NavbarBottom() {
  const location = useLocation();
  const [showNavbarBottom, setShowNavbarBottom] = useState<boolean>(true);
  const [startY, setStartY] = useState<number | null>(null);
  const [timeoutKey, setTimeoutKey] = useState<number>(0);

  const tabs = [
    { path: "/profiles", icon: profiles_svg, label: "Profils" },
    { path: "/", icon: dashboard_svg, label: "Dashboard" },
    { path: "/notifications", icon: notification_svg, label: "Notifications" },
    { path: "/settings", icon: settings_svg, label: "Paramètres" },
  ];

  //Navigate to another page to show navbar (bottom navbar)
  useEffect(() => {
    setShowNavbarBottom(true);
    setTimeoutKey(prev => prev + 1);
  }, [location.pathname]);
  
  //Swipe up to show navbar (bottom navbar)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches[0].clientY > 550 ) { 
        setStartY(e.touches[0].clientY);
        // console.log(e.touches[0].clientY);
      }
    };
  
    const handleTouchEnd = (e: TouchEvent) => {
      if (startY && ((startY - e.changedTouches[0].clientY > 15) && (e.changedTouches[0].clientY > 380) )) {
        // console.log(e.changedTouches[0].clientY);
        setStartY(null);
        setShowNavbarBottom(true);
        setTimeoutKey(prev => prev + 1);
      }
      setStartY(null);
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startY]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNavbarBottom(false);
    }, 2500);

  return () => clearTimeout(timeout);
  }, [timeoutKey]);
  

  return (
    <motion.div
      className="navbar-bottom w-full h-30 p-4 flex justify-center items-center fixed bottom-0 left-0"
      initial={{ y: "100%" }}
      animate={{ y: showNavbarBottom ? "0%" : "100%" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <ul className="relative h-20 grid grid-cols-4 w-7/12 rounded-3xl ">
        <motion.div
          className="absolute top-0 bottom-0 w-1/4 bg-amber-500 rounded-3xl"
          layout
          initial={false}
          animate={{ x: `${tabs.findIndex(tab => tab.path === location.pathname) * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 20, mass:0.5 }}
        />

        {tabs.map((tab) => (
          <motion.li key={tab.path} className="flex items-center justify-center h-full relative "
            whileTap={{scale:0.85}}
          >
            <NavLink
              to={tab.path}
              className="flex items-center justify-center flex-col h-full w-full relative z-10"
            >
              <img src={tab.icon} alt={tab.label} className="h-10" />
              <span className="text-xl">{tab.label}</span>
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default NavbarBottom;
