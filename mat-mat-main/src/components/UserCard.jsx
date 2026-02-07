import React from 'react';
import {connect} from 'react-redux';
import './UserCard.css';

import image1 from '../assets/character-icons/con1.png';
import image2 from '../assets/character-icons/con2.png';
import image3 from '../assets/character-icons/con3.png';
import image4 from '../assets/character-icons/con4.png';
import image5 from '../assets/character-icons/con5.png';
import image6 from '../assets/character-icons/con6.png';
import image7 from '../assets/character-icons/con7.png';
import image8 from '../assets/character-icons/con8.png';
import image9 from '../assets/character-icons/con9.png';

const userImages = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
};

const UserCard = ({currentUser}) => {
  if (currentUser) {
    let {userName, picture} = currentUser;
    while (
      !picture ||
      (userName[userName.length - 1] !== 'a' &&
        (picture === 8 || picture === 5 || picture === 2))
    ) {
      picture = 1 + Math.floor(Math.random() * 9);
    }
    return (
      <div className="user-card text">
        <img
          className="user-card__picture"
          src={userImages[`image${picture}`]}
          alt=""
        />
        {userName}
      </div>
    );
  } else return null;
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(UserCard);
