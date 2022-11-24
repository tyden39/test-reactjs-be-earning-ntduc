/* eslint-disable no-loop-func */
import eng from './eng'

const getRamdomItem = (count, inputList) => {
  const list = []

  for (let i = 0; i < count; i++) {
    do {
      let randomIndex = Math.floor(Math.random() * inputList.length)
      var item = inputList[randomIndex]
      var itemIndex = list.findIndex(x => x === item)
    } while (itemIndex > -1)

    list.push(item)
  }

  return list
}

const createList6 = (inputList18, inputList24) => {
  const listCheckDuplicate = []
  const list6 = []

  let list3Index = 0
  let list3Item = {
    list: [],
    primary: 0
  }

  for (let i = 0; i < inputList18.length; i++) {

    do {
      let randomIndex = Math.floor(Math.random() * inputList18.length)
      var item = inputList18[randomIndex]
      var itemIndex = listCheckDuplicate.findIndex(x => x === item)
    } while (itemIndex > -1)

    listCheckDuplicate.push(item)
    list3Item.list.push(item)
    list3Index++

    if (list3Index > 2) {
      const primaryItem = list3Item.list[Math.floor(Math.random() * 3)]
      list3Item.primary = inputList24.findIndex(x => x === primaryItem)

      list6.push({...list3Item})
      list3Index = 0
      list3Item = {
        list: [],
        primary: 0
      }
    }
  }

  return list6
}

export const getEnglishList = () => {
  const list24 = getRamdomItem(24, eng)
  const list18 = getRamdomItem(18, list24)
  const list6 = createList6(list18, list24)

  // console.log(list6)
  return {
    list6,
    list18,
    list24
  }
}
