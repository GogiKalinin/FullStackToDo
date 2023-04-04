import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addItemToList } from '../../store/action/listReducerActionCreator'

export const PrepareListItem = () => {

const dispatch = useDispatch()
const customers = useSelector(state => state.customers.customers)
const list = useSelector(state => state.list.list)
    

const addItemToList = (item) => ({
  type: 'ADD_ITEM', 
  payload: item 
})

const removeItemFromList = (item) => ({
  type: 'REMOVE_ITEM',
  payload: item
})

const showText = () => {
    let text = document.getElementById('DigitalInput').value
    console.log(text !== null && text)
    console.log(list)
    console.log(text)
    for (let i = 0; i < list.length; i++) {
      const item = [
        {
        id: i++,
        text: text,
        }
      ]
      console.log(item)
      dispatch(addItemToList(item))
      // dispatch(addItemToList([text]))
    }
    dispatch({type: "ADD_ITEM", payload: [text]})
    // addItemToList({text})
    console.log('typeof {text}', typeof {text})
    document.getElementById("DigitalInput").value = "";
  }


  return (
  <div className='PrepareListItem'>
    <input placeholder='text' id='DigitalInput'></input>
    <button type="submit" onClick={()=>showText()}>Enter</button>
    {/* <button type="submit" onClick={()=>removeItemFromList()}>Enter</button> */}
    {list.length > 0 ?
      <div>
        {list.map(item => 
          <div key={item.id}>
            {item}
            <button onClick={() => removeItemFromList(item)}>delete item</button>
          </div>
        )}
      </div>
      :
      <div>
        Список пуст
      </div>
    }
  </div>
  )
}
