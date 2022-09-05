import React, { useState } from "react";
import MyButton from "./MyButtons/MyButton";
import MyInput from "./MyInput/MyInput";

export default function PostForm({createPost, cancelCreatePost}) {
  let [post, setPost] = useState({ title: "", body: "" });
  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    setPost({ title: "", body: "" });
  };
  const cancelPost = (e) => {
    e.preventDefault();
    cancelCreatePost(false)
  };
  return (
    <>
      <form>
        <h4>Create post</h4>
        <div className="mb-3">
          <MyInput
            type="text"
            className="form-control"
            placeholder="Title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <MyInput
            type="text"
            className="form-control"
            placeholder="Content"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
          {/* <MyInput
              type="text"
              className="form-control"
              placeholder="Your favourite body"
              ref={inputRef}
              onChange={e => setbody(e.target.value)}              
            /> */}
        </div>
        <MyButton className="btn btn-primary w-100" onClick={addPost}>
          Add Posts
        </MyButton>
        <MyButton className="btn btn-danger w-100 my-2" onClick={cancelPost}>
          Cancel
        </MyButton>
      </form>
    </>
  );
}
