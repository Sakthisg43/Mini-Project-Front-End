import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../../Pages/Homepage";
import DetailsPage from "../../Pages/ProjectDetailsPage/DetailsPage";
import LoginPage from "../Login";


const Routing = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<Homepage searchItem={props.searchItem} />} />
        <Route path="/home/projectdetails" element={<DetailsPage />} />
        <Route path="/home/projectdetails/Id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
