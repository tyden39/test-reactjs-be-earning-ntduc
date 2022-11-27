import React from 'react'
import loadingWhite from '../../../assets/loading-white.png'

const Button = ({loading, disabled, children, onClick}) => {
  const handleClick = () => {
    if (disabled) return
    onClick()
  }

  return (
    <div 
      className={`action-block__button 
        ${loading ? ' action-block__button--loading' : ''}
        ${disabled ? 'action-block__button--disabled' : ''}`} onClick={handleClick} >
      {loading ? <img src={loadingWhite} alt='loading-white' /> : children }
    </div>
  )
}

export default Button