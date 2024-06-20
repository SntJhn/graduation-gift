import React from 'react';
import '../../App.css'
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import '../HerSection.css';

function Breakdown() {
    const [text] = useTypewriter({
        words: ["The Mother of our Unborn", 'My Wife', 'The Love of my Life', 'My Little Princess'],
        loop: {},
        });

    return (
        <div className='her-container'>
         <video src='/videos/breakdown.mp4' autoPlay loop muted />
         <h1>HEEEELLOOO, MY PRETTY BABY</h1>
         <p style={{ margin: '50px' }}> 
            <span style={{ fontWeight: 'bold', color: '#F08080' }}>
            {text}
            </span>
            <Cursor/>
         </p>
         <h3> Get dressed, baby, we will go out. Don't hesitate, call me na. Let's go out and have fun tapos eat lots tayo after. Or punta
            tayo kidzoona or gokart po tayo. Wipe your tears na. I'm sorry I'm not beside you right now to wipe that for you and to give you
            a tight hug pero I'll be with you na rin po maya-maya, I love you, smile na kasi we will go out na po oh. Ligo and bihis na ikaw.
         </h3>
        </div>
    );
}

export default Breakdown;