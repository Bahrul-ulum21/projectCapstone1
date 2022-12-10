import React, { useState } from "react";
import RukoItem from "./RukoItem";

function RukoList({ rukoku }) {
  const [text, setText] = useState("");
  console.log(rukoku);

  const filteredRuko = rukoku.filter((elm) =>
    elm?.alamat?.toLowerCase()?.includes(text)
  );
  return (
    <div className="serach-bar">
      <input className="search-bar" placeholder="Search.." onChange={(event) => setText(event.target.value)} />
      <div className="ruko-list">
        {filteredRuko.map((ruko) => (
        <RukoItem key={ruko.id} {...ruko} />
      ))}
      </div>
  </div>
);
}

export default RukoList;
