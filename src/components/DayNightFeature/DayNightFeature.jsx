import "./DayNightFeature.css"
import React, { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle';

export default function DayNightFeature() {
    const [isDarkMode, setIsDarkMode] = useState();
  
    // window
    //   .matchMedia("(prefers-color-scheme: dark)")
    //   .addEventListener("change", (e) => {
    //     const newColorScheme = e.matches ? "dark" : "light";
  
    //     setIsDarkMode(newColorScheme === "dark" ? true : false);
    //     // localStorage.setItem("data-theme", newColorScheme);
    //     document.body.setAttribute(
    //       "data-theme",
    //       // localStorage.getItem("data-theme")
    //     );
    //   });

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      localStorage.setItem("data-theme", "dark");
      document.body.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("data-theme", "light");
      document.body.setAttribute("data-theme", "light");
    }
  };

  return (
    <main className="DayNightToggle">
      <DayNightToggle
        onChange= {handleChangeTheme}
        checked={isDarkMode}
        animationInactive={false}
      /> 
    </main>
  )
}