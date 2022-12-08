import React from "react";
import RukoList from "./RukoList";
import { getDataRuko } from "../utils/dataRuko";
// import HomePage from '../pages/HomePage';
import { Route } from "react-router-dom";

function RukoApp() {
  const rukoku = getDataRuko();

  return (
    <div className="ruko-app">
      <h1>Daftar Ruko</h1>
      <RukoList rukoku={rukoku} />
      <main>{/* <Route path='/' element={<HomePage/>}/> */}</main>
    </div>
  );
}

export default RukoApp;
