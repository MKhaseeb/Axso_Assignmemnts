import React from 'react'
import { FaStar } from "react-icons/fa";

const RatingComponent = () => {
    return (
        <div className="relative flex flex-col mb-4 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
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
                        style={{ width: `90%` }}
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
                        style={{ width: `70%` }}
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
                        style={{ width: `60%` }}
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
                        style={{ width: `20%` }}
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
                        style={{ width: `0%` }}
                    ></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RatingComponent