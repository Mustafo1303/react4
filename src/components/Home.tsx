import React from 'react';
import Img from '../assets/Group 20.png';
import { FaSearch } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import Omg from '../assets/274fbc24c74d318156023a0fe71cf0dab4009ace.png';
import Gam from '../assets/gam (1).png';
import Gam2 from '../assets/gam (2).png';
import Gam3 from '../assets/gam (3).png';
import Gam4 from '../assets/gam (4).png';
import Sal1 from '../assets/sal1.png';
import Sal2 from '../assets/sal2.png';
import Sal3 from '../assets/sal3.png';
import Star from '../assets/fi-sr-star.png';
import Chef from '../assets/ef0d1d487273c3ffd4bc7fb0614dbba194a41031.png'
import Pic1 from '../assets/Mask group-1.png'
import Pic2 from '../assets/Mask group-2.png'
import Pic3 from '../assets/Mask group.png'
import Vec1 from '../assets/Vector.png'
import vec2 from '../assets/fi-rr-time-fast.png'
import face from '../assets/Vector (1).png'
import yout from '../assets/🦆 icon _youtube_.png'
import insta from '../assets/🦆 icon _instagram_.png'
import twitter from '../assets/Vector.png'





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
              <IoCall /> Contact
            </button>
          </div>
        </nav>

        <div className="absolute top-[330px] left-[153px]">
          <h1 className="text-[62px] font-extrabold leading-[146%] w-[596px]">
            Dive Into delight of delectable <span className="text-[#39D84A]">Food</span>
          </h1>
          <p className="text-[26px] text-gray-500 leading-[171%] w-[622px] mt-6">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </p>
          <div className="mt-8 flex items-center gap-6">
            <button className="w-[229px] h-[80px] rounded-[10px] text-white bg-[#39DB4A] text-[20px]">Order Now</button>
            <p className="text-[#4e4e4e] text-[26px] font-semibold">Watch Video</p>
          </div>
        </div>

        <p className="absolute top-[321px] left-[805px] bg-[#FBFBFB] text-[20px] font-semibold text-red-500 p-4 rounded">
          Hotspice Food
        </p>
        <img src={Omg} alt="Main Dish" className="m-28" />
      </header>

      <section>
        <div className="text-center mt-[120px]">
          <p className="text-[#FF6868] text-[20px] font-bold tracking-[17.5%] uppercase">Customer Favorites</p>
          <h1 className="text-[60px] font-bold mt-2">Popular Categories</h1>
        </div>

        <ul className="w-full max-w-[1400px] mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-xl shadow-md mt-12">
          {[{ img: Gam, label: 'Main Dish', desc: '(86 dishes)' }, { img: Gam3, label: 'Breakfast', desc: '(12 break fast)' }, { img: Gam2, label: 'Dessert', desc: '(48 dessert)' }, { img: Gam4, label: 'Browse All', desc: '(255 Items)' }].map((item, index) => (
            <li key={index} className="flex flex-col items-center bg-white w-[326px] h-[326px] rounded-[40px] shadow-[2px_10px_30px_0px_#0000001A] p-4">
              <div className="w-[200px] h-[200px] rounded-full bg-pink-100 flex items-center justify-center overflow-hidden">
                <img src={item.img} alt={item.label} className="w-[150px] h-[150px] object-cover rounded-full" />
              </div>
              <a href="#" className="mt-4 font-semibold text-[20px] uppercase text-white bg-[#1E1E1E] w-[143px] h-[36px] flex items-center justify-center rounded">
                {item.label}
              </a>
              <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
            </li>
          ))}
        </ul>

        <section className="mt-[60px] px-8 text-center">
          <p className="text-[#FF6868] font-bold text-[20px] tracking-[17.5%] uppercase mb-4">Special Dishes</p>
          <h1 className="text-[56px] font-bold leading-tight mb-12">Standout Dishes <br /> From Our Menu</h1>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1200px] mx-auto">
            {[{ img: Sal1, title: 'Grilled Chicken Salad', price: '$25.50', rating: '4.9 (1.2k reviews)' }, { img: Sal2, title: 'Double Cheese Burger', price: '$18.99', rating: '4.8 (986 reviews)' }, { img: Sal3, title: 'Italian Pasta Bowl', price: '$21.00', rating: '4.7 (780 reviews)' }].map((dish, index) => (
              <li key={index} className="bg-white rounded-[40px] shadow-[2px_10px_30px_0px_#0000001A] p-6 flex flex-col items-center">
                <img src={dish.img} alt={dish.title} className="w-[280px] h-[280px] rounded-[40px] object-cover" />
                <h3 className="mt-6 text-[24px] font-semibold">{dish.title}</h3>
                <p className="text-[20px] text-[#FF6868] mt-1">{dish.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <img src={Star} alt="Star" className="w-5 h-5" />
                  <p className="text-sm text-gray-500">{dish.rating}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className='absolute w-[506px] h-[744px] top-[-278px] left-[-214px]'>
        <img className='absolute w-[506px] h-[744px] top-[2989px] left-[214px]' src={Chef} alt="" />
           <p className='absolute w-[190px] h-[24px] top-[3077px] left-[913px] font-inter font-bold text-[20px] leading-[100%] tracking-[17.5%] uppercase bg-[#FF6868] text-white text-center'>Testimonials</p>
           <h1 className='absolute w-[635px] h-[158px] top-[3154px] left-[914px] font-inter font-bold text-[60px] leading-[131%] tracking-[0%]'>What Our Customers <br /> Say About Us</h1>
          <p className='absolute w-[655px] h-[123px] top-[3341px] left-[914px] font-inter font-medium text-[26px] leading-[159%] tracking-[0%] text-[#555555]'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p> 
          <ul className=''>
            <li className='absolute w-[80px] h-[80px] top-[3531px] left-[914px] rounded-[20px]'><img src={Pic3} alt="" /></li>
            <li className='absolute w-[80px] h-[80px] top-[3531px] left-[964px] rounded-[20px]'><img src={Pic2} alt="" /></li>
            <li className='absolute w-[80px] h-[80px] top-[3531px] left-[994px] rounded-[20px]'><img src={Pic1} alt="" /></li> 
            <p className='absolute w-[253px] h-[31px] top-[3531px] left-[1152px] font-inter font-semibold text-[26px] leading-[100%] tracking-[0%]'>Customer Feedback</p>
            <img className='absolute w-[24px] h-[24px] top-[3577px] left-[1152px]' src={Star} alt="" />
            <p className='absolute w-[181px] h-[29px] top-[3575px] left-[1246px]'>(18.6k Reviews)</p>
          </ul>
      </section>
      <section>
        <p className='absolute w-[305px] h-[24px] top-[3993px] left-[156px] font-inter font-bold text-[20px] leading-[100%] tracking-[0.175em] uppercase text-[#FF6868]'>Our Story & Services</p>
        <h1 className='w-[729px] h-[146px] absolute top-[4070px] left-[156px] font-[Inter] font-bold text-[60px] leading-[100%] tracking-[0%]'>Our Culinary Journey And Services</h1>
        <p className='w-[652px] h-[126px] absolute top-[4266px] left-[156px] font-[Inter] font-medium text-[26px] leading-[160%] tracking-[0%] text-[#555555]'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
      <button className="w-[215px] h-[80px] absolute top-[4445px] left-[156px] rounded-[40px] bg-[#39DB4A]"><a className=" font-inter font-semibold text-[26px] leading-[100%] tracking-[0%] text-white" href="#">Explore</a></button>
      <ul className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-[1300px] mx-auto mt-12 grid-rows-2">
        <li className="w-[277px] h-[297px] absolute top-[3946px] left-[981px] rounded-[30px] shadow-[7px_12px_43px_0px_#00000024]">
          <img className='flex justify-center items-center m-9' src={Vec1} alt="" />
        <h1 className="w-[123px] h-[29px] absolute left-[58px] font-inter font-bold text-[24px] leading-[100%] tracking-[0%] text-center uppercase text-[#5FE26C]">Catering</h1>
        <p className="w-[236px] h-[72px] absolute top-[186px] left-[31p] font-inter font-semibold text-[20px] leading-[100%] tracking-[0%] text-center text-[#90BD95]">Delight your guests with our flavors and presentation</p>
        </li>
        <li className="w-[277px] h-[297px] absolute top-[3946px] left-[1281px] rounded-[30px] shadow-[7px_12px_43px_0px_#00000024]">
          <img className='flex justify-center items-center m-9' src={vec2} alt="" />
        <h1 className="w-[123px] h-[29px] absolute left-[58px] font-inter font-bold text-[24px] leading-[100%] tracking-[0%] text-center uppercase text-[#5FE26C]">Fast delivery</h1>
        <p className="w-[236px] h-[72px] absolute top-[186px] left-[31p] font-inter font-semibold text-[20px] leading-[100%] tracking-[0%] text-center text-[#90BD95]">We deliver your order promptly to your door</p>
        </li>
        <li className="w-[277px] h-[297px] absolute top-[4276px] left-[1281px] rounded-[30px] shadow-[7px_12px_43px_0px_#00000024]">
          <img className='flex justify-center items-center m-9' src={Vec1} alt="" />
        <h1 className="w-[123px] h-[29px] absolute left-[58px] font-inter font-bold text-[24px] leading-[100%] tracking-[0%] text-center uppercase text-[#5FE26C]">Online Ordering</h1>
        <p className="w-[236px] h-[72px] absolute top-[186px] left-[31p] font-inter font-semibold text-[20px] leading-[100%] tracking-[0%] text-center text-[#90BD95]">Explore menu & order with ease using our Online Ordering</p>
        </li>-
        
        <li className="w-[277px] h-[297px] absolute top-[4276px] left-[981px] rounded-[30px] shadow-[7px_12px_43px_0px_#00000024]">
          <img className='flex justify-center items-center m-9' src={vec2} alt="" />
        <h1 className="w-[123px] h-[29px] absolute left-[58px] font-inter font-bold text-[24px] leading-[100%] tracking-[0%] text-center uppercase text-[#5FE26C]">Gift Cards</h1>
        <p className="w-[236px] h-[72px] absolute top-[186px] left-[31p] font-inter font-semibold text-[20px] leading-[100%] tracking-[0%] text-center text-[#90BD95]">Give the gift of exceptional dining with Foodi Gift Cards</p>
        </li>
      </ul>

      </section>
      <footer className="bg-white py-10 px-4 w-full absolute top-[4700px] text-[34px] leading-[100%] tracking-[0px] font-inter">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-[#333]">

    <div>
      <img src={Img} alt="Logo" className="w-[70px] h-auto mb-4" />
      <p className="text-gray-600">Savor the artistry where every dish is a culinary masterpiece</p>
    </div>

    <div>
      <h3 className="font-semibold text-black mb-4">Useful links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">About us</a></li>
        <li><a href="#" className="hover:underline">Events</a></li>
        <li><a href="#" className="hover:underline">Blogs</a></li>
        <li><a href="#" className="hover:underline">FAQ</a></li>
        <li><a href="#" className="hover:underline">Terms</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-black mb-4">Main Menu</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Offers</a></li>
        <li><a href="#" className="hover:underline">Menus</a></li>
        <li><a href="#" className="hover:underline">Reservation</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-black mb-4">Contact Us</h3>
      <ul className="space-y-2">
        <li><a href="mailto:example@email.com" className="hover:underline">example@email.com</a></li>
        <li><a href="#" className="hover:underline">+64 958 248 966</a></li>
        <li><a href="#" className="hover:underline">Social media</a></li>
        <li><a href="#" className="hover:underline">Support</a></li>
        <li><a href="#" className="hover:underline">Help Center</a></li>
      </ul>
    </div>

  </div>
   <ul className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4  justify-items-center mb-6">
    <li><img src={twitter} alt="Twitter" className="w-6 h-6" /></li>
    <li><img src={insta} alt="Instagram" className="w-6 h-6" /></li>
    <li><img src={yout} alt="YouTube" className="w-6 h-6" /></li>
    <li><img src={face} alt="Facebook" className="w-6 h-6" /></li>
  </ul>
  <p className="text-[#555555] text-[22px] font-medium font-inter">
    Copyright 2023 Dscode | All rights reserved 
  </p>
 </footer>
    </div>
  );
};

export default Home;