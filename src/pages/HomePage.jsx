import React, { useEffect, useState } from "react";
import Card from "../components/Cards/Card";

import Api from "../utils/Api";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);


  const getPosts = async () => {
    try {
      Api()
        .get("posts")
        .then((res) => {
          // select 10 items
          const data = res.data.slice(0, 10);
          setPosts(data);
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
          setPhotos(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(posts);
  console.log(photos);

  useEffect(() => {
    getPosts();
    getPhotos();
  }, [setPosts, setPhotos]);

  return (
    <>
      {photos.map((item) => (
        // <div key={item.id}>
        //   <h1>{item.title}</h1>
        // </div>
        <>
          <Card url={item.url} />
        </>
      ))}
    </>
  );
}
export default HomePage;
