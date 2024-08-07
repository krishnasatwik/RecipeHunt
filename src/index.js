import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavigationBar from "./components/Navbar";
import Home from './Home';
import Recipes from "./recipes";
import FilRecipes from './filrecipe';
import RandRecipes from './randrecipe';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <NavigationBar />
    <Routes >
      <Route path="/*" element={<Home />} />
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/recipes" element={<Recipes />}></Route>
      <Route path="/filrecipe" element={<FilRecipes />}></Route>
      <Route path="/randrecipe" element={<RandRecipes />}></Route>
    </Routes>

  </BrowserRouter>
);
