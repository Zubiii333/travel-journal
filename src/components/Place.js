import React from 'react'

function Place(props) {
  // const coverImg = '../images/Amsterdam.jpg';
  return (
  <div style={{ backgroundImage: '../images/Amsterdam.jpg' }} className='my-component-class'>
        <div className='block'>
        <h1 className="title">{props.title}</h1>
        <h2 className='country'>{props.country}</h2>
        </div>
        <h1 className='date'>{props.date}</h1>
    </div>
  )
}

export default Place