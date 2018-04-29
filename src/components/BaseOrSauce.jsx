import React from 'react'

export const BaseOrSauce = ({ ...props }) => {
  const name = props.name[0]
  const i = props.i
  return (
    <div key={`${name}-inner-div`}>
      <input type='checkbox'
        onClick={(e) => props.handleClick(i, e)}
        key={`${name[0]}-${i}`} name={name}
        value={name}
      />
      <label>{name}</label>
    </div>
  )
}
