import React from "react";
import { Link } from 'react-router-dom';
import RukoItemImage from "./RukoItemImage";

function RukoItem({ imageUrl,id, title,alamat,provinsi,pemilik,ukuran,harga }) {
  return (
    <div className="temola"  >
      <RukoItemImage imageUrl={imageUrl} />
      <article>
      <h3>
        <Link to={`/dataRuko/${id}`}>{title}</Link>
      </h3>
      </article>
      </div>
  );
}

export default RukoItem;
