import React from "react";
import Field from "./Field";


const fieldList = [
  {
    label: 'フィールド1',
    key: 'field1'
  },
  {
    label: 'フィールド2',
    key: 'field2'
  },
  {
    label: 'フィールド3',
    key: 'field3'
  },
  {
    label: 'フィールド4',
    key: 'field4'
  },
]


class InputForm extends React.Component {
  render() {
    const { form } = this.props

    return (
      <div className="inputForm">
        <table>
          <tbody>
            {
              fieldList.map((item) => {
                return <Field
                  label={item.label}
                  value={form[item.key]}
                  onChange={(value) => {
                    const newForm = {
                      ...form,
                      [item.key]: value
                    }
                    this.props.onChange(newForm)
                  }}
                />
              })
            }
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
