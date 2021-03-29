import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../redux/features/PostsSlice";
import FlipMove from "react-flip-move";
import Preview from "../../components/preview/Preview";
import "./home.css";

function Home() {
  const posts = useSelector(getPosts);

  return (
    <div className="home">
      <h2>A Blog</h2>
      <FlipMove className="preview__table">
        {posts.map(({ id, title }) => (
          <Preview key={id} title={title} id={id} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Home;
