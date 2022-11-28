export const Test3Reducer = (state, action) => {
  switch (action.type) { 
      case 'SET_SELECTED_ITEM':
          return {
              ...state,
              selectedList: action.payload
          }
      default: 
        return state
  }
}
