import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './logo.png';

const Logo = () => {
	return (
        <div className='ma4 mt0'>
          <Tilt className="Tilt br1 shadow-2" options={{ max : 25 }} style={{ height: 80, width: 80 }} >
             <div className="Tilt-inner"> 
             <img style={{paddingTop: '6px'} } alt='logo' src={brain} /> 
             </div>
          </Tilt>
        </div>
		);		
}

export default Logo;