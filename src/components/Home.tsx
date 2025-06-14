import React from 'react'
import Img from '../assets/Group 20.png'
import { FaSearch } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import Omg from '../assets/274fbc24c74d318156023a0fe71cf0dab4009ace.png'
const Home = () => {
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center px-9 h-[100px]">
          
         
          <img src={Img} alt="Logo" className="w-32" />

         
          <ul className="flex gap-8 text-lg font-medium">
            <li className="hover:text-[#39D84A] cursor-pointer">Home</li>
            <li className="hover:text-[#39D84A] cursor-pointer">Menu</li>
            <li className="hover:text-[#39D84A] cursor-pointer">Services</li>
            <li className="hover:text-[#39D84A] cursor-pointer">Offers</li>
          </ul>

        
          <div className="flex items-center gap-6 text-xl">
            <FaSearch className="cursor-pointer hover:text-[#39D84A]" />
            <button className="flex items-center gap-2 px-4 py-2 bg-[#39D84A] text-white rounded-full hover:bg-[#2fb03c] transition-all">
              <IoCall />
              Contact
            </button>
          </div>
        </nav>
       
            <h1 className='w-[596px] h-[180px] absolute top-[330px] left-[153px] text-base font-inter font-extrabold text-[62px] leading-[146%] tracking-[0%]'>Dive Into delight of delectable <span className='text-[#39D84A]'> Food</span></h1>
            <p className='w-[622px] h-[88px] absolute top-[569px] left-[153px] font-inter font-medium text-[26px] leading-[171%] tracking-[0%] text-[gray]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
            <button className='w-[229px] h-[80px] absolute top-[728px] left-[153px] rounded-[10px] text-[white] bg-[#39DB4A]'>Order Now</button>
           <p className='w-[160px] h-[31px] absolute top-[753px] left-[417px] font-inter font-semibold text-[26px] leading-[100%] text-[#4e4e4e] tracking-[0%]'> Watch Video </p>
           <p className='w-[248px] h-[67px] bg-[#FBFBFB] absolute top-[321px] left-[805px] font-inter font-semibold text-[20px] leading-[100%] tracking-[0%] text-red-500'>Hotspice Food</p>
           <img className='m-28 ' src={Omg} alt="img" />
           
      
        
      </header>
    </div>
  )
}

export default Home
