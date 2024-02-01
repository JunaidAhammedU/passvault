import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import PassGeneratorPage from "./Pages/PassGeneratorPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pass-generator" element={<PassGeneratorPage />} />
      </Routes>
    </>
  );
}; 

export default App;
