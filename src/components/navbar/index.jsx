import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import ButtonDiv from "../genericComp/Button";
import { CardLogin, Container, Li, Ul } from "./style";
import Logo from "../../assets/navIcon/Logo.svg";
import Loupe from "../../assets/navIcon/Loupe.svg";
import Card from "../../assets/navIcon/Card.svg";
import Logout from "../../assets/navIcon/Logout.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div className="logo">
          <img src={Logo} alt="logo" onClick={() => navigate("/home")} />
        </div>
        <Ul>
          {navbar?.map((item) => (
            <Li key={item?.id} activelink="active" to={item?.path}>
              {item?.title}
            </Li>
          ))}
        </Ul>
        <CardLogin>
          <img src={Loupe} alt="loupe" />
          <img src={Card} alt="card" />
          <ButtonDiv type="green">
            <img src={Logout} alt="logout" />
            <p>Login</p>
          </ButtonDiv>
        </CardLogin>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
