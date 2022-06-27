import React, { useEffect, useState } from "react";
import Api from "../utils/Api";

function HomePage() {
  const [list, setList] = useState([]);

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
