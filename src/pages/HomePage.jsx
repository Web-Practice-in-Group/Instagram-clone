import React, { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import Api from "../utils/Api";

function HomePage() {
  const [list, setList] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        Api()
          .get("posts")
          .then((res) => {
            setList(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setList]);

  return (
    <div>
      <h1>Home Page</h1>
      <ThemeChanger />
      <div>
        {list.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;
