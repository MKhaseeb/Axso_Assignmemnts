import { React, useState } from "react";
import close from "../assets/close.png";
import menu from "../assets/menu.png";
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
import { FaFacebookF ,FaTwitter, FaGooglePlusG   } from "react-icons/fa";
import RatingComponent from "./RatingComponent";
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
                <img
                    className={`w-[25px] h-[25px] absolute top-10 z-[10] cursor-pointer ${toggleNav ? "left-70" : "left-5"
                        }`}
                    onClick={handeltoggel}
                    src={toggleNav ? close : menu}
                />
                {toggleNav && (
                    <aside
                        class="w-80 text-white h-screen fixed top-0 left-0 overflow-y-auto "
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
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700"
                                    >
                                        <CiLock /> <span>Login</span>
                                    </a>
                                </li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-700"
                                >
                                    <AiOutlineUserAdd /> <span>Register</span>
                                </a>
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
            <div className={`p-4 ${toggleNav ? "ml-80" : "ml-16"}`}>
                <div className="flex w-full gap-4">
                    <div className="w-1/3">
                        <BoxsComponent
                            toggleNav={toggleNav}
                            title="Daily Sales"
                            amount="$ 234.45"
                            progress={70}
                            iconColor="#10b981"
                            Icon={FaArrowUp}
                        />
                    </div>

                    <div className="w-1/3">
                        <BoxsComponent
                            toggleNav={toggleNav}
                            title="Monthly Sales"
                            amount="$ 2,942.32"
                            progress={55}
                            iconColor="red"
                            Icon={FaArrowDown}
                        />
                    </div>

                    <div className="w-1/3">
                        <BoxsComponent
                            toggleNav={toggleNav}
                            title="Yearly Sales"
                            amount="$ 8,638.32"
                            progress={90}
                            iconColor="#10b981"
                            Icon={FaArrowUp}
                        />
                    </div>
                </div>
            </div>
            <div className={`p-4 ${toggleNav ? "ml-80" : "ml-16"}`}>
                <div className="flex w-full gap-4">
                    <div className="w-1/3">
                        <SocialComponent
                            toggleNav={toggleNav}
                            target={"35" + "," + "098"}
                            duration={"350"}
                            addsStatus={"+7.2%"}
                            statusColor={"#A7F3D0"}
                            amount="12,281"
                            progress={90}
                            progress2={32}
                            gradient1 = {"#3B82F6"}
                            gradient2 = {"#10B981"}
                            gradient3 = {"#6446ecff"}
                            gradient4 = {"#a1b7e7ff"}
                            iconColor="#0d679bff"
                            Icon={FaFacebookF}
                        />
                    </div>
                    <div className="w-1/3">
                        <SocialComponent
                            toggleNav={toggleNav}
                            target={"34" + "," + "185"}
                            duration={"800"}
                            addsStatus={"+6.2%"}
                            statusColor={"#9b4cf5ff"}
                            amount="11,200"
                            progress={90}
                            progress2={32}
                            gradient1 = {"#10B981"}
                            gradient2 = {"#10B981"}
                            gradient3 = {"#579ff1ff"}
                            gradient4 = {"#579ff1ff"}

                            iconColor="#3da0daff"
                            Icon={FaTwitter}
                        />
                    </div>
                    <div className="w-1/3">
                        <SocialComponent
                            toggleNav={toggleNav}
                            target={"25" + "," + "998"}
                            duration={"900"}
                            addsStatus={"+5.9%"}
                            statusColor={"#9b4cf5ff"}
                            amount="10,500"
                            progress={90}
                            progress2={32}
                            gradient1 = ""
                            gradient2 = ""
                            gradient3 = ""
                            gradient4 = ""

                            iconColor="#d35a2aff"
                            Icon={FaGooglePlusG }
                        />
                    </div>
                </div>
            <div className="w-4/10"> 
            
            <RatingComponent/>
            </div>
            </div>

        </>
    );
};

export default SidenavComponenet;
