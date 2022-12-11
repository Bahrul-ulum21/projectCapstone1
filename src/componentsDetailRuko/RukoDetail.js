import React from 'react';
import { Card } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import RukoItem from './RukoItem';
import RukoItemImage from './RukoItemImage';
// import { getDataRuko } from '../utils/dataRuko';
// import PropTypes from 'prop-types';

function RukoDetail({title,imageUrl,alamat,provinsi,pemilik,ukuran,harga}) {
  return (
    <>
    <Navigation/>
    <div className="temola"  >
      <RukoItemImage imageUrl={imageUrl} />
      <article>
      <h3>
        {title}
      </h3>
      </article>
       <p>{alamat}</p>
       <p>{provinsi}</p>
       <p>{pemilik}</p>
       <p>{ukuran}</p>
       <p>{harga}</p>
      </div>
    </>
  );
}

export default RukoDetail;