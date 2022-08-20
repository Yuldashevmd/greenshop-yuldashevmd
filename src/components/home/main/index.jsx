import React from "react";
import { Catalog } from "../../../utils/homeCatalog";
import { Aside, Container, Content, Link, LinkBlock, PageList } from "./style";
import { Outlet } from "react-router-dom";
import ButtonDiv from "../../genericComp/Button";
import SaleBanner from "../../../assets/menuPlants/Super Sale Banner.png";
const MainDiv = () => {
  return (
    <Container>
      <Aside>
        <h2 className="first__h2">Categories</h2>
        {Catalog?.map((item) => (
          <LinkBlock key={item?.id}>
            <Link to={item?.path}>{item?.title}</Link>
            <p>{item?.size}</p>
          </LinkBlock>
        ))}
        <div className="range">
          <h2>Price Range</h2>
          <input type="range" />
          <p>
            Price: <span>$39-1230</span>
          </p>
          <ButtonDiv width="90px" height="35px" type="green">
            Filter
          </ButtonDiv>
        </div>
        <div className="size">
          <h2>Size</h2>
          <LinkBlock>
            <p>Small</p>
            <p>(119)</p>
          </LinkBlock>
          <LinkBlock>
            <p>Medium</p>
            <p>(86)</p>
          </LinkBlock>
          <LinkBlock>
            <p>Large</p>
            <p>(78)</p>
          </LinkBlock>
        </div>
        <img src={SaleBanner} alt="png" />
      </Aside>
      <Content>
        <div className="sort">
          <ul>
            <li>All Plants</li>
            <li>New Arrivals</li>
            <li>Sale</li>
          </ul>
          <p>
            Short by : <span>Default sorting</span>
          </p>
        </div>
        <Outlet />
        <PageList>
          <li className="activePage">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>next</li>
        </PageList>
      </Content>
    </Container>
  );
};

export default MainDiv;
