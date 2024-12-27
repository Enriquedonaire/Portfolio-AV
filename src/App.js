import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/sass/style.scss';
import { images } from './data/GalleryData';
import VideoPlayer from './pages/VideoPlayer';
import Contact from './pages/Contact';
import About from './pages/About';
import NavBar from './component/NavBar';
import Footer from './pages/Footer';
import HomePage from './pages/HomePage';


function App() {


  //   {
  //     id: 1,
  //     imagePath: '/Portfolio-AV/img/1.jpg',
  //     alt: 'img',
  //     altImagePath: '/Portfolio-AV/img/11.png',
  //     url: "https://player.vimeo.com/video/881820954"
  //   },
  //   {
  //     id: 2,
  //     imagePath: '/Portfolio-AV/img/8.jpg',
  //     alt: 'img',
  //     altImagePath: '/Portfolio-AV/img/88.png',
  //     url: 'https://player.vimeo.com/video/881840941'
  //   },
  //   {
  //     id: 3,
  //     imagePath: '/Portfolio-AV/img/9.jpg',
  //     alt: 'img',
  //     altImagePath: '/Portfolio-AV/img/99.png',
  //     url: 'https://player.vimeo.com/video/882482970'
  //   },
  //   {
  //     id: 4,
  //     imagePath: '/Portfolio-AV/img/10.jpg',
  //     alt: 'img',
  //     altImagePath: '/Portfolio-AV/img/1010.png',
  //     url: 'https://player.vimeo.com/video/882506406'
  //   },
  //   {
  //     id: 5,
  //     imagePath: '/Portfolio-AV/img/2.jpg',
  //     alt: 'img',
  //     altImagePath: '/Portfolio-AV/img/22.png',
  //     url: 'https://player.vimeo.com/video/882483453'
  //   },
  //   {
  //     id: 6,
  //     imagePath: '/Portfolio-AV/img/3.jpg',
  //     alt: 'img',
  //     altImagePath: '/Portfolio-AV/img/33.png',
  //     url: 'https://player.vimeo.com/video/882483568'
  //   },
  //   {
  //     id: 7,
  //     imagePath: '/Portfolio-AV/img/4.jpg',
  //     alt: 'img',
  //     altImagePath: '/Portfolio-AV/img/44.png',
  //     url: 'https://player.vimeo.com/video/883253898'
  //   },
  //   {
  //     id: 8,
  //     imagePath: '/Portfolio-AV/img/5.jpg',
  //     alt: 'img',
  //     altImagePath: '/Portfolio-AV/img/55.png',
  //     url: 'https://player.vimeo.com/video/883255775'
  //   },
  //   {
  //     id: 9,
  //     imagePath: '/Portfolio-AV/img/6.jpg',
  //     alt: 'img',
  //     altImagePath: '/Portfolio-AV/img/66.png',
  //     url: 'https://player.vimeo.com/video/883746128'
  //   },
  // ];
  return (
    <>
      <NavBar className="container-fluid" />
      <Routes>
        <Route exact path="/Portfolio-AV/" element={<HomePage images={images} />} />
        <Route exact path="/video/:id" element={<VideoPlayer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
