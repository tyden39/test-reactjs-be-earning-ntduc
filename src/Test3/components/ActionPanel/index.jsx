import React from 'react'
import rightArrow from '../../../assets/right-arrow.png'
import Button from '../Button'

const ActionPanel = ({children, onClick, loading}) => {
  return (
    <div className='action-block'>
      <div className="action-block__title">
        <p>How does this work?</p>
        <button><img src={rightArrow} alt="right-arrow" /></button>
      </div>
      <Button onClick={onClick} loading={loading}>{children}</Button>
    </div>
  )
}

export default ActionPanel