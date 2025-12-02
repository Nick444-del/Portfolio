import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Experience from '../components/Skill Card/Experiense'
import WorkExperience from '../components/Work Experiance/Work'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Public = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <About/>
            <Experience/>
            <WorkExperience />
            <Portfolio/>
            <Contact/>
            <Footer />
        </div>
    )
}

export default Public