import React from 'react';

const SocialComponent = ({ amount, progress, iconColor, Icon }) => {
    return (
        <div className="relative flex flex-col mb-4 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
            <div className="p-4">
                <h4 className="flex items-center">
                </h4>
                <br />
                <h1 className="font-thin flex items-center gap-5 text-[30px]">
                    {Icon && <Icon style={{ color: iconColor }} />}
                    <span>{amount}</span>
                </h1>
                <br />
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-white-700">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2.5 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};


export default SocialComponent;
