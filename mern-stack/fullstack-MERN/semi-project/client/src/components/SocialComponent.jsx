import React from "react";

const SocialComponent = ({
    amount,
    progress,
    iconColor,
    Icon,
    progress2,
    target,
    duration,
    addsStatus,
    statusColor,
    gradient1,
    gradient2,
    gradient3,
    gradient4,
}) => {
    return (
        <div className="relative flex flex-col mb-4 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
            <div className="p-4">
                <div className="flex items-center justify-between text-[30px]  mb-4">
                    {Icon && <Icon style={{ color: iconColor }} />}
                    <span>{amount}</span>
                </div>
                <div className="flex items justify-end  gap-1">
                    <p className=" text-2xl" style={{ color: `${statusColor}` }}>
                        {addsStatus}{" "}
                    </p>
                    <p className="text-gray-500 text-2xl">Total Likes</p>
                </div>
                <hr className="h-px bg-gray-100 border-0 mt-2 mb-4" />

                <div className="flex gap-4">
                    <div className="flex flex-col items-center w-[45%]">
                        <p className="mb-2 text-gray-500">Target: {target}</p>
                        <div className="bg-gray-200 rounded-full h-2.5 dark:bg-white-700 w-full">
                            <div
                                className="h-2.5 rounded-full"
                                style={{
                                    background: `linear-gradient(to right, ${gradient1}, ${gradient2})`,
                                    width: `${progress}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[45%]">
                        <p className="mb-2 text-gray-500">Duration: {duration}</p>
                        <div className="bg-gray-200 rounded-full h-2.5 dark:bg-white-700 w-full">
                            <div
                                className="h-2.5 rounded-full"
                                style={{
                                    background: `linear-gradient(to right, ${gradient3}, ${gradient4})`,
                                    width: `${progress2}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialComponent;
