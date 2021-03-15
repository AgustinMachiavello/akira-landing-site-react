// import {} from './HeroStyles.js';

const Hero = (props) => {
	return (
		<div 
      className="d-flex bg-animation p-2 vh-100 flex-column justify-content-center align-items-center text-white bg-black" 
      style={{backgroundImage: 'url(' + props.backgroundImage + ')'}}>
      {props.image &&
        <div className="d-flex justify-content-center hero__image-wrapper" data-aos="zoom-out-down">
          <img className="hero__image img-fluid" src={props.image}></img>
        </div>
      }
      <div className="text-center">
        <h1 className="" data-aos="zoom-out-up">{props.title}</h1>
        <span><img className="hero__icon" src={props.icon}></img></span>
      </div>
		</div>
	);
};

export default Hero;
