import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {Home} from "./components/Home";
import {Navigation} from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
      <>
          <BrowserRouter>
              <Navigation/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
