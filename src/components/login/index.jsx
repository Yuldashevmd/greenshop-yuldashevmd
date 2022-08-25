import React, { useContext, useState } from "react";
import { ContextWrapper } from "../context";
import { BtnGroup, Container, Links, Modal } from "./style";
import SignIn from "../signin";
import Register from "../register";

const Login = () => {
  const [displayi, setDisplayi] = useContext(ContextWrapper);
  const [sign, setSign] = useState(true);
  const [regis, setRegis] = useState(null);

  const closeModal = () => setDisplayi(!displayi);

  const onSign = () => (setSign(true), setRegis(null));
  const onRegis = () => (setSign(null), setRegis(true));

  return (
    <>
      <Container display={displayi ? "true" : "false"}>
        <Modal>
          <button onClick={closeModal} className="close">
            X
          </button>
          <BtnGroup>
            <Links onClick={onSign}>Login</Links> |
            <Links onClick={onRegis}>Register</Links>
          </BtnGroup>
          {sign && <SignIn />}
          {regis && <Register />}
        </Modal>
      </Container>
    </>
  );
};

export default Login;
