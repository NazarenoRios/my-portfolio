import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Que habilidades tengo</h5>
      <h2>Mis habilidades</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>HTML/CSS</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>React</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Redux</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Next js</h4>
                  <small className='text-light'></small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>React Native</h4>
                  <small className='text-light'></small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Typescript</h4>
                  <small className='text-light'></small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>MUI & Chakra UI</h4>
                  <small className='text-light'></small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Firebase</h4>
                  <small className='text-light'></small>
               </div>
            </article>
          </div>
        {/* END OF FRONTEND */}

        </div>
        <div className="experience__backend">
        <h3>Desarrollo Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Node JS</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Express</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>MySQL</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>PostgreSQL</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Sequelize</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'></small>
               </div>
            </article>

            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>AWS</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>PHP</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Slim</h4>
                  <small className='text-light'></small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
                  <h4>Laravel</h4>
                  <small className='text-light'></small>
               </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience