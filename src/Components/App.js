import React, { useState } from "react";
import Addtodos from "./Addtodos";
import Header from "./Header";
import Showtodos from "./Showtodos";

const App = () => {
  /** STATES */
  const [todos, setTodos] = useState([]);
  const [isDone, setDone] = useState(false);
  /** Handlers */
  const addTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  console.log(todos);
  return (
    <div className="App">
      <Header />
      <main>
        <Addtodos setTodos={setTodos} addTodos={addTodos} />
        <div className="todosList">
          <div className="container">
            <div className="d-flex flex-column align-items-center ">
              <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active font-weight-bold"
                    id="nav-home-tab"
                  >
                    Todos{" "}
                    <span className="badge badge-secondary">
                      {todos.length}
                    </span>
                  </a>
                  
                </div>
              </nav>

              {todos.length > 0 ? (
                todos.map((item) => (
                  <Showtodos todos={item} isDone={isDone} key={item} />
                ))
              ) : (
                <p>there is nothing todo!</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
