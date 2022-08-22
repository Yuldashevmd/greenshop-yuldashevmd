import React from "react";
import { Container, Content } from "./style";
import LeftImg from "../../../assets/recommendImg/1.svg";
import RightImg from "../../../assets/recommendImg/2.svg";
import ButtonDiv from "../../genericComp/Button";

const Recommend = () => {
  return (
    <Container>
      <div className="block">
        <img src={LeftImg} alt="left" />
        <Content>
          <h3>Summer cactus & succulents</h3>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <ButtonDiv type="green" width="140px">
            Find More
          </ButtonDiv>
        </Content>
      </div>
      <div className="block">
        <img src={RightImg} alt="right" />
        <Content>
          <h3>Summer cactus & succulents</h3>
          <p>
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <ButtonDiv type="green" width="140px">
            Find More
          </ButtonDiv>
        </Content>
      </div>
    </Container>
  );
};

export default Recommend;
