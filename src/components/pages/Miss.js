import React from 'react';
import '../../App.css'
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import '../HerSection.css';

function Miss() {
    const [text] = useTypewriter({
        words: ["Hug mo po muna si Pika, our baby.", 'I do miss you, too', 'Let us go out na once we get the chance to agad', 'Be safe palagi, baby'],
        loop: {},
        });

    return (
        <div className='her-container'>
         <video src='/videos/misshd.mp4' autoPlay loop muted />
         <h1>HIIIIII, I MISS YOUUUUUU</h1>
         <p style={{ margin: '50px' }}> 
            <span style={{ fontWeight: 'bold', color: '#F08080' }}>
            {text}
            </span>
            <Cursor/>
         </p>
         <h3>If you're reading this right now, I want you to know that I do miss you, too, so muuuch at that. We will be able to go out din po agad
            and then I'll give you lots of tight hugs and kisses, I love you.
         </h3>
        </div>
    );
}

export default Miss;