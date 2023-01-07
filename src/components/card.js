import React from 'react'

const Card = (props) => {
  return (
    <div className='card' onClick={() => props.onUserClickCard(props.id)}>
      <div className='imgWrapper'>
        <img src={props.imgSrc} alt={props.name} />
      </div>
      <div className='nameWrapper'>
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default Card