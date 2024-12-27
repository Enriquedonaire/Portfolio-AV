import React from 'react'
import Gallery from '../component/Gallery'
import LandingPage from './LandingPage'

const HomePage = ({ images }) => {
  return (
    <div>
      {/* <LandingPage /> */}
      <Gallery images={images} />
    </div>
  )
}

export default HomePage
