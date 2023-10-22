import React from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Caresoul from "./components/Caresoul";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Posts from "./components/Posts";
import FormComp from "./components/FormComp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Caresoul />} />
          <Route path="/form" element={<FormComp />}/>
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Posts />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
