import React, { PureComponent } from 'react'
import { getBaseOrSauceName } from '../logic/logic'


export class OptionForm extends PureComponent {
  render(){
    const data = this.props.options
    return(
      <select>
        {data.map((e, i) => {
          const name = getBaseOrSauceName(e)
          return (
            <option key={`${name[0].slice(0,2)}--cm--${i}`} name={name} value={name}>{name}</option>
          )
        })}
      </select>
    )
  }
}