import {useState} from 'react';

// Components
import Hero from '../components/Hero';
import Header from '../components/Header';
import TextImageBlockA from '../components/TextImageBlockA';
import Awards from '../components/Awards';
import FullScreenImage from '../components/FullScreenImage';


// Images
import heroBackground from '../assets/img/akira-background-3.gif';
import heroImage from '../assets/img/akira-logo-4.png'
import headerImageMobile1 from '../assets/img/akira-motorbike-3.png'
import headerImageDesktop1 from '../assets/img/akira-falling.png'
import textImageBlockMobile1 from '../assets/img/akira-walking.png';
import textImageBlockDesktop1 from '../assets/img/kaneda-side.png';
import headerImageMobile2 from '../assets/img/blood-splash.png'
import headerImageDesktop2 from '../assets/img/akira-walking.png'
import motorbikeImage from '../assets/img/the-motorbike.jpeg'


export default function Landing() {

  return (
    <div>
        <Hero 
          title={"Good for health, bad for education"}
          backgroundImage={heroBackground}
          image={heroImage}/>
        <Header 
          title="FILM" 
          paragraph="Akira (Japanese: アキラ) is a 1988 Japanese 
          animated post-apocalyptic cyberpunk action film directed 
          by Katsuhiro Otomo, produced by Ryōhei Suzuki and Shunzō Katō, 
          and written by Otomo and Izo Hashimoto, based on Otomo's 1982 manga 
          of the same name."
          imageMobile={headerImageMobile1}
          imageDesktop={headerImageDesktop1}/>
        <Awards />

        <TextImageBlockA 
          title="LEGACY"
          paragraph="Akira is now widely regarded as one of the greatest animated 
          movies of all time and prompted an increase in popularity of anime movies 
          in the US and, generally, outside Japan. It is still admired for its 
          exceptional visuals. In Channel 4's 2005 poll of the 100 greatest 
          animations of all time featuring both film and television, Akira came in 
          at number 16. On Empire magazine's list of the 500 greatest movies 
          of all time, Akira is number 440. It showed again on Empire's list of The 
          100 Best Films Of World Cinema, coming in at #51. IGN also named it 14th on 
          its list of Top 25 Animated Movies of All-Time. The Akira anime also made TIME 
          magazine's list of top 5 anime DVDs. The film also made number 16 on Time Out's 
          top 50 animated movie list and number 5 on the Total Film Top 50 Animated Films list."
          imageMobile={textImageBlockMobile1}
          imageDesktop={textImageBlockDesktop1}/>
        <Header 
          title="MANGA"
          paragraph={["It was initially serialized in the pages of Young Magazine, a", 
          "seinen manga magazine, from 1982 until 1990, and then collected into",
          "six tankōbon volumes by its publisher Kodansha between 1984 and 1991.",
          "It was published in the United States by Marvel Comics under Epic Comics, becoming" ,
          "one of the first manga ever to be completely translated into English. It is currently" ,
          "published by Kodansha Comics in North America.",
          <strong className="text-red"> Otomo's art is considered outstanding and a watershed for both Otomo and the manga form</strong>,
          ". The manga is also famous for spawning the seminal 1988 cyberpunk anime film adaptation of the same name."]}
          imageMobile={headerImageMobile2}
          imageDesktop={headerImageDesktop2}/>
        <FullScreenImage image={motorbikeImage} />
    </div>
  )
}