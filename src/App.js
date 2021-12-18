import React from "react";
import "./App.css";
import Header from "./component/Header";
import Form from "./component/Form";

function App() {
  return (
    <div className="container-fluid">
      <div className="form">
        <div>
          <Header />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
