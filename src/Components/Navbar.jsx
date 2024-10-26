import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            margin: '15px',
            fontSize:20,
            fontStyle:'bold',
            fontFamily:'sans-serif'
        }}>
            <h2><Link to={'/'}>Home</Link></h2>
            <h2><Link to={'login'}>Login</Link></h2>
            <h2><Link to={'register'}>Register</Link></h2>
            
        </div>
    )
}

export default Navbar