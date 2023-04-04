const defaultState = {
  list:[]
}

  
export const listReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return { ...state, 
          list: [...state.list, action.payload] };
        // return {...state, list: state.list.push(action) }
        // return { ...state, list: [...state.list.push(action)] };

      case "REMOVE_ITEM":
        return {
          ...state,
          list: state.list.filter(
            (list) => list.id !== action.payload
          ),
        };          
      default: 
        return state
    }
  }