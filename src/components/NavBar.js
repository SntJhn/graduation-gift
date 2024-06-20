import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () =>setClick(!click);
  const closeMobMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    } else {
        setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobMenu}>
                    NMC <i class="fa-solid fa-cookie-bite"></i>
                </Link>
                <div className='menu-icon' onClick={ handleClick } >
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobMenu}>
                            Open this on your graduation.
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sad' className='nav-links' onClick={closeMobMenu}>
                            Open this when you're sad.
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/miss' className='nav-links' onClick={closeMobMenu}>
                            Open this when you miss me.
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/need' className='nav-links' onClick={closeMobMenu}>
                            Open this when you need me.
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/breakdown' className='nav-links' onClick={closeMobMenu}>
                            Open this when you're breaking down.
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/identify' className='nav-links-mobile' onClick={closeMobMenu}>
                            Please Identify Yourself.
                        </Link>
                    </li> */}
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>IDENTIFY YOURSELF</Button>} */}
            </div>
        </nav> 
    </>
  )
}

export default NavBar
