import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faVimeoV, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
      imagePath: '/Portfolio-AV/img/1.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/11.png',
      url: "https://player.vimeo.com/video/881820954"
    },
    {
      id: 2,
      imagePath: '/Portfolio-AV/img/8.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/88.png',
      url: 'https://player.vimeo.com/video/881840941'
    },
    {
      id: 3,
      imagePath:'/Portfolio-AV/img/9.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/99.png',
      url: 'https://player.vimeo.com/video/882482970'
    },
    {
      id: 4,
      imagePath:'/Portfolio-AV/img/10.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/1010.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 5,
      imagePath:'/Portfolio-AV/img/2.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/22.png',
      url: 'https://player.vimeo.com/video/882483453'
    },
    {
      id: 6,
      imagePath:'/Portfolio-AV/img/3.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/33.png',
      url: 'https://player.vimeo.com/video/882483568'
    },
    {
      id: 7,
      imagePath:'/Portfolio-AV/img/4.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/44.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 8,
      imagePath:'/Portfolio-AV/img/5.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/55.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 9,
      imagePath:'/Portfolio-AV/img/6.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/66.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 10,
      imagePath:'/Portfolio-AV/img/12.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/1212.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 11,
      imagePath:'/Portfolio-AV/img/13.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/1313.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
    {
      id: 12,
      imagePath:'/Portfolio-AV/img/14.jpg',
      alt: 'img',
      altImagePath: '/Portfolio-AV/img/1414.png',
      url: 'https://player.vimeo.com/video/882506406'
    },
  ];

  return (
    <>
      <NavBar />
        <Routes>
          <Route exact path="/Portfolio-AV/" element={<Gallery images={images} />} />
          <Route exact path="/video/:id" element={<VideoPlayer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <section className="icons container-fluid">
          <div className="icon">
            <a href="https://vimeo.com/user187493171" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-vimeo-v" icon={faVimeoV} />
            </a>
            <a href="https://www.instagram.com/kikidonaire/" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-pinterest" icon={faInstagram} />
            </a>
            <a href="https://www.github.com/Enriquedonaire" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon className="fa-brands fa-behance" icon={faGithub} />
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
