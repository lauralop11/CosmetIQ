import { Title } from "../Title"
import logo from '../../assets/logo/Subject.png'
import iconPhone from '../../assets/phone.svg'
import iconEmail from '../../assets/mail.svg'
import iconMap from '../../assets/map.svg'

const Contact = () => {
  return (
      <div id="contact">
        <Title>Contactenos</Title>
        <div className="relative m-3 px-20 text-gray-700 w-screen">
          <p className="font-[verdana]  md:flex hidden">Estamos comprometidos en ofrecer soluciones integrales y personalizadas para el
éxito de su empresa en la industria cosmética. Con nuestra experiencia,
conocimiento técnico y enfoque en la calidad, podemos ayudarte a alcanzar tus
objetivos de innovación, cumplimiento normativo y eficiencia operativa.</p>
          <p className="font-extrabold text-2xl mb-10 md:mt-10 text-center">¿Estás listo para llevar tu negocio al siguiente nivel?</p>
          <p className="font-[verdana] ">Nos encantaría conversar sobre cómo podemos apoyarte en el diseño, desarrollo y
optimización de tus productos cosméticos, así como en la implementación de
prácticas que garantizan la calidad y la seguridad de tus productos.</p>
        <div>
          <img src={logo} alt="logo" className="absolute -z-1 md:-top-2 md:left-20 -top-5 left-10 grayscale opacity-[0.3]"/>
         </div>
        </div>
          <div className="bg-seconde py-5 text-white font-bold tracking-widest flex flex-col items-center md:flex-row  md:justify-around">
            <p className="flex gap-2"><span><img src={iconPhone} alt="Phone icon"/></span>Teléfono: +57 350 311 89 75</p>
            <p className="flex gap-2"><span><img src={iconEmail} alt="Email icon"/></span>Correo Electrónico: dircientifica.cosmetiq@gmail.com</p>
            <p className="flex gap-2"><span><img src={iconMap} alt="Map icon"/></span>Bogotá, Colombia</p>
          </div>
      </div>
  )
}

export default Contact;
