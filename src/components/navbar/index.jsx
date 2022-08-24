import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import ButtonDiv from "../genericComp/Button";
import { CardLogin, Container, Li, Ul } from "./style";
import Logo from "../../assets/navIcon/Logo.svg";
import Loupe from "../../assets/navIcon/Loupe.svg";
import Card from "../../assets/navIcon/Card.svg";
import Logout from "../../assets/navIcon/Logout.svg";
import Footer from "../footer";
import SignIn from "../signin";

const Navbar = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Container>
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            onClick={() => navigate("/home/house-plants")}
          />
        </div>
        <Ul>
          {navbar?.map((item) => (
            <Li key={item?.id} activestyle="active" to={item?.path}>
              {item?.title}
            </Li>
          ))}
        </Ul>
        <CardLogin>
          <img src={Loupe} alt="loupe" />
          <img src={Card} alt="card" onClick={() => navigate("/basket")} />
          <ButtonDiv onClick={!display} type="green">
            <img src={Logout} alt="logout" />
            <p>Login</p>
          </ButtonDiv>
        </CardLogin>
      </Container>
      <SignIn display={display} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
