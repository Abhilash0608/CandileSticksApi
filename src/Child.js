import React from "react";
const Child = (props) => {
  return (
    <div>
      <div>
        <p>{props.data.name}</p>
        <p>{props.data.email}</p>
        {props.data.name && <button onClick={props.deleteData}>remove</button>}
      </div>
    </div>
  );
};
export default Child;
