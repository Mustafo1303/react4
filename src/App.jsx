import React from 'react'
import Logo from './assets/logo.jpg'
import Codes from './assets/codes.png'
import IMgo from './assets/img3.png'
import Group from ''
const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center ml-5 mr-8 h-[80px]'>
          <img src={Logo} className='w-[120px] h-[20px] ' alt="img" />
          <ul className='flex gap-9'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a  className='p-4 bg-green-400 rounded-2xl text-white w-[200px] href="#"'>Register Now</a></li>
          </ul>
      </nav>
      <div className=''>
            <h1>Lessons and insghts <br />
            <span>from 8 yaers</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis saepe aliquid incidunt!</p>
      </div>
      <img src={Codes} alt="" />
      <button className=''>Register</button>
      <h2>Our Clinits</h2>
      <img src={IMgo} alt="" />
      <h2>Manage your entire community <br />in a single system</h2>
      <div className=''>

        <img src={} alt="" />

      </div>







    </header>
   
  )
}

export default Header
