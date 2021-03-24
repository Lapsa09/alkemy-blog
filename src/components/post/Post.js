import React from "react";
import "./post.css";

function Post({ title, body }) {
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Post;
