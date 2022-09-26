import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { navbar } from "../utils/navbar";
import "antd/dist/antd.css";
import { Catalog } from "../utils/homeCatalog";
import HomePage from "../page/Home";
import BasketPage from "../page/BasketPage";
import ProductView from "../components/productView";
import TextPart from "../components/productView/definitionPart/textPart";
import ReviewPart from "../components/productView/definitionPart/review";
import Checkout from "../components/shop/checkout";
import Login from "../components/login";
import Register from "../components/register";
import Signin from "../components/signin";
import UserProfile from "../components/userProfile";
import { Account } from "../utils/profile";

const Root = () => {
  const token = localStorage.getItem("user");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={"Error 404 page not found "} />
        <Route path="/" element={<Navigate to="/home/house-plants" />} />
        <Route element={<Navbar />}>
          {token ? (
            <Route element={<UserProfile />}>
              {Account.map((item) => (
                <Route
                  key={item?.id}
                  path={item?.path}
                  element={item?.component}
                />
              ))}
            </Route>
          ) : null}
          {navbar?.map((item) => (
            <Route key={item?.id} path={item?.path} element={item?.component} />
          ))}
          <Route path="/basket" element={<BasketPage />} />
          <Route element={<HomePage />}>
            {Catalog?.map((item) => (
              <Route
                key={item?.id}
                path={item?.path}
                element={item?.component}
              />
            ))}
            <Route element={<Login />}>
              <Route path={`/signin`} element={<Signin />} />
              <Route path={`/register`} element={<Register />} />
            </Route>
          </Route>
          <Route path="/home/:id/" element={<ProductView />}>
            <Route path={`/home/:id/text`} element={<TextPart />} />
            <Route path={`/home/:id/review`} element={<ReviewPart />} />
          </Route>
          <Route path="/shop/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
