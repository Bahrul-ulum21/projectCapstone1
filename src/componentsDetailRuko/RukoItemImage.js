import React from "react";

function RukoItemImage({ imageUrl }) {
  return (
    <div className="item__image">
      <img src={imageUrl} alt="Ruko avatar" />
    </div>
  );
}

export default RukoItemImage;
