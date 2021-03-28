import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function getAllPosts() {
  const { data } = await axios.get(BASE_URL);

  return data;
}

const getSinglePost = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/${id}`);
  return data;
};

const postPost = async (id, title, body) => {
  const { data } = await axios.post(BASE_URL, {
    id,
    title,
    body,
  });

  return data;
};

const editPost = async (id, title, body) => {
  try {
    const { data } = await axios.put(`${BASE_URL}/${id}`, {
      title,
      body,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

const deletePost = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};

export { getAllPosts, getSinglePost, postPost, editPost, deletePost };
