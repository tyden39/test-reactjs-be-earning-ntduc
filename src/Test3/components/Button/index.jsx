import React from 'react'
import loadingWhite from '../../../assets/loading-white.png'
import rightArrow from '../../../assets/right-arrow.png'

const Button = ({children, onClick, loading}) => {
  return (
    <div className='action-block'>
      <div className="action-block__title">
        <p>How does this work?</p>
        <button><img src={rightArrow} alt="right-arrow" /></button>
      </div>
      <div className={`action-block__button ${loading ? ' action-block__button--loading' : ''}`} onClick={onClick} >
        {loading 
          ? <img src={loadingWhite} alt='loading-white' /> : children }
      </div>
    </div>
  )
}

export default Button