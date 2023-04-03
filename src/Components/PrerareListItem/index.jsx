import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const PrepareListItem = () => {

const dispatch = useDispatch()
const customers = useSelector(state => state.customers.customers)
    
const showText = () => {
    const text = document.getElementById('DigitalInput')
    console.log(text !== null && text.value)
    console.log(customers)
        
}
  
  return (
  <div className='PrepareListItem'>
    <input placeholder='text' id='DigitalInput'></input>
    <button onClick={()=>showText()}>Enter</button>
    </div>
  )
}
