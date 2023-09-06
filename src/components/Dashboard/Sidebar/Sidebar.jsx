import React from 'react';
import './Sidebar.css';
import { FaPowerOff, FaUser } from 'react-icons/fa';
import { MdDashboard, MdExtension, MdLoyalty, MdOutlineSupportAgent, MdExpandMore } from 'react-icons/md';
import { FcNext } from 'react-icons/fc';
import { BsWechat } from 'react-icons/bs';
import BgImage from '../../Images/header.png';
import { Image } from 'react-bootstrap';
import userAvatar from '..//../Images/pic.jpg';
import logoImage from '..//../Images/logo.png';
import companyImg from '../../Images/company.jpg';
function Sidebar() {
    const iconStyle = {
        color1: '#2596be',
        color2: '#8fbaff',
    };

    return (
        <div className="sidebar">

            <div className="background-image" style={{ backgroundImage: `url(${BgImage})` }}>

                <div className="company-avatar">
                    <Image
                        src={companyImg}
                        roundedCircle
                        width={30}
                        height={30}
                        alt="Company Avatar"

                    />
                    <span className="company-name">XYZ Enterprise Pvt. Ltd.</span>
                    &nbsp;
                    <MdExpandMore />
                </div>



            </div>

            <div className='box'>
                <div className='top-box'>
                    <br />
                    <div className="user-avatar">
                        <Image
                            src={userAvatar}
                            roundedCircle
                            width={50}
                            height={50}
                            alt="User Avatar"
                        />
                    </div>
                    <br />

                    <div className="user-info">
                        <div className="user-name-wrapper">
                            <span className="user-name">Ram Mohan</span>
                            <FcNext className="next-icon" style={{ color: iconStyle.color1 }} />
                        </div>
                        <span className="user-email">rammohan2@gmail.com</span>
                    </div>
                    <br />
                </div>


                <div className="sidebar-icons">
                    <br />
                    <p>

                        <MdDashboard style={{ color: iconStyle.color1 }} />
                        &nbsp; &nbsp;
                        <span>Dashboard</span>
                    </p>
                    <p>

                        <MdLoyalty style={{ color: iconStyle.color1 }} />
                        &nbsp; &nbsp;
                        <span>Perks</span>
                    </p>
                    <p>

                        <MdExtension style={{ color: iconStyle.color1 }} />
                        &nbsp; &nbsp;
                        <span>Addons</span>
                    </p>
                    <p>

                        <BsWechat
                            style={{ color: iconStyle.color1 }} />
                        &nbsp; &nbsp;
                        <span>FAQ</span>
                    </p>

                    <p>

                        <MdOutlineSupportAgent style={{ color: iconStyle.color1 }} />
                        &nbsp; &nbsp;
                        <span>Support </span>
                    </p>
                    <br />
                    <br />
                    <br />

                </div>

                <div className="logout-button">
                    <br />
                    <span className="logout-text" style={{ color: iconStyle.color1 }}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Logout &nbsp;
                        <FaPowerOff className="logout-icon" style={{ color: iconStyle.color1 }} /> </span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;