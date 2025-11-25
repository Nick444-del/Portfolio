import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Experience from '../components/Skill Card/Experiense'
// import Portfolio from '../components/Portfolio/Portfolio'

const Public = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <About/>
            <Experience/>
            {/* <Portfolio/> */}
        </div>
    )
}

export default Public