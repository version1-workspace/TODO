import React from "react";
import "./App.css";

import InputForm from "./InputForm";
import MiddleTable from "./MiddleTable";
import ResultTable from "./ResultTable";

class App extends React.Component {
  render() {
    return (
      <div>
        <InputForm />

        <MiddleTable />

        <ResultTable />
      </div>
    );
  }
}

export default App;
