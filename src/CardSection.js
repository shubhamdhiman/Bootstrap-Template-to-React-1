import React from 'react'
import Card from './Card'

function CardSection() {
  return (
    <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">
        We love new friends!
      </h2>
      <div className="row">
        
          <Card title="Google Store"/>
          <Card />
          <Card title="App Store"/>
        </div>
      </div>
  </section>
  )
}

export default CardSection