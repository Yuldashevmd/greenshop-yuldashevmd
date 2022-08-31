import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { BtnGroup, Container, Links, Modal } from "./style";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Modal>
          <button onClick={() => navigate(`/home`)} className="close">
            X
          </button>
          <BtnGroup>
            <Links activestyle="active" to={`/signin`}>
              Login
            </Links>
            |
            <Links activestyle="active" to={`/register`}>
              Register
            </Links>
          </BtnGroup>
          <Outlet />
        </Modal>
      </Container>
    </>
  );
};

export default Login;
