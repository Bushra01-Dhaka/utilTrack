import { Outlet } from 'react-router-dom';
import Navbar from '../UsedComponent/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default MainLayout;