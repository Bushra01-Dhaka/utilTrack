
import img from "../assets/3rd_floor/UtilTrack-UI/features1.jpg"
import { FaFileInvoiceDollar } from "react-icons/fa";
import { LiaFunnelDollarSolid } from "react-icons/lia";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";

const Features = () => {
    return (
        <div className="bg-violet-300 min-h-[100vh]">
             {/* <div className="hero-content text-center flex justify-center">
                <img src={features_img} alt="features" />
             </div> */}

             <div className="flex flex-col lg:flex-row items-center gap-8 cursor-pointer">
                 {/* left */}
                <div className=" flex-1 space-y-10 text-white font-semibold py-8 lg:py-0 p-6">
                    <div className="flex hover:ml-8 justify-center items-center gap-4">
                        <FaFileInvoiceDollar className="text-6xl text-black"></FaFileInvoiceDollar>
                        <p className="text-2xl">Effortless Bill Management</p>
                    </div>

                    <div className="flex hover:ml-8 justify-center items-center gap-4">
                        <LiaFunnelDollarSolid  className="text-6xl text-black"></LiaFunnelDollarSolid >
                        <p className="text-2xl">Customizable Filtering</p>
                    </div>

                    <div className="flex hover:ml-8 justify-center items-center gap-4">
                        <MdOutlineAutoGraph  className="text-6xl text-black"></MdOutlineAutoGraph >
                        <p className="text-2xl">Insightful Analysis</p>
                    </div>

                    <div className="flex hover:ml-8 justify-center items-center gap-4">
                        <FaDatabase  className="text-6xl text-black"></FaDatabase >
                        <p className="text-2xl">Secure Data Storage</p>
                    </div>
                    

                </div>
                 {/* right */}
                 <div className="">
                   <img className="lg:w-[600px] h-[100vh] object-cover mx-auto" src={img} alt="" />
                 </div>
             </div>





        </div>
    );
};

export default Features;