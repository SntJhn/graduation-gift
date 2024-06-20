import React from 'react';
import '../App.css'
import './HerSection.css';
import { useTypewriter, Cursor} from 'react-simple-typewriter';

function HerSection() {
  const [text] = useTypewriter({
    words: ["I'm so proud of you, baby!", 'You deserve it, baby!', 'Smile for me, baby.', 'And most of all, I love you, baby!'],
    loop: {},
    });

  return (
    <div className='her-container'>
      <video src='/videos/cover.mp4' autoPlay loop muted />
      <h1>CONGRATS, BABY!</h1>
      <p style={{ margin: '50px' }}> 
        <span style={{ fontWeight: 'bold', color: '#F08080' }}>
          {text}
        </span>
        <Cursor/>
      </p>
      <h3>Words can't express how proud I am of you, baby. I might've arrived late that I wasn't with you to witness your
        journey, but I know well enough that you did your very best. It puts me into awe, just imagining the efforts you did, especially now
        that you've graduated. Now, I am with you to bask in the glory that the future you will bring. I will be with you, forever supporting you
        in everything that you want. Once again, I love you, so much. 
      </h3>
    </div>
  )
}

export default HerSection
