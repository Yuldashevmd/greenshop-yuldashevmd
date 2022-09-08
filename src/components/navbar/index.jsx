import React from "react";
import { Button, Popover } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import ButtonDiv from "../genericComp/Button";
import { CardLogin, Container, ContentSearch, Li, Ul } from "./style";
import Logo from "../../assets/navIcon/Logo.svg";
import Loupe from "../../assets/navIcon/Loupe.svg";
import Card from "../../assets/navIcon/Card.svg";
import Logout from "../../assets/navIcon/Logout.svg";
import Footer from "../footer";

const Navbar = () => {
  const navigate = useNavigate();

  const content = (
    <ContentSearch>
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </ContentSearch>
  );
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
          <Popover
            placement="bottomRight"
            title={"Search"}
            content={content}
            trigger="click"
          >
            <Button>
              <img src={Loupe} alt="loupe" />
            </Button>
          </Popover>
          <img src={Card} alt="card" onClick={() => navigate("/basket")} />
          {localStorage.getItem("user") ? (
            <ButtonDiv onClick={() => navigate("/userprofile")} type="green">
              <img src={Logout} alt="logout" />
              <p>User</p>
            </ButtonDiv>
          ) : (
            <ButtonDiv onClick={() => navigate("/signin")} type="green">
              <img src={Logout} alt="logout" />
              <p>Login</p>
            </ButtonDiv>
          )}
        </CardLogin>
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
