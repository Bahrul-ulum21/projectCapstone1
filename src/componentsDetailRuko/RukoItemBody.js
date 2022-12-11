import React from "react";
// import ButtonDetail from "./Button";
import ContainerFluidExample from "./ContainerFluid";

function RukoItemBody({ alamat, provinsi, title, pemilik, ukuran, harga }) {
  return (
    <div className="item__body">
       <h3>{title}</h3>
       <p>{alamat}</p>
       <p>{provinsi}</p>
       <p>{pemilik}</p>
       <p>{ukuran}</p>
       <p>{harga}</p>
      
    </div>
  );
}

export default RukoItemBody;
