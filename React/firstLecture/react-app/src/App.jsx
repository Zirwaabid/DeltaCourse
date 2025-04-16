import './App.css'
import Title from './title'
import ProductTab from './productTab.jsx'
import MsgBox from "./msgBox.jsx";

function App() {
  return(
    <>
    <MsgBox userName="Elsa" textColor="pink"/>
    <MsgBox userName="Elsa" textColor="yellow"/>
    <MsgBox userName="Elsa" textColor="blue"/>
    <MsgBox userName="Elsa" textColor="orange"/>
    <ProductTab />  
     {/* <Title />
      <Title /> */}
    </>
)};

export default App
