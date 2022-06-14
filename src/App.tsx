import ToolBar from './components/ToolBar'
import Editable from './components/SlateEditable'
interface Props{

}
const App =(props:Props): JSX.Element=> {
  return (
    <div className="App">
        <ToolBar {...props}></ToolBar>
        <Editable></Editable>
    </div>
  )
}

export default App
