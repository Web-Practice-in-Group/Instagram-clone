import React, { useState, useEffect } from "react";
import { supabase } from "../../utils/Client";

function Test() {
  const [posts, setPosts] = useState("");

  const getPosts = () => {
    const { data } = supabase.from("posts").select("*");
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <div>
      <h1>Tests</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Test;
