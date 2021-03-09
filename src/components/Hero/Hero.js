// import {} from './HeroStyles.js';

import background from '../../assets/img/akira-background-3.gif';
import logo from '../../assets/img/akira-logo-4.png';
import frontImage from '../../assets/img/akira-motorbike.png';

const Hero = (props) => {
	return (
		<div className="d-flex bg-animation p-2 vh-100 flex-column justify-content-center align-items-center text-white bg-black" style={{backgroundImage: 'url(' + background + ')'}}>
      <div className="hero__image-wrapper">
        <img className="hero__image img-fluid" src={logo}></img>
      </div>
      <h1 className="text-center">{props.title}</h1>
		</div>
	);
};

export default Hero;
