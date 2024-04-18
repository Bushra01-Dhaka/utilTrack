import { Outlet } from 'react-router-dom';
import Navbar from '../UsedComponent/Navbar';
import Footer from '../UsedComponent/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;