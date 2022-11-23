import React from 'react';
import RukoItemBody from './RukoItemBody';
import RukoItemImage from './RukoItemImage';
 
function RukoItem({ imageUrl, alamat, pemilik, ukuran, harga }) {
 return (
   <div className="contact-item">
     <RukoItemImage mageUrl={imageUrl} />
     <RukoItemBody alamat={alamat} pemilik={pemilik} ukuran={ukuran} harga={harga} />
   </div>
 );
}
 
export default RukoItem;