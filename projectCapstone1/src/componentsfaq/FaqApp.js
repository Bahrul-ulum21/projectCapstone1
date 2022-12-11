import React from "react";
import Accordion from "./Accordion";

// import "../css/main.css";

// import "../scss/main.scss";

import illustration__box from "../images/illustration-box-desktop.svg";
import illustration__woman_desktop from "../images/illustration-woman-online-desktop.svg";
import illustration__woman_mobile from "../images/illustration-woman-online-mobile.svg";

const questionsAnswers = [
  {
    question: "Selain melalui website, bisakah melakukan pemesanan melalui channel lain??",
    answer:
      "Bisa, karena website yang kami buat hanya digunakan untuk menyampaikan informasi dan apabila ingin melakukan pemesanan ruko dapat diklik dibagian tombol kontak pemilik yang tertera dalam website.",
  },
  {
    question: "Apakah ada kontak yang bisa dihubungi, jika ada kendala seputar pemesanan via website?",
    answer:
      "Ada, sudah tersedia dua kontak yang dapat dihubungi yaitu melalui email dan whatsapp yang sudah tertera.",
  },
  {
    question: "Bagaimana cara melihat review ruko?",
    answer: 
      "Untuk melihat review ruko, pengguna dapat mengklik tombol review yang terdapat dibagian navigasi.",
  },
  {
    question: "Bagaimana cara mencari ruko di daerah tertentu?",
    answer: 
      "Untuk mencari ruko di daerah tertentu, pengguna dapat mencarinya dibagian content ruko.",
  },
];

const FaqApp = () => {
  return (
    <div className="container">
      <div className="component">
        <div className="illustration">
          <img
            src={illustration__box}
            alt="illustration with box"
            className="illustration__box"
          />

          <img
            className="illustration__woman-desktop"
            src={illustration__woman_desktop}
            alt="illustration with woman"
          />
          <img
            className="illustration__woman-mobile"
            src={illustration__woman_mobile}
            alt="illustration with woman"
          />
        </div>
        <Accordion questionsAnswers={questionsAnswers} />
      </div>
    </div>
  );
};

export default FaqApp;
