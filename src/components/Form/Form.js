import React, { useState } from "react";
import "./Form.css";
import { addUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email }));
  };
  return (
    <div className="form-group">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
