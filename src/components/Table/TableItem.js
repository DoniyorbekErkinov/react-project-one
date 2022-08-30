import React from "react";
import MyButton from "../MyButtons/MyButton";

const TableItem = (props) => {
  const showBody = (id) => {
    console.log(id);
  }
    return (
      <tr>
        <th scope="row">{props.post.id}</th>
        <td>{props.post.title}</td>
        <td>{props.post.stack}</td>
        <td>
          <MyButton onClick={event => showBody(props.post.id, event)} className="btn btn-danger">Delete</MyButton>
        </td>
      </tr>
    );
}

export default TableItem;
