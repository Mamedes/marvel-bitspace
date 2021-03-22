import React from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import { HeroDetail } from './pages/HeroDetail';
import { HomePage } from './pages/HomePage'


function Routes(){
  return(
    <BrowserRouter>
     <Route exact path="/:page(\d+)?" component={HomePage} />
     <Route path="/heroes/:id(\d+)" component={HeroDetail} />


    </BrowserRouter>
  );
}

export default Routes;