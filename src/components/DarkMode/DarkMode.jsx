import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

function DarkMode() {
  const ThemeChanger = () => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    return (
      <div>
        The current theme is: {type}
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </div>
    );
  };

  return <ThemeChanger />;
}
export default DarkMode;
