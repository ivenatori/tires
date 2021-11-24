import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductsContextProvider from "./contexts/ProductsContext";
import ProductsLits from "./components/ProductsList/ProductsLits";
const MainRoutes = () => {
  return (
    <div>
      <ProductsContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      </ProductsContextProvider>
    </div>
  );
};

export default MainRoutes;
