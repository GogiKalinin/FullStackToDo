const defaultState = {
    list: []
  }
  
export const listReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        // return {...state, list: state.list.push(action) }
        return { ...state, list: [...state.list, action.payload] };

      case "REMOVE_ITEM":
        return {...state, cash: state.cash - action.payload }
  
      default: 
        return state
    }
  }