import React from 'react'
import './home.css'
import ProfileImage from '../../assets/avataaars.svg'
import  StarLine  from '../StarLine/StarLine'

export const Home = () => {
  return (
    <div className='home-section'>
      <div className="container home-section-container">
      <img className='home-img' src={ProfileImage} alt="" />

      <div className="home-content d-flex flex-column justify-content-center align-items-center">
        <h1 className='fw-bold text-white'>START FRAMEWORK</h1>
      <StarLine/>
        <p className='text-white text-center fw-bold'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      </div>
    </div>
  )
}

export default Home;