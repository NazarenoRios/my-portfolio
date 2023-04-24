import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projects/greenlandsw.jpg'
import IMG2 from '../../assets/projects/typergame1.jpg'
import IMG3 from '../../assets/projects/GTcolor.jpg'
import IMG4 from '../../assets/projects/saturdayCountdown.jpg'
import IMG5 from '../../assets/projects/toDoList.jpg'
import IMG6 from '../../assets/projects/weatherChannel.jpg'
import IMG7 from '../../assets/projects/omdb4.jpg'
import IMG8 from '../../assets/projects/olympic-sports.png'
import IMG9 from "../../assets/projects/betPage.jpg"
import IMG10 from "../../assets/projects/digitalwallet.jpg"

const data = [
  {
    id: 1,
    image: IMG9,
    title: 'Bet Page - (Demo con Video)',
    github: 'https://github.com/NazarenoRios',
    demo: 'https://www.youtube.com/watch?v=Wy08zf3ae2k'
  },
  {
    id: 2,
    image: IMG7,
    title: 'Butterflix TMDB - (Accede a la Pagina)',
    github: 'https://github.com/NazarenoRios',
    demo: 'https://butterflix.vercel.app/'
  },
  {
    id: 3,
    image: IMG8,
    title: 'E-commerce - (Demo con Video)',
    github: 'https://github.com/NazarenoRios',
    demo: 'https://youtu.be/5mcsn3wxW4g'
  },
  {
    id: 3,
    image: IMG10,
    title: 'Digital Wallet - (Demo con Video)',
    github: 'https://github.com/NazarenoRios',
    demo: 'https://drive.google.com/file/d/1M9X-P1DfWjz-6-0W47oLqiNqxZpPjb4r/view'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Greenland Sw',
    github: 'https://github.com/NazarenoRios',
    demo: 'https://greenlandsw.netlify.app/'
  },
  {
    id: 6,
    image: IMG2,
    title: 'Typer 3000',
    github: 'https://github.com/NazarenoRios',
    demo: 'https://typer3000.netlify.app/'
  },
  {
    id: 7,
    image: IMG3,
    title: 'GTcolor',
    github: 'https://github.com/NazarenoRios',
    demo: 'https://gtcolor.netlify.app/'
  },
  {
    id: 8,
    image: IMG4,
    title: 'Saturday Countdown',
    github: 'https://github.com/NazarenoRios',
    demo: 'https://saturday-countdown.netlify.app/'
  },
  {
    id: 9,
    image: IMG5,
    title: 'To Do List',
    github: 'https://github.com/NazarenoRios',
    demo: 'https://best-todolist.netlify.app/'
  },
  {
    id: 10,
    image: IMG6,
    title: 'Weather Channel',
    github: 'https://github.com/NazarenoRios',
    demo: 'https://weatherchannel2022.netlify.app/'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis trabajos recientes</h5>
      <h2>Proyectos</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target='_blank' rel='noreferrer' className='btn'>Github</a>
                <a href={demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio