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

const postPost = async (title, body) => {
  await axios.post(BASE_URL, {
    title,
    body,
  });
};

const editPost = async (id, title, body) => {
  try {
    await axios.put(`${BASE_URL}/${id}`, {
      title,
      body,
    });
  } catch (error) {
    console.error(error);
  }
};

const deletePost = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};

export { getAllPosts, getSinglePost, postPost, editPost, deletePost };
