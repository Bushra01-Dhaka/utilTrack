import { Link } from "react-router-dom";
import {  } from 'react-icons/fa';
import footer_img from "../assets/3rd_floor/UtilTrack-UI/white-bg-leaf.png"
import { SiFacebook, SiGmail, SiTwitter } from "react-icons/si";
const Footer = () => {
    return (
        <div className="hero min-h-[60vh]" style={{
            backgroundImage: `url(${footer_img})`
        }}>

          <div className="hero-content  flex flex-col lg:flex-row justify-evenly  gap-10 pt-10 lg:pt-0">
            {/* left_side */}
            <div>
               <h1 className="text-6xl font-bold text-black">UtilTrack</h1>
                <div className="flex justify-center items-center gap-4 text-purple-500  py-6">
                    <Link><SiGmail className="text-4xl hover:text-violet-400"></SiGmail></Link>
                    <Link><SiTwitter className="text-4xl hover:text-violet-400"></SiTwitter></Link>
                    <Link><SiFacebook className="text-4xl hover:text-violet-400"></SiFacebook></Link>
                </div>
            </div>

            {/* right_side */}
            <div className="p-4">
               <h2 className="text-3xl text-black font-semibold"> Get in touch with UtilTrack</h2>
               <input placeholder="abc@gmail.com" className="border-0 border-b-2 outline-none w-full border-b-black py-4" type="email" name="" id="" />
               <Link><input className="btn btn-primary rounded-[50px] bg-violet-500 text-black font-medium border-0 w-[150px] h-[40px] shadow-xl hover:bg-violet-400 my-6" type="submit" value="Send Us Mail" /></Link>
            </div>

          </div>


        </div>
    );
};

export default Footer;