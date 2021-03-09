import {useState} from 'react';

// Components
import Hero from '../components/Hero';
import Header from '../components/Header';
import TextImageBlockA from '../components/TextImageBlockA';


export default function Landing() {
  const [hero, setHero] = useState(
    {
      title: 'Akira',
      subtitle: 'Subtitle',
      backgroundImage: '',
    }
  )

  return (
    <div>
        <Hero title={"Good for health, bad for education"}/>
        <Header 
          title="FILM" 
          paragraph="Akira (Japanese: アキラ) is a 1988 Japanese 
          animated post-apocalyptic cyberpunk action film directed 
          by Katsuhiro Otomo, produced by Ryōhei Suzuki and Shunzō Katō, 
          and written by Otomo and Izo Hashimoto, based on Otomo's 1982 manga 
          of the same name."/>
        <TextImageBlockA 
          title="popular culture"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam gravida purus a sapien fringilla, ac sagittis lacus mattis. 
          Vestibulum non orci vel elit molestie tempus a eget augue. Nulla id faucibus nunc. 
          Vestibulum quis euismod neque. Nunc bibendum sed mauris non suscipit. 
          Duis ac purus non risus pulvinar luctus nec in lacus. Integer maximus tristique nisi, vitae 
          fringilla lectus faucibus sed. Vestibulum nisi massa, tristique eu nibh in, porta imperdiet neque."/>
    </div>
  )
}