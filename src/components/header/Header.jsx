import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div id='header' className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Nazareno Rios</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Desplazarse hacia abajo</a>
      </div>
    </header>
  )
}

export default Header