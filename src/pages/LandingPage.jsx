import React from 'react'
import landingVideo from '../assets/img/LandingVideo.mp4'
import '../assets/sass/LandingPage.scss'


const LandingPage = () => {
  return (
    <div className="cover-container">
      <video className="video-landing" src={landingVideo} autoPlay loop muted />

    </div>
  )
}

export default LandingPage
