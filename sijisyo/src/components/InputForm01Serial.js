import React from "react";

class InputForm01Serial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }
  render() {
    return (
      <tr>
        <th>通し番号</th>
        <td>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <input type="checkbox" />
          <button onClick={this.handleSubmit}>send</button>
        </td>
      </tr>
    );
  }

  handleChange = (e) => {
    this.setState({ input: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    this.props.serial(this.state.input);
  };
}

export default InputForm01Serial;
