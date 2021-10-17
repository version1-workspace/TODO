import React from "react";
import InputForm01Serial from "./InputForm01Serial";

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputArray: [],
    };
  }
  render() {
    return (
      <div className="inputForm">
        <button>送信</button>
        <table>
          <tbody>
            <InputForm01Serial serial={this.handleChange} />
          </tbody>
        </table>
      </div>
    );
  }

  handleChange = (value) => {
    console.log(value);
    const newArray = {
      serial: value,
    };
    this.setState({ inputArray: newArray });
  };
}

export default InputForm;
