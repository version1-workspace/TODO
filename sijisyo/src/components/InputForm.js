import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputArray: {
        serial: "",
      },
    };
  }
  render() {
    return (
      <div className="inputForm">
        <button onClick={this.handleSubmit}>送信</button>
        <table>
          <tbody>
            <tr>
              <th>通し番号</th>
              <td>
                <input
                  type="text"
                  value={this.state.inputArray.serial}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  handleChange = (e) => {
    const newArray = {
      serial: e.currentTarget.value,
    };
    this.setState({ inputArray: newArray });
  };

  handleSubmit = () => {
    const { inputArray } = this.props;
    inputArray(this.state.inputArray);
  };
}

export default InputForm;
