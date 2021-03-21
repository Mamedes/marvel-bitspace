import React from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage'


function Routes(){
  return(
    <BrowserRouter>
     <Route exact path="/:page(\d+)?" component={HomePage} />


    </BrowserRouter>
  );
}

export default Routes;