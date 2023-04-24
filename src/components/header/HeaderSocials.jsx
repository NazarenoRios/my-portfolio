import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsPersonCircle} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nazareno-rios/" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://www.github.com/NazarenoRios" target='_blank' rel='noreferrer'><FaGithub/></a>
        <a href="mailto:nazarenolrios@gmail.com" target='_blank' rel='noreferrer'><BsPersonCircle/></a>
    </div>
  )
}

export default HeaderSocials