import React, { useState } from 'react'
import active from 'assets/active.png'
import './index.scss'

const ConfirmCheckbox = ({content, onChecked}) => {
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    const curChecked = !checked
    setChecked(curChecked)
    onChecked(curChecked)
  }

  return (
    <div className='confirm-checkbox' onClick={handleClick}>
      {checked 
        ? <img className="confirm-checkbox__icon confirm-checkbox__icon--checked" src={active} alt="confirm-checkbox-icon" />
        : <div className="confirm-checkbox__icon confirm-checkbox__icon--unchecked"></div>
      }
      <div className="confirm-checkbox__content">{content}</div>
    </div>
  )
}

export default ConfirmCheckbox