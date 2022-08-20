import React from "react";
import { Carousel } from "antd";
import { Container, LeftContent, RightContent } from "./style";
import Text from "../../../assets/carouselIcon/text.svg";
import ButtonDiv from "../../genericComp/Button";
import PlantBig from "../../../assets/carouselIcon/plantBig.svg";
import PlantSmall from "../../../assets/carouselIcon/plantSmall.svg";

const CarouselComp = () => {
  return (
    <Container>
      <Carousel autoplay>
        <div className="ant-carousel">
          <div className="wraper">
            <LeftContent>
              <p className="greyText">Welcome to GreenShop</p>
              <img src={Text} alt="text" />
              <span>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </span>
              <ButtonDiv
                m="44px 0 0 0 "
                width="140px"
                height="40px"
                type="green"
              >
                SHOP NOW
              </ButtonDiv>
            </LeftContent>
            <RightContent>
              <img className="small__plant" src={PlantSmall} alt="small" />
              <img src={PlantBig} alt="big" />
            </RightContent>
          </div>
        </div>
        <div className="ant-carousel">
          <div className="wraper">
            <LeftContent>
              <p className="greyText">Welcome to GreenShop</p>
              <img src={Text} alt="text" />
              <span>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </span>
              <ButtonDiv
                m="44px 0 0 0 "
                width="140px"
                height="40px"
                type="green"
              >
                SHOP NOW
              </ButtonDiv>
            </LeftContent>
            <RightContent>
              <img className="small__plant" src={PlantSmall} alt="small" />
              <img src={PlantBig} alt="big" />
            </RightContent>
          </div>
        </div>
        <div className="ant-carousel">
          <div className="wraper">
            <LeftContent>
              <p className="greyText">Welcome to GreenShop</p>
              <img src={Text} alt="text" />
              <span>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </span>
              <ButtonDiv
                m="44px 0 0 0 "
                width="140px"
                height="40px"
                type="green"
              >
                SHOP NOW
              </ButtonDiv>
            </LeftContent>
            <RightContent>
              <img className="small__plant" src={PlantSmall} alt="small" />
              <img src={PlantBig} alt="big" />
            </RightContent>
          </div>
        </div>
      </Carousel>
    </Container>
  );
};

export default CarouselComp;
