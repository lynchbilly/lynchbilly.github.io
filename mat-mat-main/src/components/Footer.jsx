import React from 'react';

import './Footer.css';
import {Link, GitHub} from 'react-feather';

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/arnau-g%C3%B3mez-903b49187/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Link className="icon--small" /> Creada per Arnau Gómez
      </a>
      {' '}
      <a
        style={{marginLeft: '1rem'}}
        href="https://github.com/ArnoldGee/mat-mat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub className="icon--small" />
        GitHub
      </a>
    </div>
  );
};

export default Footer;
