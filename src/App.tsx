import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import FilmDetail from "./pages/FilmDetail";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/films" replace />} />
              <Route path={"/films"} element={<Home/>}/>
              <Route path={"/films/:id"} element={<FilmDetail/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
