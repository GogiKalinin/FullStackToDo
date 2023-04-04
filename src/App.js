import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { PrepareListItem } from './Components/PrerareListItem';
import { ListItemsContainer } from './Components/ListItemsContainer';

function App() {

const dispatch = useDispatch()
const cash = useSelector(state => state.cash.cash)
const customers = useSelector(state => state.customers.customers)
const list = useSelector(state => state.list.list)

const addCash = (cash) => {
  dispatch({type: "ADD_CASH", payload: cash})
}

const getCash = (cash) => {
  dispatch({type: "GET_CASH", payload: cash})
}

console.log(list)

  return (
    <div className="App">
      {/* <div style={{fontSize: '5em'}}>{cash}</div> */}
      {/* <div style={{fontSize: '5em'}}>{customers}</div> */}
      <button onClick={()=>addCash(Number(prompt()))}>Пополнить</button>
      <button onClick={()=>getCash(Number(prompt()))}>Снять</button>
      <PrepareListItem />
      <ListItemsContainer />
    </div>
  );
}

export default App;
