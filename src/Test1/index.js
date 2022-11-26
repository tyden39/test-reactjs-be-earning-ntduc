const getIndexValue = (numb, index) => {
  const numbAsString = numb.toString()
  return parseInt(numbAsString[index])
} 

export const getMaxArray = (arr) => {
  const newArr = []

  for (let i = 0; i < arr.length; i++ ) {
    let max = arr[i]
      
    for (var j = i + 1; j < arr.length; j++) {
        let currItem = arr[j]
        const firstValueCurrItem = getIndexValue(currItem, 0)
        const firstValueMaxItem = getIndexValue(max, 0)

        const currItemLength = currItem.toString().length - 1
        const maxItemLength = max.toString().length - 1

        const lastValueCurrItem = getIndexValue(currItem, currItemLength)
        const lastValueMaxItem = getIndexValue(max, maxItemLength)

        if ([
          firstValueMaxItem === firstValueCurrItem && lastValueMaxItem < lastValueCurrItem,
          firstValueMaxItem < firstValueCurrItem
        ].includes(true)) max = currItem
        
        // if (firstValueMaxItem === firstValueCurrItem) {
        //   if (lastValueMaxItem < lastValueCurrItem) max = currItem
        // } else if (firstValueMaxItem < firstValueCurrItem) {
        //   max = currItem
        // }
      }
    
    let maxIndex = arr.findIndex(x => x === max)
    newArr[i] = max
    arr[maxIndex] = arr[i]
  }

  return newArr
}
