import React from 'react'
import { FaStar } from "react-icons/fa";

const RatingComponent = () => {
    return (
        <div className="relative flex flex-col mb-4 bg-white shadow-sm border border-slate-200 w-full">
            <div className="p-4">
                <h4 className="flex items-center font-medium ">
                    <span>Rating</span>
                </h4>
            </div>
                <hr className="h-px bg-gray-100 border-0 mt-2 mb-4" />
            {/* <h1>Rating</h1> */}
            <div className="p-4">
                <h1 className="flex items-center gap-2">
                    <span className="text-[50px] font-thin">4.7</span>
                    <FaStar style={{ color: "yellow" }} />
                </h1>
                <div>
                    <div>
                        <h1 className="flex items-center  gap-3 p-4 ">
                            <FaStar style={{ color: "yellow" }} />
                            <span className="text-[23px] font-thin">5</span>
                        </h1>
                        {/* <span className="text-[23px] font-thin flex items justify-end-safe ">384</span> */}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full"
                            style={{ width: `90%` , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
                        ></div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="flex items-center  gap-3 p-4 ">
                            <FaStar style={{ color: "yellow" }} />
                            <span className="text-[23px] font-thin">4</span>
                        </h1>
                        {/* <span className="text-[23px] font-thin flex items justify-end-safe ">384</span> */}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full"
                            style={{ width: `70%` , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
                        ></div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="flex items-center  gap-3 p-4 ">
                            <FaStar style={{ color: "yellow" }} />
                            <span className="text-[23px] font-thin">3</span>
                        </h1>
                        {/* <span className="text-[23px] font-thin flex items justify-end-safe ">384</span> */}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full"
                            style={{ width: `60%`, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
                        ></div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="flex items-center  gap-3 p-4 ">
                            <FaStar style={{ color: "yellow" }} />
                            <span className="text-[23px] font-thin">2</span>
                        </h1>
                        {/* <span className="text-[23px] font-thin flex items justify-end-safe ">384</span> */}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full "
                            style={{ width: `20%` , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}
                        ></div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="flex items-center  gap-3 p-4 ">
                            <FaStar style={{ color: "yellow" }} />
                            <span className="text-[23px] font-thin">1</span>
                        </h1>
                        {/* <span className="text-[23px] font-thin flex items justify-end-safe ">384</span> */}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full"
                            style={{ width: `0%`, boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RatingComponent