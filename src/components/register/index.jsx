import React, { useState } from "react";
import ButtonDiv from "../genericComp/Button";
import {
  BtnMethods,
  Content,
  CreatedAccountText,
  Form,
  Input,
  OtherMethods,
} from "./style";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (value) =>
      value?.email !== "" &&
      value?.password !== "" &&
      value?.confirmPassword !== ""
        ? value?.password === value?.confirmPassword
          ? localStorage.setItem(
              "user",
              JSON.stringify(value),
              setTimeout(() => {
                setResult("User successfuly created...");
                setTimeout(() => {
                  navigate("/signin");
                }, 1500);
              }, 1000)
            )
          : setResult("Password is not confirmed")
        : setResult("Empty fields"),
  });
  return (
    <Content>
      <Form>
        <CreatedAccountText result={result}>{result}</CreatedAccountText>
        <label htmlFor="email">
          Enter your username and password to register.
        </label>
        <Input
          onChange={formik?.handleChange}
          type="text"
          placeholder="Username"
          name="username"
        />
        <Input
          onChange={formik?.handleChange}
          type="email"
          placeholder="Enter your email address"
          name="email"
        />
        <Input
          onChange={formik?.handleChange}
          type="password"
          placeholder="Password"
          name="password"
        />
        <Input
          onChange={formik?.handleChange}
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
        />

        <ButtonDiv
          onClick={formik?.handleSubmit}
          width="300px"
          height="45px"
          type="green"
          className="btn"
        >
          Register
        </ButtonDiv>
      </Form>
      <OtherMethods>
        <div></div>
        <p>Or register with</p>
        <div></div>
      </OtherMethods>
      <BtnMethods>
        <ButtonDiv width="300px" height="45px">
          Continue with Google
        </ButtonDiv>
        <ButtonDiv width="300px" height="45px">
          Continue with Facebook
        </ButtonDiv>
      </BtnMethods>
    </Content>
  );
};

export default Register;
