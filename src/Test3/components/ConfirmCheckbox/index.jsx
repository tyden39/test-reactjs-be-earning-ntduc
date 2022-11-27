import React, { useState } from 'react'
import active from 'assets/active.png'

const ConfirmCheckbox = ({content}) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className='confirm-checkbox'>
      <div className="confirm-checkbox__icon-wrapper">
        {checked && <img src={active} alt="confirm-checkbox-icon" />}
      </div>
      <div className="confirm-checkbox__content">{content}</div>
    </div>
  )
}

export default ConfirmCheckbox