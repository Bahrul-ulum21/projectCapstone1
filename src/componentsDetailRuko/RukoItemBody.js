import React from "react";

function RukoItemBody({ alamat, title, pemilik, ukuran, harga }) {
  return (
    <div className="item__body">
      <h3>{title}</h3>
      <p>{alamat}</p>
      <p>{pemilik}</p>
      <p>{ukuran}</p>
      <p>{harga}</p>
    </div>
  );
}

export default RukoItemBody;
