import React from 'react'

const Card = (props) => {
  return (
    <div onClick={() => props.onUserClickCard(props.id)}>
      <img src={props.imgSrc} alt={props.name} />
      <p>{props.name}</p>
    </div>
  )
}

export default Card