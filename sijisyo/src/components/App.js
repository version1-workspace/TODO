import React from "react";
import "./App.css";

import InputForm from "./InputForm";
import MiddleTable from "./MiddleTable";
import ResultTable from "./ResultTable";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      input: [],
    };
  }
  render() {
    const { index, input } = this.state

    return (
      <div>
        <InputForm form={input[index] || {}} onChange={this.handleChange} />
        <ResultTable data={input[0] || {}}/>
      </div>
    );
  }

  handleChange = (form) => {
    const { input } = this.state
    const newInput = [form]

    this.setState({ input: newInput });
  };
}

export default App;
