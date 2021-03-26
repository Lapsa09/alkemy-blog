import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deletePost } from "../../assets/fetcher";
import { getPosts, setPosts } from "../../redux/features/PostsSlice";
import "./preview.css";

const Preview = forwardRef(({ id, title }, ref) => {
  const history = useHistory();
  const posts = useSelector(getPosts);
  const dispatch = useDispatch();

  const fetchPost = (id) => {
    history.push(`/posts/${id}`);
  };

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    await deletePost(id);
    dispatch(setPosts(posts.filter((post) => post.id !== id)));
  };

  return (
    <>
      <div ref={ref} className="postPrev">
        <h3>{title}</h3>
        <span onClick={() => fetchPost(id)}>Read more...</span>
        <div className="prev__icons">
          <EditOutlined onClick={handleEdit} />

          <DeleteOutline onClick={handleDelete} />
        </div>
      </div>
    </>
  );
});

export default Preview;
