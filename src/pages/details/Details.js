import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSinglePost } from "../../assets/fetcher";
import Post from "../../components/post/Post";

function Details() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getSinglePost(id);
        setPost(postData);
      } catch (error) {
        setPost(null);
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="details">
      <h2>Details</h2>
      {post ? (
        <Post title={post.title} body={post.body} />
      ) : (
        <div className="error">
          <h2>Post Not Found</h2>
        </div>
      )}
    </div>
  );
}

export default Details;
