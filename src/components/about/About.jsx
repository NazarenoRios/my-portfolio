import React from 'react'
import './about.css'
import ME from '../../assets/me/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce un poco</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>Fullstack Developer</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Trabajo</h5>
              <small>Bueno en Teamwork</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyectos</h5>
              <small>10+ Completados</small>
            </article>
          </div>

          <p>
            Te voy a contar un poco sobre mi <br/> <br/>
            Soy un apasionado desarrollador de software con experiencia en el desarrollo de aplicaciones móviles, web y proyectos empresariales. <br/>
            Me considero una persona proactiva y curiosa, siempre buscando mejorar mis habilidades en un entorno de trabajo estimulante. <br/><br/>
            Me motiva trabajar en proyectos desafiantes que tengan un impacto positivo en la sociedad, y estoy comprometido a colaborar en equipo para cumplir los objetivos establecidos. <br/><br/>
            Creo en la importancia de aprender constantemente y estar al día con las últimas tendencias y tecnologías en mi campo. Estoy emocionado de enfrentar nuevos desafíos y continuar creciendo en mi carrera como desarrollador de software. 

              
          </p>

          <a id='btnAbout' href="#contact" className='btn btn-primary'>Enviar mensaje</a>
        </div>
      </div>
    </section>
  )
}

export default About