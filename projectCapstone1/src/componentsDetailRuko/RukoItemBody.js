import React from "react";

function RukoItemBody({ alamat, provinsi, title, pemilik, ukuran, harga, whatsapp}) {
  return (
    <div className="item__body">
      <h3>{title}</h3>
      <p>{alamat}</p>
      <p>{provinsi}</p>
      <p>{pemilik}</p>
      <p>{ukuran}</p>
      <p>{harga}</p>
      <p>{whatsapp}</p>
    </div>
  );
}

export default RukoItemBody;
