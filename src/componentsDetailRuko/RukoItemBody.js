import React from 'react';

function RukoItemBody({ alamat,pemilik, ukuran, harga }) {
    return (
      <div className="item__body">
        <h3>{alamat}</h3>
        <p>{pemilik}</p>
        <p>{ukuran}</p>
        <p>{harga}</p>
      </div>
    );
   }
    
   export default RukoItemBody;