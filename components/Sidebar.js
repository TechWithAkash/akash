import React from 'react'
import Image from 'next/image'
import { FaPython, FaChartLine, FaReact, FaNodeJs, FaDatabase, FaCss3Alt } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col justify-between items-center w-[25%] min-h-screen bg-[#f3f3f3] gap-8 p-4">
      <div className="flex flex-col justify-center items-center pt-20">
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
  )
}

export default Sidebar;
