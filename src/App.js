import React, { lazy, useState } from "react";
import "./App.css";
import { HiMoon, HiSun } from "react-icons/hi";
const Home = lazy(() => import("./Components/Home/Home"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Header = lazy(() => import("./Components/Header/Header"));

function App() {
  const [active, setActive] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="bg-img ">
      <div className="">
        <button className="mode-btn btn" onClick={handleModeToggle}>
          {isDarkMode ? <HiSun /> : <HiMoon />}
        </button>
        <Header active={active} setActive={setActive} />
        <Home active={active} setActive={setActive} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
