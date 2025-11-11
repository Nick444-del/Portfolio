import React from 'react'

import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'

type Props = {}

const Public = (props: Props) => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <About/>
        </div>
    )
}

export default Public