import React, { createContext, useReducer, useRef, useState } from 'react'
import './index.scss'
import copy from '../assets/copy.png'
import leftArrow from '../assets/left-arrow.png'
import downArrow from '../assets/down-arrow.png'
import copyGreen from '../assets/copy-green.png'
import loadingRed from '../assets/loading-red.png'
import check from '../assets/check.png'
import { useRandomList } from '../Test2'
import ActionPanel from './components/ActionPanel'
import List24 from './components/List24'
import List6 from './components/List6'
import ConfirmCheckbox from './components/ConfirmCheckbox'
import Button from './components/Button'
import { Test3Reducer } from './reducer'

export const Test3Context = createContext()

export const initState = {
  selectedList: []
}

const Test3 = () => {
  const [state, dispatch] = useReducer(Test3Reducer, initState)
  const {selectedList} = state

  const { list6, list24, refreshList6 } = useRandomList()

  const [isCreated, setIsCreated] = useState(false)

  const [buttonLoading, setButtonLoading] = useState(false)

  const [showCopiedPanel, setShowCopiedPanel] = useState(false)
  const timeoutRef = useRef()

  const [isNext, setIsNext] = useState(false)

  const [confirm1, setConfirm1] = useState(false)
  const [confirm2, setConfirm2] = useState(false)
  const [confirm3, setConfirm3] = useState(false)

  const isAllChecked = ![confirm1, confirm2, confirm3].includes(false)

  const handleCopy = () => {
    setShowCopiedPanel(true)

    timeoutRef.current = setTimeout(() => {
      setShowCopiedPanel(false)
    }, 2000)
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

    // checkResult
    const result = selectedList.includes(item => list24.findIndex(item.word) !== item.primary);

    timeoutRef.current = setTimeout(() => {
      setIsCreated(true)
      setButtonLoading(false)
    }, 500)
  }

  const handleBack = () => {
    setIsNext(false)
  }

  const handleChecked = (index, value) => {
    switch (index) {
      case 1:
        setConfirm1(value)
        break
      case 2:
        setConfirm2(value)
        break
      case 3:
        setConfirm3(value)
        break
      default:
        break
    }
  }

  return (
    <Test3Context.Provider value={{state, dispatch}}>
      <div className="test3-wrapper">
        <div className="title">
          <button onClick={handleBack}>
            <img src={leftArrow} alt="left-arrow" />
          </button>
          <h1>Create New Wallet</h1>
        </div>

        <div className="title2">
          <p className="guide">{!isNext ? 'Auto Gen Seed Phrase?' : 'Confirm Your Seed Phrase'}</p>
        </div>

        {isNext ? (
          <List6 data={list6} />
        ) : (
          <>
            <List24 data={list24} />

            <div className="copy-block">
              <p>Tap to Copy or Carefully write down your seed phrase and store it in a safe place</p>
              <div className="copy-block__button" onClick={handleCopy}>
                <img src={copy} alt="copy" />
              </div>
            </div>
          </>
        )}

        {isNext ? (
          <ActionPanel onClick={handleSubmit} loading={buttonLoading} disabled={selectedList.length < 6} >
            SUBMIT
          </ActionPanel>
        ) : (
          <ActionPanel onClick={handleNext} loading={buttonLoading}>
            NEXT
          </ActionPanel>
        )}

        {showCopiedPanel && (
          <div className="copy-announcement">
            <div className="copy-announcement__panel">
              <div className="copy-announcement__down-arrow" onClick={handleCloseCopiedPanel}>
                <img src={downArrow} alt="down-arrow" />
              </div>
              <img className="copy-announcement__image" src={copyGreen} alt="copy-green" />
              <p className="copy-announcement__content">Saved to clipboard</p>
              <div className="copy-announcement__coundown">
                <img src={loadingRed} alt="loading-red" />
                <span>2s</span>
              </div>
            </div>
          </div>
        )}

        {isCreated && (
          <div className="copy-announcement">
            <div className="copy-announcement__panel copy-announcement__panel--created">
              <div className="copy-announcement__down-arrow" onClick={handleCloseConfirmPanel}>
                <img src={downArrow} alt="down-arrow" />
              </div>
              <img className="copy-announcement__image copy-announcement__image--created" src={check} alt="copy-green" />
              <p className="copy-announcement__content">Your wallet has been created!</p>
              <div className="copy-announcement__checkbox">
                <ConfirmCheckbox
                  onChecked={(checked) => handleChecked(1, checked)}
                  content="Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility."
                />
                <ConfirmCheckbox
                  onChecked={(checked) => handleChecked(2, checked)}
                  content="Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword."
                />
                <ConfirmCheckbox
                  onChecked={(checked) => handleChecked(3, checked)}
                  content="To keep your backup file safe, you should also keep secret your back up location and secure it."
                />
              </div>
              <div className="copy-announcement__action">
                <Button onClick={handleSubmit} loading={buttonLoading} disabled={!isAllChecked}>
                  I UNDERSTAND
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Test3Context.Provider>
  )
}

export default Test3
