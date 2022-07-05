import React, { useEffect, useState } from "react";
import Card from "../components/Cards/Card";

import Api from "../utils/Api";

function HomePage() {
  const [post, setPost] = useState([]);

  const getPosts = async () => {
    try {
      Api()
        .get("posts")
        .then((res) => {
          // select 10 items
          const data = res.data.slice(0, 10);
          // setPost(data);
          return data;
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getPhotos = async () => {
    try {
      Api()
        .get("photos")
        .then((res) => {
          // select 10 items
          const data = res.data.slice(0, 10);
          setPost(data);
          return data;
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(post);

  useEffect(() => {
    getPosts();
    getPhotos();
  }, [setPost]);

  return (
    <>
      
      {post.map((item) => (
        // <div key={item.id}>
        //   <h1>{item.title}</h1>
        // </div>
        <>
        <Card url={item.url}/>
        </>
      ))}
    </>
  );
}
export default HomePage;
