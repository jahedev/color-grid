import Table from "./component/Table"
import Toolbar from "./component/Toolbar"

function App() {
  return (
    <div>
      <Toolbar />
      <Table rows="10" cols="10" />
    </div>
  )
}

export default App
