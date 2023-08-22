import React from "react";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./Components/navigationbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import PageNotFound from "./Components/Pagenotfound";
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>      
        <Route path=" " element={<Home/>}> </Route>
        <Route path="/About" element={<About />}> </Route>
        <Route path="/Contact" element={<Contact />}> </Route>
        <Route path="/Service" element={<Service />}> </Route>
        <Route path="/*" element={<PageNotFound/>}> </Route>
      </Routes>
    </>
  )
}
export default App;