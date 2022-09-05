import React from "react";
import MyButton from "../MyButtons/MyButton";

const TableItem = ({post,number, removePost}) => {
  
    return (
      <tr>
        <th scope="row">{number}</th>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td>
          <MyButton onClick={() => removePost(post)} className="btn btn-danger">Delete</MyButton>
        </td>
      </tr>
    );
}

export default TableItem;
