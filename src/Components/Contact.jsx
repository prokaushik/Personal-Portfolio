import { CONTACT } from "../constants/index";
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
    
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-10 text-center text-4xl">Get in Touch</motion.h2>

      <div className="text-center tracking-tighter ">

        <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-4">{CONTACT.address}</motion.p>

        <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="my-4">{CONTACT.email}</motion.p>

        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/prince-kaushik-873b26283/"><FaLinkedinIn/></a>
        <a href="https://github.com/prokaushik"><FaGithub/></a>
        <a href="https://www.instagram.com/prince_kaushik4/"><FaInstagram/> </a>
      </div>
      </div>
    </div>
  )
}

export default Contact
