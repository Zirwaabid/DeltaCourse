import './App.css'
import LudoBoard from './LudoBoard'
// import TodoList from './TodoList'
import Lottery from './Lottey'
function App() {
  return (
    <>
      {/* <LudoBoard/> */}
      {/* <TodoList/> */}
   <Lottery n={3} winningSum={15}/>
    </>
  )
}

export default App
