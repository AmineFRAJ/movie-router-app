import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import Description from "./Description";
import Navigation from "./components/Nav/Navigation";


const Home = () => {
  return <div>
    <Navigation/>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/movie/:id" element={<Description/>} />
      <Route path="/*" element={<Error/>} />
    </Routes>
  </div>;
};

export default Home;
