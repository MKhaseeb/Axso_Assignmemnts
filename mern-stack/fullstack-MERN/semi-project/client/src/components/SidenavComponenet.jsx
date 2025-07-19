import { React, useState } from "react";
import Logo from "../assets/logo-white.svg";
import {
    CiLogin,
    CiLock,
    CiHome,
    CiText,
    CiPalette,
    CiPen,
    CiMenuFries,
} from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { BsLayoutSidebar } from "react-icons/bs";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import BoxsComponent from "./BoxsComponent";
import SocialComponent from "./SocialComponent";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import RatingComponent from "./RatingComponent";
import { Link } from "react-router-dom";
import UsersComponent from "./usersComponent";
import NavComponent from "./NavComponent";

const SidenavComponenet = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const [toggleLevel, setToggleLevel] = useState(false);
    const [toggleLevel2, setToggleLevel2] = useState(false);

    const handeltoggel = () => {
        setToggleNav(!toggleNav);
    };
    return (
        <>
            <div>
                <Link to={"/"}></Link>
            </div>
            <div>
                {toggleNav && (
                    <aside
                        className={`w-80 text-white h-screen fixed top-0 left-0 overflow-y-auto z-60
                            transform transition-transform duration-800 ease-in-out
                            ${toggleNav ? "translate-x-0" : "-translate-x-full"}`}
                        style={{ backgroundColor: "#3f4d67" }}
                    >
                        <nav class="p-4 ">
                            <img src={Logo} alt="Logo" />
                            <br />
                            <h6 style={{ fontSize: "11px" }}>NAVIGATION</h6>
                            <ul>
                                <li class="mb-2">
                                    <a
                                        href="#"
                                        class="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700"
                                    >
                                        <CiHome />
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                            </ul>
                            <h6 style={{ fontSize: "11px" }}>UI COMPONENTS</h6>
                            <ul>
                                <li class="mb-2">
                                    <a
                                        href="#"
                                        class="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700"
                                    >
                                        <CiPen />
                                        <span>Color</span>
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a
                                        href="#"
                                        class="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700"
                                    >
                                        <CiText />
                                        <span>Typography</span>
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a
                                        href="#"
                                        class="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700"
                                    >
                                        <CiPalette />
                                        <span>Icons</span>
                                    </a>
                                </li>
                            </ul>
                            <h6 style={{ fontSize: "11px" }}>PAGES</h6>
                            <ul>
                                <li class="mb-2">
                                    <Link
                                        className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700"
                                        to={"/login"}
                                    >
                                        <CiLock /> <span>Login</span>
                                    </Link>
                                </li>
                                <li class="mb-2">
                                    <Link
                                        className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700"
                                        to={"/register"}
                                    >
                                        <AiOutlineUserAdd />
                                        <span>Register</span>
                                    </Link>
                                </li>
                            </ul>
                            <h6 style={{ fontSize: "11px" }}>PAGES</h6>
                            <ul>
                                <div>
                                    <button
                                        className="w-auto flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700 cursor-pointer p-4"
                                        onClick={() => setToggleLevel(!toggleLevel)}
                                    >
                                        <CiMenuFries />
                                        Menu levels <IoIosArrowForward />
                                    </button>
                                    {toggleLevel && (
                                        <div className="ml-2">
                                            <ul>
                                                <li class="mb-2">
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 rounded hover:bg-gray-700"
                                                    >
                                                        Level 1
                                                    </a>
                                                </li>
                                                <li class="mb-2">
                                                    <button
                                                        className="block py-2 px-4 rounded hover:bg-gray-700 cursor-pointer"
                                                        onClick={() => setToggleLevel2(!toggleLevel2)}
                                                    >
                                                        Level 2
                                                    </button>
                                                    {toggleLevel2 && (
                                                        <div>
                                                            <li class="mb-2">
                                                                <a
                                                                    href="#"
                                                                    class="block py-2 px-4 rounded hover:bg-gray-700"
                                                                >
                                                                    Level 2.1
                                                                </a>
                                                            </li>
                                                            <li class="mb-2">
                                                                <a
                                                                    href="#"
                                                                    class="block py-2 px-4 rounded hover:bg-gray-700"
                                                                >
                                                                    Level 2.2
                                                                </a>
                                                            </li>
                                                            <li class="mb-2">
                                                                <a
                                                                    href="#"
                                                                    class="block py-2 px-4 rounded hover:bg-gray-700"
                                                                >
                                                                    Level 2.3
                                                                </a>
                                                            </li>
                                                        </div>
                                                    )}
                                                </li>
                                                <li class="mb-2">
                                                    <a
                                                        href="#"
                                                        class="block py-2 px-4 rounded hover:bg-gray-700"
                                                    >
                                                        Level 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <li class="mb-2">
                                    <a
                                        href="#"
                                        class="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700"
                                    >
                                        <BsLayoutSidebar />
                                        Sample page
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                )}
            </div>
            <div
                className={`p-4 transition-all duration-300 ${toggleNav ? "ml-80" : "ml-16"
                    }`}
            >
                <NavComponent toggleNav={toggleNav} handeltoggel={handeltoggel} />
                <div className="font-thin p-4">
                    <h1 className="font-medium ">Default</h1>
                    <p className="flex items-center text-gray-500 gap-2 text-sm">
                        <a href="/" className="hover:text-blue-600">Home</a>
                        <span>&gt;</span>
                        <a href="/dashboard" className="hover:text-blue-600">Dashboard</a>
                        <span>&gt;</span>
                        <p>Default</p>
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-3 p-2">
                    <div>
                        <BoxsComponent
                            toggleNav={toggleNav}
                            title="Daily Sales"
                            amount="$ 234.45"
                            progress={70}
                            iconColor="#10b981"
                            Icon={FaArrowUp}
                        />
                    </div>
                    <div>
                        <BoxsComponent
                            toggleNav={toggleNav}
                            title="Monthly Sales"
                            amount="$ 2,942.32"
                            progress={55}
                            iconColor="red"
                            Icon={FaArrowDown}
                        />
                    </div>
                    <div>
                        <BoxsComponent
                            toggleNav={toggleNav}
                            title="Yearly Sales"
                            amount="$ 8,638.32"
                            progress={90}
                            iconColor="#10b981"
                            Icon={FaArrowUp}
                        />
                    </div>

                    <div>
                        <SocialComponent
                            toggleNav={toggleNav}
                            target={"35,098"}
                            duration={"350"}
                            addsStatus={"+7.2%"}
                            statusColor={"#A7F3D0"}
                            amount="12,281"
                            progress={90}
                            progress2={32}
                            gradient1={"#3B82F6"}
                            gradient2={"#10B981"}
                            gradient3={"#6446ecff"}
                            gradient4={"#a1b7e7ff"}
                            iconColor="#0d679bff"
                            Icon={FaFacebookF}
                        />
                    </div>
                    <div>
                        <SocialComponent
                            toggleNav={toggleNav}
                            target={"34,185"}
                            duration={"800"}
                            addsStatus={"+6.2%"}
                            statusColor={"#9b4cf5ff"}
                            amount="11,200"
                            progress={90}
                            progress2={32}
                            gradient1={"#10B981"}
                            gradient2={"#10B981"}
                            gradient3={"#579ff1ff"}
                            gradient4={"#579ff1ff"}
                            iconColor="#3da0daff"
                            Icon={FaTwitter}
                        />
                    </div>
                    <div>
                        <SocialComponent
                            toggleNav={toggleNav}
                            target={"25,998"}
                            duration={"900"}
                            addsStatus={"+5.9%"}
                            statusColor={"#9b4cf5ff"}
                            amount="10,500"
                            progress={90}
                            progress2={32}
                            gradient1={"#3B82F6"}
                            gradient2={"#10B981"}
                            gradient3={"#6446ecff"}
                            gradient4={"#a1b7e7ff"}
                            iconColor="#d35a2aff"
                            Icon={FaGooglePlusG}
                        />
                    </div>

                    <div className="col-span-1">
                        <RatingComponent />
                    </div>
                    <div className="col-span-2">
                        <UsersComponent />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidenavComponenet;
