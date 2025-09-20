import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Arena from "./components/subpages/Arena";
import Edition from "./components/subpages/Edition";
import Favourite from "./components/subpages/Favourite"
import Home from "./components/subpages/Home";
import Login from "./components/subpages/Login";
import Ranking from "./components/subpages/Ranking";
import Registration from "./components/subpages/Registration";
import ExtendPokemonCard from "./components/features/pokemon/ExtendPokemonCard.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import CreatePokeForm from "./components/features/forms/CreatePokeForm.jsx";
import EditPokeForm from "./components/features/forms/EditPokeForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "pokemons", element: <Home /> },
      { path: "pokemons/:pokemon", element: <ExtendPokemonCard /> },
      { path: "registration", element: <Registration /> },
      { path: "login", element: <Login /> },
      { path: "favourite", element: <Favourite /> },
      { path: "arena", element: <Arena /> },
      { path: "ranking", element: <Ranking /> },
      { path: "edition", element: <Edition /> },
      { path: "edition/edit-pokemon/:id", element: <EditPokeForm /> },
      { path: "edition/create-pokemon", element: <CreatePokeForm /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
