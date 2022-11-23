import React from "react";
import RukoItem from "./RukoItem";

function RukoList({ rukoku }) {
  return (
    <div className="ruko-list">
      {
        rukoku.map((ruko) =>(
          <RukoItem key={ruko.id} {...ruko}/>
        ))
      }
    </div>
  );
}

export default RukoList;