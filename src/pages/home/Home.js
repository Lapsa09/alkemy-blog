import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../assets/fetcher";
import { getPosts, setPosts } from "../../redux/features/PostsSlice";
import Preview from "../../components/preview/Preview";

function Home() {
  const posts = useSelector(getPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getAllPosts();
      dispatch(setPosts(postsData));
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h2>App</h2>
      <table>
        <tbody>
          {posts.map(({ id, title }) => (
            <Preview key={id} title={title} id={id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
