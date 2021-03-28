import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../assets/fetcher";
import { getPosts, setPosts, isCharged } from "../../redux/features/PostsSlice";
import FlipMove from "react-flip-move";
import Preview from "../../components/preview/Preview";
import "./home.css";

function Home() {
  const posts = useSelector(getPosts);
  const charged = useSelector(isCharged);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      if (!charged) {
        const postsData = await getAllPosts();
        dispatch(setPosts(postsData));
      }
    };
    fetchPosts();
  }, []);

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
