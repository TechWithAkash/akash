"use client"
import Image from "next/image";
import { useState } from 'react';
import { FaPython, FaChartLine, FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaLinkedin, FaTwitter, FaGithub, FaKaggle, FaInstagram } from 'react-icons/fa';
import Head from "next/head";
export default function Home() {
  const [currentSection, setCurrentSection] = useState('about');

  const renderContent = () => {
    switch (currentSection) {
      case 'about':
        return (
          <div className="md:w-[80%]">
            <h1 className="text-[#7d807d] py-3">Hello I'm</h1>
            <h2 className=" text-2xl font-semibold text-[#f44e91] py-3">Akash Vishwakarma</h2>
            <span className="text-[#7d807d]">As a dedicated Data Science Enthusiast, I'm currently pursuing my degree while furthering my expertise through the Data Science Masters 2.0 program with Pwskills. With a fervent passion for innovation, my proficiency extends to software development🧑‍💻 and embedded systems design, mastering languages such as Python, Java, and JavaScript, alongside frameworks like ReactJS and NodeJS.</span>
            <h2 className=" text-xl font-semibold text-[#7d807d] py-10 ">Find me on</h2>
            <div className="social flex gap-4 justify-around items-start  mb-10">
              <a href="https://www.linkedin.com/in/akash-vishwakarma-42b0b6267/" target="_blank" rel="noopener noreferrer" className="text-[#1c699b] ">
                <FaLinkedin size={45} />
              </a>
              <div className="rounded-full p-2 bg-[#1da1f2] ">
                <a href="https://x.com/AKASHVISHW64779" target="_blank" rel="noopener noreferrer" className="text-[#ffff] ">
                  <FaTwitter size={30} />
                </a>
              </div>
              <a href="https://github.com/TechWithAkash" target="_blank" rel="noopener noreferrer" className="text-black ">
                <FaGithub size={45} />
              </a>
              <a href="https://www.kaggle.com/akash9987" target="_blank" rel="noopener noreferrer" className="text-[#20beff] ">
                <FaKaggle size={45} />
              </a>
              <a href="https://www.instagram.com/akashvishwalarma45/" target="_blank" rel="noopener noreferrer" className="text-[#f44e91] ">
                <FaInstagram size={45} />
              </a>
            </div>
            <div className="btn">
              <button className="bg-[#f44e91] rounded-3xl text-white font-semibold py-4 px-10 hover:bg-white hover:text-[#f44e91] hover:border-[#f44e91] border-2 " onClick={() => setCurrentSection('contact')}>HIRE ME</button>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="w-[80%]">
            <h2 className=" text-2xl font-semibold text-[#f44e91] py-3">Projects</h2>
            <span className="text-[#7d807d]">Here you can add content related to your projects.</span>
          </div>
        );
      case 'contact':
        return (
          <div className="w-[80%]">
      <Head>
        <title>Contact Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container md:mx-auto  flex flex-col md:flex-row justify-between items-center ">
        <div className=" md:w-1/2 md:p-6 p-0">
          <h1 className="text-4xl font-bold mb-10 text-center md:text-start">Hello!</h1>
          <p className="text-gray-700 mb-10 text-center md:text-start">Feel free to reach out to me, for a project/consultation.</p>
          <p className="text-gray-700 mb-10 mx-10 text-center ">OR</p>
          <p className="text-gray-700 text-center md:text-start">Send me a mail:</p>
          <a href="mailto:iamakash652@gmail.com" className="text-blue-600 md:text-start text-center">iamakash652@gmail.com</a>
        </div>

        <div className="md:w-full md:w-1/2 md:p-6 p-0 my-8">
          <h2 className="text-3xl font-bold mb-6 md:mb-8 text-center md:text-start" >Contact Me</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="md:w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="main flex ">
        {/* SideBar */}
        <div className="sidebar md:flex hidden md:block flex-col justify-between items-center w-[25%] min-h-screen bg-[#f3f3f3] gap-8 p-4">
          <div className="flex flex-col justify-center items-center pt-28">
            <div className="detail">
              <Image className="rounded-full" width={200} height={200} alt="profileimage" src="/akash.png" />
            </div>
            <div className="flex flex-col justify-center items-center text-center pt-5">
              <span className="font-bold text-[#1c699b]">Akash Vishwakarma</span>
              <span className=" text-[#1c699b]">Senior Data Scientist</span>
            </div>
            <div className="flex justify-center items-center gap-4 pl-10 pt-10">
              <ul className="text-[#1c699b] space-y-2">
                <li className="flex items-center gap-2"><FaPython />Python, Flask</li>
                <li className="flex items-center gap-2"><FaChartLine />Statistics, Machine Learning</li>
                <li className="flex items-center gap-2"><FaReact />React, Next JS</li>
                <li className="flex items-center gap-2"><FaNodeJs />Node JS (Express JS)</li>
                <li className="flex items-center gap-2"><FaDatabase />MongoDB</li>
                <li className="flex items-center gap-2"><FaCss3Alt />Tailwind CSS</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <span>Developed by</span> <span className="font-semibold text-[#1c699b]">Akash Vishwakarma</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="content md:w-[80%]">
          {/* Upper Navbar */}
          <nav className='md:w-full  flex justify-center gap-5 items-center p-6'>
            <ul className="flex gap-5">
              <li className={`hover:text-[#f44e91] font-bold hover:cursor-pointer ${currentSection === 'about' ? 'underline decoration-[#f44e91]' : ''}`} onClick={() => setCurrentSection('about')}>About</li>
              <li className={`hover:text-[#f44e91] font-bold hover:cursor-pointer ${currentSection === 'projects' ? 'underline decoration-[#f44e91]' : ''}`} onClick={() => setCurrentSection('projects')}>Projects</li>
              <li className={`hover:text-[#f44e91] font-bold hover:cursor-pointer ${currentSection === 'contact' ? 'underline decoration-[#f44e91]' : ''}`} onClick={() => setCurrentSection('contact')}>Contact</li>
            </ul>
          </nav>
          <div className="h-1 bg-[#f3f3f3]"></div>

          {/* Main Body */}
          <div className="main flex justify-center items-center p-20">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}
