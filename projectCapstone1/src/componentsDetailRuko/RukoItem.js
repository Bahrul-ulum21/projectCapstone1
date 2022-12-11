import React from "react";
import RukoItemBody from "./RukoItemBody";
import RukoItemImage from "./RukoItemImage";

function RukoItem({ imageUrl, title, alamat, provinsi, pemilik, ukuran, harga, whatsapp }) {
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
        whatsapp={whatsapp}
      />
    </div>
  );
}

export default RukoItem;
