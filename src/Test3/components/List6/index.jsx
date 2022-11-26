import React from 'react'

const List6 = ({data}) => {
  return (
    <div className='word-list2'>
      {data.map((item, index) => 
        <div className="word-list2__item2">
          <div className='word-list2__item2__index'><span>{item?.primary}</span></div>
          {item?.list?.map((word, index) => <span style={!index ? {marginLeft: '24px'} : {}} className='word-list2__item2__word'>{word}</span>)}
        </div>
      )}
    </div>
  )
}

export default List6