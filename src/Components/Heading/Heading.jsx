import React from 'react'
import './Heading.css'

function Heading({subtitle, title, className=''}) {
  return (
    <div className={`heading-wrapper ${className}`}>
        <div className="heading-subtitle">
            <h3>{subtitle}</h3>
        </div>
        <div className="heading-title">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Heading
