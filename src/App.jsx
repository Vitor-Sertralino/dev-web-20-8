import Contador from "./components/Contador/Contador"
import Like from "./components/Likes/Likes"
import ListaCompras from "./components/ListaCompras/ListaCompras"
import ListaNomes from "./components/ListaNomes/ListaNomes"
import NameList from "./components/Nomes/Nomes"
import './style/global.css'

function App() {

  return (
    <>
      <Contador/>
      <NameList/>
      <ListaNomes/>
      <ListaCompras/>
      <Like/>
    </>
  )
}

export default App
