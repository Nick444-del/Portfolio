import React from 'react'

import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Experience from '../components/Skill Card/Experiense'

type Props = {}

const Public = (props: Props) => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <About/>
            <Experience/>
        </div>
    )
}

export default Public