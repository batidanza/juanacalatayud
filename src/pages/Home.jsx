import React from 'react';
import './Home.css';
import FirstImage from '../assets/juana-pic.png'; // Ajusta la ruta según la ubicación de tus assets
import SecondImage from '../assets/juana-pic.png'; // Ajusta la ruta según la ubicación de tus assets
import Logo from '../assets/04LogoJC_Firma_BlancoVacío.png'; // Ajusta la ruta según la ubicación de tu logo

const Home = () => {
  return (
    <div className='home-container'>
      <div className='logo-container'>
        <img src={Logo} alt='Logo' className='logo' />
      </div>
      <div className='images-container'>
        <div className='image-container'>
          <img src={FirstImage} alt='Primera Imagen' />
        </div>
        <div className='image-container'>
          <img src={SecondImage} alt='Segunda Imagen' />
        </div>
      </div>
    </div>
  );
};

export default Home;
