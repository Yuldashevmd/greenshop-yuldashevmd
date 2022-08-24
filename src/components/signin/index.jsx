import React, { useContext } from "react";
import { ContextWrapper } from "../context";
import ButtonDiv from "../genericComp/Button";
import { BtnMethods, Container, Input, Modal, OtherMethods } from "./style";

const SignIn = () => {
  const [displayi, setDisplayi] = useContext(ContextWrapper);
  const closeModal = () => setDisplayi(!displayi);
  return (
    <Container display={displayi ? "true" : "false"}>
      <Modal>
        <button onClick={closeModal} className="close">
          X
        </button>
        <h1>
          Login | <span>Register</span>
        </h1>
        <form>
          <label htmlFor="">Enter your username and password to login.</label>
          <Input type="email" placeholder="example@gmail.com" />
          <Input type="password" placeholder="password" />
          <p>Forgot Password</p>
          <ButtonDiv width="300px" height="45px" type="green">
            Login
          </ButtonDiv>
        </form>
        <OtherMethods>
          <div></div>
          <p>Or login with</p>
          <div></div>
        </OtherMethods>
        <BtnMethods>
          <ButtonDiv width="300px" height="45px">
            Login with Google
          </ButtonDiv>
          <ButtonDiv width="300px" height="45px">
            Login with Facebook
          </ButtonDiv>
        </BtnMethods>
      </Modal>
    </Container>
  );
};

export default SignIn;
