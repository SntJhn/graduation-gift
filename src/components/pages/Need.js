import React from 'react';
import '../../App.css'
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import '../HerSection.css';

function Need() {
    const [text] = useTypewriter({
        words: ["I'll be with you, don't worry na po.", 'I am here.', 'Please let me know immediately.', 'Be safe palagi, baby'],
        loop: {},
        });

    return (
        <div className='her-container'>
         <video src='/videos/need.mp4' autoPlay loop muted />
         <h1>HIIIIII, YOU ARE HERE</h1>
         <p style={{ margin: '50px' }}> 
            <span style={{ fontWeight: 'bold', color: '#F08080' }}>
            {text}
            </span>
            <Cursor/>
         </p>
         <h3>What happened, baby? I'm here lang, don't worry. Let me know na po so I can go to you. Tell me na rin what do you want me to bring,
            24 chicken po ba? or PotCor sweetcorn flavor? I'll go to you po, I love you.
         </h3>
        </div>
    );
}

export default Need;