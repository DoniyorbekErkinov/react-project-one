import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import MyButton from "./components/MyButtons/MyButton";
import MyInput from "./components/MyInput/MyInput";
import Table from "./components/Table/Table";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", stack: "MERN-Stack" },
    { id: 2, title: "Java", stack: "Full-Stack" },
    { id: 3, title: "Go", stack: "BackEnd" },
  ]);
  let [toggleBtn, setToggleBtn] = useState(false);
  let [value, setValue] = useState("");
  const [title, setTitle] = useState('');
  const [stack, setStack] = useState('');
  const inputRef = useRef();
  const toggle = () => {
    setToggleBtn((toggleBtn = !toggleBtn));
  };
  const addPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(stack)
  }
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
      <div className="w-50 card m-auto p-2 shadow rounded-3 order border-primary border-2">
        <form>
          <h4>Create job post</h4>
          <div className="mb-3">
            <MyInput
              type="text"
              className="form-control"
              placeholder="Programming language"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <MyInput
              type="text"
              className="form-control"
              placeholder="Your favourite stack"
              value={stack}
              onChange={e => setStack(e.target.value)}              
            />
            {/* <MyInput
              type="text"
              className="form-control"
              placeholder="Your favourite stack"
              ref={inputRef}
              onChange={e => setStack(e.target.value)}              
            /> */}
          </div>
          <MyButton className="btn btn-primary w-100" onClick={addPost}>Add Posts</MyButton>
        </form>
      </div>
      <div className="my-3">
        <Table posts={posts} />
      </div>
    </div>
  );
};

export default App;
