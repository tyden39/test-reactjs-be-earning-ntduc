import React, { useContext, useState } from 'react'
import { Test3Context } from 'Test3'

const SelectWord = ({item, index}) => {
  const {state, dispatch} = useContext(Test3Context)
  const {selectedList} = state
  const [selected, setSelected] = useState(false)

  const handleClick = (word, primary) => {
    setSelected(word)

    const existItemIndex = selectedList.findIndex(item => item.primary === primary)
    const newItem = {primary, word}
    if (existItemIndex > -1)
      selectedList[existItemIndex] = newItem
    else selectedList.push(newItem)
    dispatch({type: 'SET_SELECTED_ITEM', payload: [...selectedList]})
  }

  return (
    <div className="word-list2__item2">
      <div className='word-list2__item2__index'><span>{item?.primary}</span></div>
      {item?.list?.map((word, i) => 
        <span 
          key={`list6-item-${i}`} 
          className={`word-list2__item2__word ${selected === word ? 'word-list2__item2__word--selected' : ''}`} onClick={() => handleClick(word, item.primary)}>
          {word}
        </span>
      )}
    </div>
  )
}

export default SelectWord
