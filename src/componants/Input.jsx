import React from 'react'

const Input = ({style, placeholder, type, name, onChange, value}) => {
  return (
    <input type={type} className={style} onChange={onChange}  value={value} placeholder={placeholder} name={name}/>
  )
}

export default Input