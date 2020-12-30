import React, { useState } from "react";
const Addtodos = ({ setTodos, addTodos }) => {
  /** STATES */
  const [text, setText] = useState("");

  /** HANDLERS */
  const inputHandler = (e) => {
    setText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTodos(text);
    setText("");
  };
  return (
    <section className="jumbotron">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="jumbotron-heading">Welcome!</h1>
        <p className="lead text-muted">
          To get started, add some items to your list:
        </p>
        <form onSubmit={submitHandler} className="form-inline">
          <div className="form-group">
            <input
              type="text"
              className="form-control mx-sm-3"
              placeholder="i want to do ..."
              onChange={inputHandler}
              value={text}
            />
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Addtodos;
