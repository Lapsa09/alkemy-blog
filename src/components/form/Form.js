import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { editPost, getSinglePost, postPost } from "../../assets/fetcher";
import CustomTextInput from "../customTextInput/CustomTextInput";
import CustomTextBody from "../customTextBody/CustomTextBody";

function Form() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const typeOfForm = async () => {
      if (pathname == `/posts/${id}/edit`) {
        const { title, body } = await getSinglePost(id);
        setTitle(title);
        setBody(body);
      }
    };
    typeOfForm();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postPost(title, body);
    history.push("/");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await editPost(title, body);
    history.push("/");
  };
  return (
    <>
      <form className="form">
        <CustomTextInput
          label="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CustomTextBody
          type="text"
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button
          onClick={pathname == "/create" ? handleSubmit : handleEdit}
          type="submit"
        >
          {pathname == "/create" ? "Submit" : "Edit"}
        </button>
      </form>
    </>
  );
}

export default Form;
