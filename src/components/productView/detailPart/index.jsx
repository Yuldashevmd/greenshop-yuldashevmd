import React, { useContext, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BtnGroup, Container, ContentSide, ImageSide, Wrapper } from "./style";
import MainImg from "../../../assets/blogImg/01.svg";
import OtherImg from "../../../assets/blogImg/02.svg";
import Star from "../../../assets/productView/Star.svg";
import ButtonDiv from "../../genericComp/Button";
import { ContextWrapper } from "../../context";

const DetailPart = ({ info }) => {
  const inrcDecFun = (state, action) => {
    switch (action.type) {
      case "decrement":
        return state <= 0 ? state : state - 1;

      case "increment":
        return state >= 100 ? state : state + 1;

      default:
        return state;
    }
  };
  const { countData } = useContext(ContextWrapper);
  const [conty] = countData;
  const [count, dispatch] = useReducer(inrcDecFun, conty);
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <Container>
      <h1>
        Home / <span>{id}</span>
      </h1>
      <Wrapper>
        <ImageSide>
          <div className="all__img">
            <ul>
              <li>
                <img src={info?.OtherImg || OtherImg} alt="img" />
              </li>
              <li>
                <img src={info?.OtherImg || OtherImg} alt="img" />
              </li>
              <li>
                <img src={info?.OtherImg || OtherImg} alt="img" />
              </li>
              <li>
                <img src={info?.OtherImg || OtherImg} alt="img" />
              </li>
            </ul>
          </div>
          <div className="main__img">
            <img src={info?.MainImg || MainImg} alt="mainImg" />
          </div>
        </ImageSide>
        <ContentSide>
          <h2>{info?.title || "Barberton Daisy"}</h2>
          <div className="price__side">
            <p className="price">${info?.price || "119.00"}</p>
            <div className="iconReview">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <p>{info?.review || "19"} Customer Review</p>
            </div>
          </div>
          <div className="text__side">
            <h3>Short Description:</h3>
            <p>
              {info?.parag ||
                "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. "}
            </p>
            <h3>Size</h3>
            <ul className="size__choose">
              <li>
                <button>S</button>
              </li>
              <li>
                <button>M</button>
              </li>
              <li>
                <button>L</button>
              </li>
              <li>
                <button>XL</button>
              </li>
            </ul>
          </div>
          <BtnGroup>
            <div className="count">
              <button onClick={() => dispatch({ type: "decrement" })}>-</button>
              <p>{count}</p>
              <button onClick={() => dispatch({ type: "increment" })}>+</button>
            </div>
            <ButtonDiv
              onClick={() => {
                localStorage.getItem("user")
                  ? navigate("/shop/checkout")
                  : navigate("/signin");
              }}
              width="130px"
              height="40px"
              type="green"
            >
              BUY NOW
            </ButtonDiv>
            <ButtonDiv
              width="130px"
              height="40px"
              type="white"
              onClick={() => {
                localStorage.getItem("user")
                  ? alert("item added to card")
                  : navigate("/signin");
              }}
            >
              ADD TO CARD
            </ButtonDiv>
            <ButtonDiv width="40px" height="40px" type="white"></ButtonDiv>
          </BtnGroup>
          <p className="bottomDesc">
            SKU: <span>{info?.sku || "1995751877966"}</span>
          </p>
          <p className="bottomDesc">
            Categories: <span>{info?.categories || "Potter Plants"}</span>
          </p>
          <p className="bottomDesc">
            Tags: <span>{info?.tags || "Home, Garden, Plants"}</span>
          </p>
          <div className="share__side">
            Share this products: <span>F</span>
            <span>T</span>
            <span>in</span>
            <span>M</span>
          </div>
        </ContentSide>
      </Wrapper>
    </Container>
  );
};

export default DetailPart;
