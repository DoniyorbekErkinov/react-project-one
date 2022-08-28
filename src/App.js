import React, { useState } from "react";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import Table from "./components/Table/Table";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", stack: "MERN-Stack" },
    { id: 2, title: "Java", stack: "Full-Stack" },
    { id: 3, title: "Go", stack: "BackEnd" },
  ]);
  let [toggleBtn, setToggleBtn] = useState(false);
  let [value, setValue] = useState("");

  const toggle = () => {
    setToggleBtn((toggleBtn = !toggleBtn));
  };
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
      <Table posts={posts}/>
    </div>
  );
};

export default App;
