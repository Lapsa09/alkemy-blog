import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deletePost } from "../../assets/fetcher";
import { getPosts, setPosts } from "../../redux/features/PostsSlice";

function Preview({ id, title }) {
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
    <tr className="postPrev">
      <td>
        <h3 onClick={() => fetchPost(id)}>{title}</h3>
      </td>
      <td>
        <EditOutlined onClick={handleEdit} />
      </td>
      <td>
        <DeleteOutline onClick={handleDelete} />
      </td>
    </tr>
  );
}

export default Preview;
