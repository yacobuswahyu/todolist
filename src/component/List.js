import React from "react";

function List(props) {
  return (
    <ol>
      {props.items.map((item, index) => (
        <li key={index} className="text-white">
          {item}
          <div>
            <i className="fas fa-trash-alt"></i>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default List;
