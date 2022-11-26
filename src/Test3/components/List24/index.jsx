import React from 'react'

const List24 = ({data}) => {
  return (
    <div className='word-list'>
      {data.map((item, index) => 
        <div key={item} className="word-list__item">
          <div><span>{index}</span></div>
          <span>{item}</span>
        </div>
      )}
    </div>
  )
}

export default List24