import React, { useState } from "react";
import TableHead from "./TableHead";
import TableItem from "./TableItem";
import './Table.css'
const Table = ({ posts, removePost }) => {
  return (
    <div>
      <div className="table m-auto p-2 shadow rounded-3 order border-primary border-2">
        <table className="table table-striped">
          <thead>
            <TableHead />
          </thead>
          <tbody>

            {posts.map((post, index) => (
              <TableItem removePost={removePost} number={index + 1} post={post} key={post.id}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
