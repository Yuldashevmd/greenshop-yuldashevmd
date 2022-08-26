import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { navbar } from "../utils/navbar";
import "antd/dist/antd.css";
import { Catalog } from "../utils/homeCatalog";
import HomePage from "../page/Home";
import BasketPage from "../page/BasketPage";
import ProductView from "../components/productView";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={"Error 404 page not found "} />
        <Route path="/" element={<Navigate to="/home/house-plants" />} />
        <Route element={<Navbar />}>
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
          </Route>
          <Route path="/home/:id" element={<ProductView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
