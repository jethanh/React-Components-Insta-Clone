//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  

  //useState in order to theoretically pass in a different set of data for each user
  const [data] = useState(dummyData);
  //console.log(data); 

  
  return (
    <div className="posts-container-wrapper">
      {data.map(x => (
        < Post post={x} />
      ))}
    </div>
  );
};

export default PostsPage;

