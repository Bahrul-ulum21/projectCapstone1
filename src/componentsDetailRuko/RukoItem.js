import React from "react";
import RukoItemBody from "./RukoItemBody";
import RukoItemImage from "./RukoItemImage";

function RukoItem({ imageUrl, title, alamat, provinsi, pemilik, ukuran, harga }) {
  return (
    <div className="temola">
      <RukoItemImage imageUrl={imageUrl} />
      <RukoItemBody
        title={title}
        alamat={alamat}
        provinsi={provinsi}
        pemilik={pemilik}
        ukuran={ukuran}
        harga={harga}
      />
    </div>
  );
}

export default RukoItem;
