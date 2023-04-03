import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const PrepareListItem = () => {

const dispatch = useDispatch()
const customers = useSelector(state => state.customers.customers)
    
const showText = () => {
    const text = document.getElementById('DigitalInput').value
    console.log(text !== null && text)
    console.log(customers)
    const item = {text}
    console.log(text)
    dispatch({type: "ADD_ITEM", payload: item})
}

// const addItem = (cash) => {
//   }
  
  return (
  <div className='PrepareListItem'>
    <input placeholder='text' id='DigitalInput'></input>
    <button onClick={()=>showText()}>Enter</button>
    </div>
  )
}
