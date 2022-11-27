import React from 'react'

const List6 = ({data}) => {
  return (
    <div className='word-list2'>
      {data.map((item, index) => 
        <div key={`list6-${index}`} className="word-list2__item2">
          <div className='word-list2__item2__index'><span>{item?.primary}</span></div>
          {item?.list?.map((word, index) => <span key={`list6-item-${index}`} style={!index ? {marginLeft: '24px'} : {}} className='word-list2__item2__word'>{word}</span>)}
        </div>
      )}
    </div>
  )
}

export default List6