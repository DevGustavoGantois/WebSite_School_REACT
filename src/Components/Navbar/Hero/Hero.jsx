import React from 'react'
import './Hero.css';
import dark_arrow from '../../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
    <div className="hero-text">
        <h1>Garantimos uma educação melhor para um mundo melhor</h1>
        <p>Nosso currículo de ponta é projetado para capacitar os alunos com o conhecimento, as habilidades e as experiências necessárias para se destacarem no campo dinâmico da educação.</p>
        <button className="btn">Saiba mais <img src={dark_arrow} alt="" /></button>
    </div>
    </div>  
  )
}

export default Hero
