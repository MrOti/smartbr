import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png.png';

const Logo = function(){
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br4 shadow-2 pointer" options={
				{transition: true, perspective: 250, max: 55, speed: 150}} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3 grow">
 					<img style={{paddingTop: '5px'}} alt="logo" src={brain}/>
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;