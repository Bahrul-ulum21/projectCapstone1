import React from "react";
import { Link } from 'react-router-dom';
import RukoItemImage from "./RukoItemImage";

function RukoItem({ imageUrl, title,alamat,provinsi,pemilik,ukuran,harga }) {
  return (
    <div className="temola"  >
      <RukoItemImage imageUrl={imageUrl} />
      {/* <article>
      <h3>
        <Link to={`/dataRuko/${id}`}>{title}</Link>
      </h3>
      </article> */}
      <h3>{title}</h3>
       <p>{alamat}</p>
       <p>{provinsi}</p>
       <p>{pemilik}</p>
       <p>{ukuran}</p>
       <p>{harga}</p>
      

      
       
    </div>
  );
}

export default RukoItem;
