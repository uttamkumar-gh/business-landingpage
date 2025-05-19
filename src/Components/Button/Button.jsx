import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button({ children, to, onClick, type='button', className='', ...rest }) {
  
  const classes = `btn ${className}`
  
  if(to){
    return(
        <div className="btton-red">
          <Link to={to} {...rest}>
              <button className={classes} type={type}>
                  { children }
              </button>
          </Link>
        </div>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick} {...rest}>
        { children }
    </button>
  )
}

export default Button
