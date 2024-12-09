import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';



const Navbar = () => {
  return (
    <nav className='mb-20 flex item-center justify-between py-6'>
      <div className='flex flex-shrink-0 item center font-extrabold text-4xl py-4'>
        {/* <img className="mx-2 w-10 h-10" src={logo} alt='logo'/> */}
        <h1>pk</h1>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/prince-kaushik-873b26283/"><FaLinkedinIn/></a>
        <a href="https://github.com/prokaushik"><FaGithub/></a>
        <a href="https://www.instagram.com/prince_kaushik4/"><FaInstagram/> </a>
      </div>
    </nav>
  )
}

export default Navbar
