import Edition from "./components/subpages/Edition"
import Favourite from "./components/subpages/Favourite "
import Home from "./components/subpages/Home"
import Login from "./components/subpages/Login"
import Ranking from "./components/subpages/Ranking"
import Registration from "./components/subpages/Registration"

const App = () => {

  return (
    <>
     <h1>HELLO IN POKEDEX</h1>
     <Home/>
     <Registration/>
     <Login/>
     <Favourite/>
     <Ranking/>
     <Edition/>
    </>
  )
}

export default App
