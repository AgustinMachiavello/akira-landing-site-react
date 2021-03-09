// import {} from './HeroStyles.js';

const Hero = (props) => {
	return (
		<div 
      className="d-flex bg-animation p-2 vh-100 flex-column justify-content-center align-items-center text-white bg-black" 
      style={{backgroundImage: 'url(' + props.backgroundImage + ')'}}>
      {props.image &&
        <div className="hero__image-wrapper">
          <img className="hero__image img-fluid" src={props.image}></img>
        </div>
      }
      <h1 className="text-center">{props.title}</h1>
		</div>
	);
};

export default Hero;
