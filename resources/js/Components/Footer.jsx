import React from 'react'
import { Link } from 'react-router-dom';

import '../../css/Footer.css'

function Footer () {

    return (
      <footer className="footer">
        <p>
          <Link>About Us</Link> <span className="dot"></span> 
          <Link>Privacy Policy</Link> <span className="dot"></span> 
          ©2024 Inkli
        </p>

      </footer>
    )
}


export default Footer;