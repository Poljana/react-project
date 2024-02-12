import { useState } from 'react';
import './Header.css';

function Header() {

    const [invertion, setInvertion] = useState(false);

    function inverted() {
        
        setInvertion(!invertion);

        setTimeout(() => {
            
            setInvertion(invertion);

        }, 150);
        
    }

    

    return (
        <header>
            <h1>Simple Login Page</h1>
            <a href='#'>
                <button
                    type='button'
                    style={{ filter: invertion ? 'none' : 'invert(100%)' }}
                    onClick={inverted}
                >
                    Log in
                </button>
            </a>
        </header>
    );
}

export default Header;