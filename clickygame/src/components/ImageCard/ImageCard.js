import React from "react";
import "./ImageCard.css";

const styles = {
  imgStyles : {
    height: '150px',
    width: '100px'
  },
  cardStyle : {
    height: '155px',
    width: '105px'
  }
};

const ImageCard = props => (
  <div className="card" style={styles.cardStyle}>
    <div className="img-container" style={styles.imgStyles}>
      <img src={props.image} style={styles.imgStyles}/>
    </div>
  </div>
);

export default ImageCard;
