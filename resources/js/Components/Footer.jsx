import React from 'react'

import '../../css/Footer.css'

function Footer () {

    return (
        <footer className="footer">
        <div>
        <a href='#' rel='external'>About us  </a><span className="dot"></span>
        <a href='#' rel='external'> Privacy Policy </a><span className="dot"></span>
        <a href='' className='inactiveLink'> ©2024 Inkli</a>
        </div>

      </footer>
    )
}


export default Footer;