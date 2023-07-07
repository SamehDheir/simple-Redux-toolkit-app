import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "../Form/Form.css";

import { addUser } from "../../redux/api";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email }, dispatch);
  };
  return (
    <div className="form-group">
      {error ? (
        "Error"
      ) : (
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
          {loading ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          ) : (
            <button type="submit">Submit</button>
          )}
          {error && loading === false && "Error !!"}
          </form>
      )}
    </div>
  );
}

export default Form;
