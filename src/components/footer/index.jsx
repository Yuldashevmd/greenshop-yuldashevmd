import React from "react";
import { BottomSide, Container, MiddleSide, UpperSide } from "./style";
import PineApple from "../../assets/footerImg/pineapple.svg";
import Cactus from "../../assets/footerImg/cactus.svg";
import Graden from "../../assets/footerImg/graden.svg";
import Logo from "../../assets/navIcon/Logo.svg";
import Location from "../../assets/footerImg/Location.svg";
import Message from "../../assets/footerImg/Message.svg";
import Calling from "../../assets/footerImg/Calling.svg";
import Facebook from "../../assets/footerImg/Facebook.svg";
import Instagram from "../../assets/footerImg/Instagram.svg";
import Linkedin from "../../assets/footerImg/Linkedin.svg";
import Twitter from "../../assets/footerImg/Twitter.svg";
import Union from "../../assets/footerImg/Union.svg";
import Payment from "../../assets/footerImg/payment.svg";
const Footer = () => {
  return (
    <Container>
      <UpperSide>
        <div className="blockImg">
          <img src={PineApple} alt="pineapple" />
          <img src={Cactus} alt="Cactus" />
          <img src={Graden} alt="Graden" />
        </div>
        <div className="block">
          <h3>Would you like to join newsletters?</h3>
          <div className="inputBlock">
            <input type="email" placeholder="enter your email address" />
            <button>Join</button>
          </div>
          <p>
            We usually post offers and challenges in newsletter. We're your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </UpperSide>
      <MiddleSide>
        <div className="middle__block">
          <img src={Logo} alt="logo" />
          <div className="middle__block__item">
            <img src={Location} alt="location" />
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </div>
          <div className="middle__block__item">
            <img src={Message} alt="Message" />
            <p>contact@greenshop.com</p>
          </div>
          <div className="middle__block__item">
            <img src={Calling} alt="Message" />
            <p>+88 01911 717 490</p>
          </div>
        </div>
      </MiddleSide>
      <BottomSide>
        <div className="bottom__block">
          <div>
            <h2>My Account</h2>
            <ul>
              <li>My Account </li>
              <li>Our stores</li>
              <li>Contact us</li>
              <li>Career</li>
              <li>Specials</li>
            </ul>
          </div>
          <div>
            <h2>Help & Guide</h2>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Shipping & Delivery</li>
              <li>Product Policy</li>
              <li>How to Return</li>
            </ul>
          </div>
          <div>
            <h2>Categories</h2>
            <ul>
              <li>House Plants</li>
              <li>Potter Plants</li>
              <li>Seeds</li>
              <li>Small Plants</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="social">
            <h2>Social Media</h2>
            <ul>
              <li>
                <img src={Facebook} alt="face" />
              </li>
              <li>
                <img src={Instagram} alt="face" />
              </li>
              <li>
                <img src={Twitter} alt="face" />
              </li>
              <li>
                <img src={Linkedin} alt="face" />
              </li>
              <li>
                <img src={Union} alt="face" />
              </li>
            </ul>
            <h2>We accept </h2>
            <img src={Payment} alt="pay" />
          </div>
        </div>
      </BottomSide>
      <hr />
      <p>© 2021 GreenShop. All Rights Reserved.</p>
    </Container>
  );
};

export default Footer;
