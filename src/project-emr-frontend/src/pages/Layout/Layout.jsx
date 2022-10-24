import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

import "./Layout.css";

const Layout = ({ children }) => {
    return <div className="main">
        {/* <Sidebar /> */}
        <div className="mainContainer">
            <Navbar />
            <div className="content">
                { children }
            </div>
        </div>
    </div>
};

export default Layout