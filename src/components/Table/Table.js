import React, { useState } from "react";
import TableHead from "./TableHead";
import TableItem from "./TableItem";

const Table = (props) => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", stack: "MERN-Stack" },
    { id: 2, title: "Java", stack: "Full-Stack" },
    { id: 3, title: "Go", stack: "BackEnd" },
  ]);
  return (
    <div>
      <div className="card m-5 p-2 shadow rounded-3 order border-primary border-2">
        <table className="table table-striped">
          <thead>
            <TableHead />
          </thead>
          <tbody>
            {posts.map((post) => (
              <TableItem post={post} key={post.id}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
