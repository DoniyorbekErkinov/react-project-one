import React, { useMemo, useState, useEffect } from "react";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import FilterAndSearch from "./components/FilterAndSearch";
import MyModal from "./components/MyModal/MyModal";
import PostForm from "./components/PostForm";
import Table from "./components/Table/Table";
import { useFetchData } from "./hooks/useFetching";
import { usePost } from "./hooks/useSortPosts";
import ApiService from "./Services/PostService";

const App = () => {
  const [posts, setPosts] = useState([]);
  let [toggleBtn, setToggleBtn] = useState(false);
  const toggle = () => {
    setToggleBtn((toggleBtn = !toggleBtn));
  };
  let [value, setValue] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  
  const sortAndSearchPost = usePost(posts, filter.sort, filter.query)
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };
  
  const cancelCreatePost = () => {
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  async function fetchData() {
    const posts = await ApiService.getAllPost()
    setPosts(posts)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <h1>Hello react</h1>
      <div className="d-none justify-content-center p-5">
        <div className="card d-flex column p-5 col-6">
          <Counter />
          <p className="mt-3">Without class</p>
          <hr />
          <p className="mt-3">With class</p>
          <CounterClass />
          <div className="card d-flex column mt-5 p-5">
            <button onClick={toggle} className="btn btn-secondary">
              Toggle btn
            </button>
            {toggleBtn ? <h4 className="mt-3">Some Text</h4> : null}
          </div>
          <div className="card d-flex flex-column justify-content-around mt-5 p-5 text-dark bg-secondary ">
            <input
              type="text"
              className="col-12"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <span className="col-12 fs-4 text-light">Value: {value}</span>
          </div>
        </div>
      </div>
      <div className="card w-50 m-auto shadow rounded-3 order border-primary border-2 p-2">
        <div className="d-flex justify-content-end">
          <button onClick={() => setModal(true)} className="btn btn-primary">Add Posts</button>
        </div>
        <MyModal modal={modal} setModal={setModal}>
          <PostForm cancelCreatePost={cancelCreatePost} createPost={createPost} />
        </MyModal>
        <FilterAndSearch filter={filter} setFilter={setFilter} />
        {sortAndSearchPost.length ? (
          <Table posts={sortAndSearchPost} removePost={removePost} />
        ) : (
          <h1 className="my-3">No posts yet</h1>
        )}
      </div>
    </div>
  );
};

export default App;
