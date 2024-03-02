import './App.css'
import NavBar from './components/NavBar.jsx'
import RefBasic from './components/RefBasic.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer tituloPag={"Si tienes un poquito de rencor con alguien, puedes desfogarte aquí"}/>
    </>
  )
}

export default App
