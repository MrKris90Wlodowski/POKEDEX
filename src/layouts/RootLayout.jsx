// IMPORTS
import { Link, Outlet } from "react-router-dom"
import Wrapper from "../components/shared/Wrapper"
import Text from "../components/shared/Text"
import Image from "../components/shared/Image"
import Footer from "../components/subpages/Footer"
import ThemeButton from "../components/features/theme/ThemeButton"
import useTheme from "../hooks/useTheme"
import logoPokemon from "../icons/pngegg.png"
import iconPokeball from "../icons/game.png"
import clsx from "clsx"
import useAuth from "../hooks/useAuth"

// COMPONENT
const RootLayout = () => {
  // VARIABLES / STATE
  const { theme } = useTheme()
  const { log, logoutRecords, handleSetLog, userData } = useAuth()

  const baseWrapperUserClass = "flex gap-1 flex-row justify-center items-center"
  const baseLinkClass =
    "text-[var(--yellow)] font-black text-2xl border-4 p-3 rounded-2xl hover:bg-blue-700 transition duration-300 ease-in-out 2xl:w-56 md:w-96 w-56 text-center"

  const activeUser = {
    login: "block",
    logout: "hidden",
  }
  const noactiveUser = {
    login: "hidden",
    logout: "block",
  }

  const activeLinkClass = clsx(baseLinkClass, activeUser[log])
  const noactiveLinkClass = clsx(baseLinkClass, noactiveUser[log])
  const activeWrapperUserClass = clsx(baseWrapperUserClass, activeUser[log])

  // RENDER
  return (
    <Wrapper className="flex flex-col min-h-screen" variant={theme}>
      <nav className="flex gap-4 p-8 bg-blue-500 border-4 border-[var(--yellow)] w-full">
        <Wrapper className="flex flex-col-reverse gap-4 w-full justify-center items-center 2xl:justify-center 2xl:items-end">
          <Wrapper className="flex w-full 2xl:flex-row flex-col gap-4 items-center">
            <Link to="/pokemons">
              <Wrapper className="w-48 h-auto md:w-96 2xl:w-48">
                <Image src={logoPokemon} alt="logo Pokemon" />
              </Wrapper>
            </Link>
            <Wrapper className="flex flex-col 2xl:flex-row gap-4 2xl:ml-auto items-center">
              <Link to="/registration" className={noactiveLinkClass}>
                REGISTRATION
              </Link>
              <Link to="/login" className={noactiveLinkClass}>
                LOGIN
              </Link>
              <Link to="/favourite" className={activeLinkClass}>
                FAVOURITE
              </Link>
              <Link to="/arena" className={activeLinkClass}>
                ARENA
              </Link>
              <Link to="/ranking" className={activeLinkClass}>
                RANKING
              </Link>
              <Link to="/edition" className={activeLinkClass}>
                EDITION
              </Link>
              <Link
                to="/pokemons"
                className={activeLinkClass}
                onClick={() => {
                  handleSetLog()
                  logoutRecords()
                }}
              >
                LOGOUT
              </Link>
            </Wrapper>
          </Wrapper>
          <Wrapper className="flex 2xl:flex-row flex-col gap-8 justify-end">
            <Wrapper className={activeWrapperUserClass}>
              <Image
                src={iconPokeball}
                alt="icon pokeball"
                className="2xl:w-9 2xl:h-9 md:w-7.5 md:h-7.5 w-6 h-6"
              />
              <Text className="text-[var(--yellow)] font-black 2xl:text-4xl md:text-3xl">
                POKE_TRAINER: {userData?.name}
              </Text>
            </Wrapper>
            <ThemeButton />
          </Wrapper>
        </Wrapper>
      </nav>
      <Wrapper className="flex items-center justify-center flex-grow h-auto p-8">
        <Outlet />
      </Wrapper>
      <Footer />
    </Wrapper>
  )
}

// EXPORT
export default RootLayout
