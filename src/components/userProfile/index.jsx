import React from "react";
import { Aside, Container, Link } from "./style";
import { Account } from "../../utils/profile";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const activeStyle = {
    borderLeft: "3px solid #46a358",
  };
  const logOut = () => {
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };
  return (
    <Container>
      <Aside>
        <h3>My Account</h3>
        <ul>
          {Account.map((item) => (
            <Link key={item?.id} activestyle={{ activeStyle }} to={item?.path}>
              {item?.text}
            </Link>
          ))}
        </ul>
        <button onClick={logOut}>Log out</button>
      </Aside>
    </Container>
  );
};

export default UserProfile;
