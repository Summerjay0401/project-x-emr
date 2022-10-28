import { useState } from "react";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import { Outlet } from "react-router-dom";


import "./Layout.css";

const Layout = ({ children }) => {

    const [isSidebar, setIsSidebar] = useState(true);
    
    return <div className="main">
        <Sidebar isSidebar={isSidebar} />
        <div className="mainContainer">
            <Navbar setIsSidebar={setIsSidebar} />
            <div className="content">
                <Outlet />
            </div>
        </div>
    </div>
};

export default Layout