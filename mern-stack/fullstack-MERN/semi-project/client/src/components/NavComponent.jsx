import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import user from "../assets/people.png";
import bell from "../assets/bell.png";
import gear from "../assets/settings.png";
import sun from "../assets/sun.png";
import search from "../assets/search.png";
import pfp from "../assets/avatar-1.jpg";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { CiUser, CiLock, CiPower } from "react-icons/ci";
import { PiHeadset } from "react-icons/pi";
import { IoMdLogOut } from "react-icons/io";
import close from "../assets/close.png";
import menu from "../assets/menu.png";

const NavComponent = ({ toggleNav, handeltoggel }) => {
    const [toggleMode, setTogglMode] = useState(false);
    const [toggleSettings, setTogglSettings] = useState(false);
    const [toggleProfile, setToggleProfile] = useState(false);


    const handelMode = () => {
        setTogglMode(prev => {
            const newVal = !prev;
            if (newVal) {
                setTogglSettings(false);
                setToggleProfile(false);
            }
            return newVal;
        });
    };

    const handelSettings = () => {
        setTogglSettings(prev => {
            const newVal = !prev;
            if (newVal) {
                setToggleProfile(false);
                setTogglMode(false);
            }
            return newVal;
        });
    };

    const handelProfile = () => {
        setToggleProfile(prev => {
            const newVal = !prev;
            if (newVal) {
                setTogglMode(false);
                setTogglSettings(false);
            }
            return newVal;
        });
    };


    return (
        <nav
            style={{ backgroundColor: "rgba(240, 244, 247, 0.3)" }}
            className="sticky top-0 left-0 right-0 backdrop-blur-lg z-50 w-full fixed"

        >
            <div class=" flex flex-wrap items-center justify-between mx-auto p-4 ">
                <div className="flex items-center gap-4 relative">
                    <img
                        className={`w-[25px] h-[25px] cursor-pointer ${toggleNav ? "left-70" : "left-5"
                            }`}
                        onClick={handeltoggel}
                        src={toggleNav ? close : menu}
                        alt="menu"
                    />
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className="w-[24px] h-[24px]" src={search} alt="search" />
                    </a>
                </div>
                <div class="hidden w-full md:block md:w-auto">
                    <ul class="flex justify-items-end p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                        <li></li>
                        <div className="relative inline-block">
                            <img
                                className={`w-[24] h-[24px] z-[10] cursor-pointer ${toggleMode ? "left-70" : "left-5"
                                    }`}
                                onClick={handelMode}
                                src={toggleMode ? sun : sun}
                                alt="sun"
                            />
                            {toggleMode && (
                                <div className="absolute top-[calc(100%+8px)] right-0 bg-white shadow-sm border border-slate-200 rounded-lg w-40 z-20 p-2 text-gray-700 font-thin">
                                    <ul className="flex flex-col gap-2">
                                        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                            <IoMoonOutline />
                                            <span>Dark Mode</span>
                                        </li>
                                        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                            <IoSunnyOutline />
                                            <span>Light Mode</span>
                                        </li>
                                        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                            <GoGear />
                                            <span>System</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <li>
                            <div className="relative inline-block">
                                <img
                                    className={`w-[24] h-[24px] z-[10] cursor-pointer ${toggleSettings ? "left-70" : "left-5"
                                        }`}
                                    onClick={handelSettings}
                                    src={toggleSettings ? gear : gear}
                                    alt="gear"
                                />
                                {toggleSettings && (
                                    <div className="absolute top-[calc(100%+8px)] right-0 bg-white shadow-sm border border-slate-200 rounded-lg w-40 z-20 p-2 font-thin text-gray-700 ">
                                        <ul className="flex flex-col gap-2 ">
                                            <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                                <CiUser />
                                                <span>Profile</span>
                                            </li>
                                            <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded ">
                                                <GoGear />
                                                <span>Settings</span>
                                            </li>
                                            <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                                <PiHeadset />
                                                <span>Support</span>
                                            </li>
                                            <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                                <CiLock />
                                                <span>Look Screen</span>
                                            </li>
                                            <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                                <CiPower />
                                                <span>Logout</span>
                                            </li>
                                        </ul>
                                    </div>
                                )}

                            </div>
                        </li>
                        <li>
                            <img className="w-[24] h-[24px]" src={bell} alt="bell" />
                        </li>
                        <div className="relative inline-block">
                            <img
                                className={`w-[24] h-[24px] z-[10] cursor-pointer ${toggleProfile ? "left-70" : "left-5"
                                    }`}
                                onClick={handelProfile}
                                src={toggleSettings ? user : user}
                                alt="bell"
                            />

                            {toggleProfile && (
                                <div className="absolute top-[calc(100%+8px)] right-0 bg-white shadow-sm border border-slate-200 rounded-lg w-80 z-20 font-thin text-gray-700">


                                    <div className="flex flex-row items-center gap-3 text-white bg-sky-500 p-4 rounded-t-lg">
                                        <img className="w-13 rounded-full" src={pfp} alt="pfp" />
                                        <div className="flex flex-col font-normal">
                                            <span>Mohammad Khaseeb 🖖</span>
                                            <p className="font-normal">Mkhaseeb84@gmail.com</p>
                                        </div>
                                    </div>

                                    <ul className="flex flex-col gap-2 p-4">
                                        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                            <CiUser />
                                            <span>Profile</span>
                                        </li>
                                        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                            <GoGear />
                                            <span>Settings</span>
                                        </li>
                                        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
                                            <PiHeadset />
                                            <span>Support</span>
                                        </li>
                                    </ul>
                                    <div class="flex justify-center p-2">
                                        <button type="button" class="flex items-center text-white bg-sky-500 hover:bg-sky-600 font-medium rounded-sm text-sm px-23 py-2.5 me-2 mb-2">
                                            <IoMdLogOut /> Logout
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavComponent;
