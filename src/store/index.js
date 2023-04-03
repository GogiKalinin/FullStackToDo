import { createStore, combineReducers } from "redux"
import { cashReducer } from "./cashReducer"
import { customersReducer } from "./customersReducer"
import {composeWithDevTools} from 'redux-devtools-extension'
import { listReducer } from "./listReducer"

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer,
    list: listReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())

