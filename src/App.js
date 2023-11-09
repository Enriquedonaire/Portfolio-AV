import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faVimeoV, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons';

import './assets/sass/style.scss';
import Gallery from './component/Gallery';
import VideoPlayer from './component/VideoPlayer';
import Contact from './component/Contact';
import About from './component/About';
import NavBar from './component/NavBar';
import Footer from './component/Footer';


function App() {

  const images = [
    {
      id: 1,  
      imagePath: 'img/1.jpg',
      alt: 'img',
      altImagePath: 'img/11.png',
      url: "https://player.vimeo.com/video/881820954"
    },
    {
      id: 2,
      imagePath: 'img/8.jpg',
      alt: 'img',
      altImagePath: 'img/88.png',
      url: 'https://player.vimeo.com/video/881840941'
    },
    {
      id: 3,
      imagePath:'img/9.jpg',
      alt: 'img',
      altImagePath: 'img/99.png',
      url: 'https://player.vimeo.com/video/882482970'
    },
    {
      id: 4,
      imagePath:'img/10.jpg',
      alt: 'img',
      altImagePath: 'img/1010.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 5,
      imagePath:'img/2.jpg',
      alt: 'img',
      altImagePath: 'img/22.png',
      url: 'https://player.vimeo.com/video/882483453'
    },
    {
      id: 6,
      imagePath:'img/3.jpg',
      alt: 'img',
      altImagePath: 'img/33.png',
      url: 'https://player.vimeo.com/video/882483568'
    },
    {
      id: 7,
      imagePath:'img/4.jpg',
      alt: 'img',
      altImagePath: 'img/44.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 8,
      imagePath:'img/5.jpg',
      alt: 'img',
      altImagePath: 'img/55.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 9,
      imagePath:'img/6.jpg',
      alt: 'img',
      altImagePath: 'img/66.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 10,
      imagePath:'img/12.jpg',
      alt: 'img',
      altImagePath: 'img/1212.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 11,
      imagePath:'img/13.jpg',
      alt: 'img',
      altImagePath: '/img/1313.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 12,
      imagePath:'img/14.jpg',
      alt: 'img',
      altImagePath: './img/1414.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
  ];

  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Gallery images={images} />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <section className="icons container-fluid">
          <div className="icon">
            <a href="https://vimeo.com/user187493171" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-vimeo-v" icon={faVimeoV} />
            </a>
            <a href="https://www.github.com/Enriquedonaire" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-behance" icon={faGithub} />
            </a>
            <a href="https://codepen.io/Enrique-Andr" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-pinterest" icon={faCodepen} />
            </a>
            <a href="https://www.linkedin.com/in/enrique-andres-donaire-45089a295" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-linkedin-in" icon={faLinkedinIn} />
            </a>
          </div>
        </section>
        <Footer />
    </>
  );
}

export default App;
