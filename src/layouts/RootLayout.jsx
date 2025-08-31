import { Link, Outlet } from "react-router-dom";
import Wrapper from "../components/shared/Wrapper";
import Footer from "../components/subpages/Footer";
import ThemeButton from "../components/features/theme/ThemeButton";
import useTheme from "../hooks/useTheme";

const RootLayout = () => {
  const { theme } = useTheme()
  return (
    <Wrapper className="flex flex-col min-h-screen" variant={theme}>
      <nav className="flex gap-4 p-4 bg-blue-500">
        <Link to="">HOME</Link>
        <Link to="/registration">REGISTRATION</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/favourite">FAVOURITE</Link>
        <Link to="/arena">ARENA</Link>
        <Link to="/ranking">RANKING</Link>
        <Link to="/edition">EDITION</Link>
        <ThemeButton/>
      </nav>
      <Wrapper className="flex items-center justify-center flex-grow h-auto">
        <Outlet />
      </Wrapper>
      <Footer/>
    </Wrapper>
  );
};

export default RootLayout;
