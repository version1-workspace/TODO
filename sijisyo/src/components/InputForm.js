import React from "react";

class InputForm extends React.Component {
  render() {
    const { form } = this.props

    return (
      <div className="inputForm">
        <table>
          <tbody>
            <tr>
              <th>フィールド1</th>
              <td>
                <input
                  type="text"
                  value={form.field1}
                  onChange={(event) => {
                    const newForm = {
                      ...form,
                      field1: event.target.value
                    }
                    this.props.onChange(newForm)
                  }}
                />
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <th>フィールド2</th>
              <td>
                <input
                  type="text"
                  value={form.field2}
                  onChange={(event) => {
                    const newForm = {
                      ...form,
                      field2: event.target.value
                    }
                    this.props.onChange(newForm)
                  }}
                />
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <th>フィールド3</th>
              <td>
                <input
                  type="text"
                  value={form.field3}
                  onChange={(event) => {
                    const newForm = {
                      ...form,
                      field3: event.target.value
                    }
                    this.props.onChange(newForm)
                  }}
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
