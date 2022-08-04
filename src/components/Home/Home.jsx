import React from 'react'
import { Link } from 'react-router-dom'
import LogoTitled from '../../assets/images/logo-s.png'
import './Home.scss'

const Home = () => {
  return (
    <div className="contanier home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitled} alt="developer" />
          Pappala
          <br />
          web developer
        </h1>
        <h2>Full Stack Developer / JavaScript </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
