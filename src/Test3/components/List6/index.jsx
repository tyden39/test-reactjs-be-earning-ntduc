import React from 'react'
import SelectWord from '../SelectWord'

const List6 = ({data}) => {

  return (
    <div className='word-list2'>
      {data.map((item, index) => 
        <SelectWord key={`list6-${index}`} item={item} index={index} />
      )}
    </div>
  )
}

export default List6