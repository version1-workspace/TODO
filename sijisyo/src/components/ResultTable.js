import React from "react";

class ResultTable extends React.Component {
  render() {
    console.log("data", this.props.data)

    const { data } = this.props
    return (
      <div className="resultTable">
        <table>
          <thead>
            <tr>
              <th>フィールド1</th>
              <th>フィールド2</th>
              <th>フィールド3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.field1}</td>
              <td>{data.field2}</td>
              <td>{data.field3}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ResultTable;
