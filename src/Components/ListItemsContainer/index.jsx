import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ListItemsContainer = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.list.list)
    console.log('list at ListItemsContainer', list)
    return (
        <div>
            {/* {list} */}
        </div>
    )
}