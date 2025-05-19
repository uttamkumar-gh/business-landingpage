import React from 'react'
import './Card.css'

const Card = ({
    cardNum,
    cardIcon,
    cardTitle,
    cardText,
    className=''
}) =>{
    return (
        <div className={`card ${className}`}>
            {cardNum && 
                <div className="card-num">
                    {cardNum}
                </div>
            }
            <div className="card-icon">
                <img src={cardIcon} alt="Icon\Img" />
            </div>
            <div className="card-title">
                <h4>{cardTitle}</h4>
            </div>
            <div className="card-divider">
                <div className="big-line"></div>
                <div className="small-line"></div>
            </div>
            <div className="card-text">
                <p>{cardText}</p>
            </div>
        </div>
    )
}

export default Card
