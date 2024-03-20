import React from 'react'

import Router from '../../routes/Router'
import Header from '../header/header'

import "./Layout.css"

const Layout = () => {
    
    return (
        <div className='layout_container'>
            <Header />
            <div className='offset'>
                <Router/>
            </div>
        </div>
    )
};

export default Layout