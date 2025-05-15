import './App.css'
// import LudoBoard from './LudoBoard.jsx'
// import TodoList from './TodoList'
// import Lottery from './Lottey';
import Form from './form';

function App() {
  let winCondition = (ticket) => {
    return ticket[0] === 0;
  }
  return (
    <>
      {/* <LudoBoard/> */}
      {/* <TodoList/> */}
      {/* <Lottery n={3} winCondition={winCondition} /> */}
      <Form />

    </>
  )
}

export default App
