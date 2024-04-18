import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./components/home";
import Edit from "./components/edit";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
