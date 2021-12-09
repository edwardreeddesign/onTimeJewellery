import React from "react";
import GlobalStyle from "./Styles/GlobalStyle";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Weddings from "./Pages/Weddings";
import Jewellery from "./Pages/Jewellery";
import Footer from "./Components/Footer/Footer";
import Gifts from "./Pages/Gifts";

//Router
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/weddings" exact element={<Weddings />} />
        <Route path="jewellery" element={<Jewellery />} />
        <Route path="gifts" element={<Gifts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
