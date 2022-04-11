import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//for next time : https://www.youtube.com/watch?v=f0X1Tl8aHtA&t=3293s

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        {/* si rien ne marche */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
