import CreatePokeForm from "./components/features/CreatePokeForm"
import LoginForm from "./components/features/LoginForm"
import RegisterForm from "./components/features/RegisterForm"

const App = () => {

  return (
    <>
     <h1>HELLO IN POKEDEX</h1>
     <RegisterForm></RegisterForm>
     <LoginForm></LoginForm>
     <CreatePokeForm></CreatePokeForm>
    </>
  )
}

export default App
