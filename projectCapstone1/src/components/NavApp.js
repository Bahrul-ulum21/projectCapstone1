import React from 'react';
import Navigation from './Navigation';
 
class NavApp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      authedUser: null,
    };
  }
  render() {
    if (this.state.authedUser === null) {
    return (
      <div className="nav-app">
        <header className='nav-app__header'>
          <Navigation />
        </header>
        <main className='content'>
          <h1>Cari Ruko</h1>
          <p>
          CariRuko adalah situs teknologi penyewaan ruko terdepan yang telah melayani jutaan orang sejak 2010. CariRuko sangat membantu masyarakat yang sedang kesusahan untuk mencari ruko. Website ini merupakan platform yang menyediakan penyewaan ruko yang berlokasi di Jawa dan akan tersebar luas di seluruh wilayah Indonesia. Seperti, 
          {this.props.data.provinsi?.map((prov,i)=>{
            return(prov.nama+",")
          })}
          <br/>
          <br/>
          CariRuko bisa jadi salah satu solusi bagi Anda yang ingin membuka usaha namun memiliki modal terbatas. Selain lebih hemat dana, lokasi ruko yang kami rekomendasikan juga berlokasi di tempat yang strategis sehingga sangat cocok bagi Anda untuk membuka usaha.
         </p>
         <ul>
          
         {/* <li>Meninggal : {data.provinsi}</li> */}

         </ul>
        </main>
      </div>
    )
  }

  return (
    <div className="nav-app">
        <header className='nav-app__header'>
        <Navigation />
        </header>
        <main className='content'>
          <h1>Cari Ruko</h1>
          <p>
          Anda sedang memulai membangun bisnis dan kesulitan mencari tempat
          CariRuko solusinya. CariRuko adalah sebuah platform yang menyediakan
          berbagai informasi terkait penyewaan Ruko tak hanya di tempatmu tapi
          di berbagai wilayah di indonesia mulai dari ....
         </p>
        </main>
      </div>
    );
  }
}
 
export default NavApp;