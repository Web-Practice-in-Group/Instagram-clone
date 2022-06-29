import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

function DarkMode({ setMode, setBackground }) {
  const ThemeChanger = () => {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();

    const handleChange = (e) => {
      setTheme(e.target.checked ? "dark" : "light");
      setMode(e.target.checked ? "white" : "black");
      setBackground(e.target.checked ? "black" : "white");
    };

    return (
      <div>
        <Switch checked={isDark} onChange={handleChange} />        
      </div>
    );
  };

  return <ThemeChanger />;
}
export default DarkMode;
