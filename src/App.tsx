import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Film from "./pages/Film";
import FilmDetail from "./pages/FilmDetail";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/films"} element={<Home/>}/>
              <Route path={"/films/:id"} element={<FilmDetail/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
