import React from 'react'

export default class Field extends React.Component {
  render() {
    const { value, label, onChange } = this.props
    return (<tr>
       <th>{label}</th>
       <td>
         <input
           type="text"
           value={value}
           onChange={(event) => {
             onChange(event.target.value)
           }}
         />
       </td>
       <td>
         <input type="checkbox" />
       </td>
     </tr>
    )
  }
}
