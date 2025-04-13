import './App.css'
import Title  from './title'

function Description() {
  return <p>I am the Description!</p>
}
function App() {
  return (
    <div>
      <Title />
      <Description/>
      <Title />
      <Description/>
    </div>
  )
}

export default App
