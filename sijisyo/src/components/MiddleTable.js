import React from "react";

class MiddleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: [],
    };
  }
  render() {
    const inputSerial = this.props.inputArray.serial;
    return (
      <div className="middleTable">
        <table>
          <thead>
            <tr>
              <th>通し番号</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{inputSerial}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MiddleTable;
