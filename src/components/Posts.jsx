import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [post, setPost] = useState("");
  useEffect(() => {
    const fetchPostHandler = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPost(data);
      console.warn(data);
    };

    fetchPostHandler();
  }, []);
  return (
    <>
      <h1>User Post</h1>
      {/* <button onClick={fetchPostHandler}>Fetch Data</button> */}
      {post &&
        post.map((postss) => (
          <div key={postss.id}>
            <p>{postss.title}</p>
          </div>
        ))}
    </>
  );
};

export default Posts;
