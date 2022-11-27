import React from 'react'
import loadingWhite from '../../../assets/loading-white.png'

const Button = ({loading, children, onClick}) => {
  return (
    <div className={`action-block__button ${loading ? ' action-block__button--loading' : ''}`} onClick={onClick} >
      {loading ? <img src={loadingWhite} alt='loading-white' /> : children }
    </div>
  )
}

export default Button