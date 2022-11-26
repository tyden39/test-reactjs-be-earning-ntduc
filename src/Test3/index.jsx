import React, { useRef, useState } from 'react'
import './index.scss'
import copy from '../assets/copy.png'
import leftArrow from '../assets/left-arrow.png'
import downArrow from '../assets/down-arrow.png'
import copyGreen from '../assets/copy-green.png'
import loadingRed from '../assets/loading-red.png'
import loadingWhite from '../assets/loading-white.png'
import { useRandomList } from '../Test2'
import Button from './components/Button'
import List24 from './components/List24'
import List6 from './components/List6'

const Test3 = () => {
  const {list6, list18, list24, refreshList6} = useRandomList()

  const [isCreated, setIsCreated] = useState(true)

  const [buttonLoading, setButtonLoading] = useState(false)

  const [showCopiedPanel, setShowCopiedPanel] = useState(false)
  const timeoutRef = useRef()

  const [isNext, setIsNext] = useState(false)

  const handleCopy = () => {
    setShowCopiedPanel(true)

    timeoutRef.current = setTimeout(() => {
      setShowCopiedPanel(false)
    }, 2000);
  }

  const handleCloseCopiedPanel = () => {
    setShowCopiedPanel(false)
    clearTimeout(timeoutRef.current)
  }

  const handleCloseConfirmPanel = () => {
    setIsCreated(false)
    clearTimeout(timeoutRef.current)
  }

  const handleNext = () => {
    refreshList6()
    setIsNext(true)
  }

  const handleSubmit = () => {
    setButtonLoading(true)
    timeoutRef.current = setTimeout(() => {
      setIsCreated(true)
      setButtonLoading(false)
  }, 500);
  }

  const handleBack = () => {
    setIsNext(false)
  }

  return (
    <div className='test3-wrapper'>
      <div className='title'>
        <button onClick={handleBack}><img src={leftArrow} alt="left-arrow" /></button>
        <h1>Create New Wallet</h1>
      </div>

      <div className="title2">
        <p className='guide'>Auto Gen Seed Phrase?</p>
      </div>

      {isNext 
        ? <List6 data={list6} />
        : <>
          <List24 data={list24} />

          <div className='copy-block'>
            <p>Tap to Copy or Carefully write down your seed phrase and store it in a safe place</p>
            <div className='copy-block__button' onClick={handleCopy}><img src={copy} alt="copy" /></div>
          </div>
        </>
      }

      {isNext
        ? <Button onClick={handleSubmit} loading={buttonLoading}>SUBMIT</Button>
        : <Button onClick={handleNext} loading={buttonLoading}>NEXT</Button>
      }

      {showCopiedPanel && <div className="copy-announcement">
        <div className="copy-announcement__panel">
          <img className='copy-announcement__down-arrow' src={downArrow} alt="down-arrow" onClick={handleCloseCopiedPanel} />
          <img className='copy-announcement__image' src={copyGreen} alt="copy-green" />
          <p className='copy-announcement__content'>Saved to clipboard</p>
          <div className="copy-announcement__coundown">
            <img src={loadingRed} alt="loading-red" />
            <span>2s</span>
          </div>
        </div>
      </div> }

      {isCreated && <div className="copy-announcement">
        <div className="copy-announcement__panel copy-announcement__panel--created">
          <img className='copy-announcement__down-arrow' src={downArrow} alt="down-arrow" onClick={handleCloseConfirmPanel} />
          <img className='copy-announcement__image' src={copyGreen} alt="copy-green" />
          <p className='copy-announcement__content'>Your wallet has been created!</p>
          {/* <div className={`action-block__button ${buttonLoading ? ' action-block__button--loading' : ''}`}>
            {buttonLoading 
              ? <img src={loadingWhite} alt='loading-white' /> : 'NEXT' }
          </div> */}
        </div>
      </div>}
    </div>
  )
}

export default Test3