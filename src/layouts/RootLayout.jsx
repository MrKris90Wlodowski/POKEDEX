import { Link, Outlet } from "react-router-dom";
import Wrapper from "../components/shared/Wrapper";
import Image from "../components/shared/Image";
import Footer from "../components/subpages/Footer";
import ThemeButton from "../components/features/theme/ThemeButton";
import useTheme from "../hooks/useTheme";
import logoPokemon from "../icons/pngegg.png";

const RootLayout = () => {
  const { theme } = useTheme();
  return (
    <Wrapper className="flex flex-col min-h-screen" variant={theme}>
      <nav className="flex gap-4 p-8 bg-blue-500">
        <Link to="">
          <Wrapper className="w-48 h-16">
            <Image src={logoPokemon} alt="logo Pokemon" />
          </Wrapper>
        </Link>
        <Link
          to="/registration"
          className="text-[var(--yellow)] font-black text-2xl border-4 p-3 rounded-2xl hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          REGISTRATION
        </Link>
        <Link
          to="/login"
          className="text-[var(--yellow)] font-black text-2xl border-4 p-3 rounded-2xl hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          LOGIN
        </Link>
        <Link
          to="/favourite"
          className="text-[var(--yellow)] font-black text-2xl border-4 p-3 rounded-2xl hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          FAVOURITE
        </Link>
        <Link
          to="/arena"
          className="text-[var(--yellow)] font-black text-2xl border-4 p-3 rounded-2xl hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          ARENA
        </Link>
        <Link
          to="/ranking"
          className="text-[var(--yellow)] font-black text-2xl border-4 p-3 rounded-2xl hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          RANKING
        </Link>
        <Link
          to="/edition"
          className="text-[var(--yellow)] font-black text-2xl border-4 p-3 rounded-2xl hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          EDITION
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
