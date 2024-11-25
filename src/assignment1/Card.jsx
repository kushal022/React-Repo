import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='card-body'>
      <div>
        <img src="./public/images/cardImage.jpeg" alt="" className="card-image" />
      </div>
      <div className="card-detail-box">
        <h3>HTTPS</h3>
        <p>Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer. This is particularly important when users transmit sensitive data, such as by logging into a bank account, email service, or health insurance provider.</p>
        <h4>Author: Kushal Jangid</h4>
      </div>
    </div>
  )
}

export default Card
