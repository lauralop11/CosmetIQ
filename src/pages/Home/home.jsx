import Navbar from "../../components/Navbar/Navegation"
import Banner from "../../components/Banner"
import About from "../../components/Info"
import Service from "../../components/Serv"
import Contact from "../../components/Contac"

function Home(){
  return (
    <div id="home" className="overflow-clip w-screen">
       <Navbar/>
       <Banner/>
       <About/>
       <Service/>
       <Contact/>
    </div>
  )
}
export default Home