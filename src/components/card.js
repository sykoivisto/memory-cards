import React from 'react'

const Card = (imgSrc, title, id, onUserClickCard) => {
  return (
    <div onClick={() => onUserClickCard(id)}>
      <img src={imgSrc} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default Card