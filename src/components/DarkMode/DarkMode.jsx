import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

function DarkMode({ setMode }) {
  const ThemeChanger = () => {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();

    const handleChange = (e) => {
      setTheme(e.target.checked ? "dark" : "light");
      setMode(e.target.checked ? "white" : "black");
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
