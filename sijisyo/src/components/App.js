import React from "react";
import "./App.css";

import InputForm from "./InputForm";
import MiddleTable from "./MiddleTable";
import ResultTable from "./ResultTable";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: [],
    };
  }
  render() {
    return (
      <div>
        <InputForm inputArray={this.handleChange} />

        <MiddleTable inputArray={this.state.input} />

        <ResultTable />
      </div>
    );
  }

  handleChange = (array) => {
    this.setState({ input: array });
  };
}

export default App;
