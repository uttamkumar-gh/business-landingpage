import React from 'react'
import { Link } from 'react-router-dom'
import './StripCard.css'

const StripCard = ({ stripIcon, stripTitle, supportPhone, stripPara }) => {
  if (!stripIcon || !stripTitle) return null;

  return (
    <div className="strip">
      <div className="strip-icon">
        <img src={stripIcon} alt="Icon" />
      </div>
      <div className="strip-title">
        <h4>{stripTitle}</h4>
        {supportPhone && (
          <p>
            Ready to Help: <Link to={`tel:${supportPhone}`}>{supportPhone}</Link>
          </p>
        )}
        <p>{stripPara}</p>
      </div>
    </div>
  )
}

export default StripCard;
