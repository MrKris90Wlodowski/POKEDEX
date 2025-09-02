import { Link, Outlet } from "react-router-dom";
import Wrapper from "../components/shared/Wrapper";
import Image from "../components/shared/Image";
import Footer from "../components/subpages/Footer";
import ThemeButton from "../components/features/theme/ThemeButton";
import useTheme from "../hooks/useTheme";
import logoPokemon from "../icons/pngegg.png";
import clsx from "clsx";

const RootLayout = () => {
  const { theme } = useTheme();

  const baseClass =
    "text-[var(--yellow)] font-black text-2xl border-4 p-3 rounded-2xl hover:bg-blue-700 transition duration-300 ease-in-out";
  const linkClass = clsx(baseClass);
  return (
    <Wrapper className="flex flex-col min-h-screen" variant={theme}>
      <nav className="flex gap-4 p-8 bg-blue-500 border-4 border-[var(--yellow)]">
        <Link to="">
          <Wrapper className="w-48 h-16">
            <Image src={logoPokemon} alt="logo Pokemon" />
          </Wrapper>
        </Link>
        <Link to="/registration" className={linkClass}>
          REGISTRATION
        </Link>
        <Link to="/login" className={linkClass}>
          LOGIN
        </Link>
        <Link to="/favourite" className={linkClass}>
          FAVOURITE
        </Link>
        <Link to="/arena" className={linkClass}>
          ARENA
        </Link>
        <Link to="/ranking" className={linkClass}>
          RANKING
        </Link>
        <Link to="/edition" className={linkClass}>
          EDITION
        </Link>
        <Link to="" className={linkClass}>
          LOG OUT
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
