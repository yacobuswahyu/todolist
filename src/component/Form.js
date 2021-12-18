import React, { Component } from "react";
import List from "./List";

class form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      items: [],
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="mb-3">
          <input type="text" placeholder="masukan to do . . . " className="form-input me-3" value={this.state.todoItem} onChange={this.handleChange} required />
          <button className="btn-warning rounded-3">
            <p className="fw-bold">add</p>
          </button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default form;
