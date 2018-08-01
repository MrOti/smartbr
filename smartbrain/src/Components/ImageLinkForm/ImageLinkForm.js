import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = function(){
	return(
		<div>
			<p className="f3 tc">
				<p>This app detects faces!</p>
			</p>
			<div className="center">
				<div className="form pa4 br3 shadow-5">
					<input className= "f4 pa2 w-100 center" type='text' />
					<button className="pointer f4 ma2 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple">
					Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;