import React from 'react'
import '../style/Style.css'

function Navbar() {
    return (
        <div className='navContainer'>
            <div className='internContainer'>
                <img src={require('../images/world.png')} />
                <p>my travel journey.</p>
            </div>
        </div>
    )
}

export default Navbar;
