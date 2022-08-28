import React from "react";

const TableItem = (props) => {
    return (
      <tr>
        <th scope="row">{props.post.id}</th>
        <td>{props.post.title}</td>
        <td>{props.post.stack}</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
}

export default TableItem;
