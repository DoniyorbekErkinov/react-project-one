import React, { useState } from "react";
import TableHead from "./TableHead";
import TableItem from "./TableItem";
import './Table.css'
const Table = (props) => {
  
  return (
    <div className="Table">
      <div className="Table w-50 card m-auto p-2 shadow rounded-3 order border-primary border-2">
        <table className="table table-striped">
          <thead>
            <TableHead />
          </thead>
          <tbody>
            {props.posts.map((post) => (
              <TableItem post={post} key={post.id}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
