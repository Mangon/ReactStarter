import React from 'react'

export default function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style ={props.hightlight ? {"background":"#eee"}:{}}>
      {props.value}
    </button>
  )
}