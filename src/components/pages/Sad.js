import React from 'react';
import '../../App.css'
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import '../HerSection.css';

function Sad() {
    const [text] = useTypewriter({
        words: ["Are you okay, baby?", 'What happened po?', 'Sino nang-away sa baby ko na iyan?', 'Can you please call me na po if sad ikaw?'],
        loop: {},
        });

    return (
        <div className='her-container'>
         <video src='/videos/sad.mp4' autoPlay loop muted />
         <h1>HIIIIII</h1>
         <p style={{ margin: '50px' }}> 
            <span style={{ fontWeight: 'bold', color: '#F08080' }}>
            {text}
            </span>
            <Cursor/>
         </p>
         <h3>Hi, baby ko, call mo na po ako, let's go out to have an ice cream or ano fries hehe whatever you wanttttt. Tara na, baby, bihis na ikaw.
            I love you, smile for me na, kawawa naman ang baby ko. Hindi natin bati nang-away sa'yo.
         </h3>
        </div>
    );
}

export default Sad;