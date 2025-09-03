import { Link, Outlet } from "react-router-dom";
import Wrapper from "../components/shared/Wrapper";
import Image from "../components/shared/Image";
import Footer from "../components/subpages/Footer";
import ThemeButton from "../components/features/theme/ThemeButton";
import useTheme from "../hooks/useTheme";
import logoPokemon from "../icons/pngegg.png";
import clsx from "clsx";
import useAuth from "../hooks/useAuth";

const RootLayout = () => {
  const { theme } = useTheme();
  const { log, handleSetLog } = useAuth();

  const baseClass =
    "text-[var(--yellow)] font-black text-2xl border-4 p-3 rounded-2xl hover:bg-blue-700 transition duration-300 ease-in-out w-60 text-center";
  const activeUser = {
    login: "block",
    logout: "hidden"
  }
  const noactiveUser = {
    login: "hidden",
    logout: "block"
  }

  const activeLinkClass = clsx(baseClass, activeUser[log]);
  const noactiveLinkClass = clsx(baseClass, noactiveUser[log]);

  const linkClass = clsx(baseClass);
  return (
    <Wrapper className="flex flex-col min-h-screen" variant={theme}>
      <nav className="flex gap-4 p-8 bg-blue-500 border-4 border-[var(--yellow)]">
        <Link to="">
          <Wrapper className="w-48 h-16">
            <Image src={logoPokemon} alt="logo Pokemon" />
          </Wrapper>
        </Link>
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
        <Link to="" className={activeLinkClass} onClick={() => handleSetLog()}>
          LOGOUT
        </Link>
        <ThemeButton />
      </nav>
      <Wrapper className="flex items-center justify-center flex-grow h-auto">
        <Outlet />
      </Wrapper>
      <Footer />
    </Wrapper>
  );
};

export default RootLayout;
