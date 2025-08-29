import { Link, Outlet } from "react-router-dom";
import Wrapper from "../components/shared/Wrapper";
import Footer from "../components/subpages/Footer";

const RootLayout = () => {
  return (
    <Wrapper>
      <nav style={{ display: "flex", gap: "12px", padding: "10px" }}>
        <Link to="">HOME</Link>
        <Link to="/registration">REGISTRATION</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/favourite">FAVOURITE</Link>
        <Link to="/arena">ARENA</Link>
        <Link to="/ranking">RANKING</Link>
        <Link to="/edition">EDITION</Link>
      </nav>
      <Wrapper style={{ display: "flex", gap: "12px", padding: "10px" }}>
        <Outlet />
      </Wrapper>
      <Footer/>
    </Wrapper>
  );
};

export default RootLayout;
