import React from "react";
import GlobalStyle from "./Styles/GlobalStyle";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Weddings from "./Pages/Weddings";
import Jewellery from "./Pages/Jewellery";
import Footer from "./Components/Footer/Footer";
import Gifts from "./Pages/Gifts";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {/* <Home /> */}
      {/* <Weddings /> */}
      <Jewellery />
      {/* <Gifts /> */}
      <Footer />
    </div>
  );
}

export default App;
