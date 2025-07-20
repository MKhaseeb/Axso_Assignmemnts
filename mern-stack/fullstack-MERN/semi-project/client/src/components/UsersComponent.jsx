// import { React, useEffect, useState } from 'react'
// import axios from 'axios';
import pfp from "../assets/avatar-1.jpg";
import useFeatchUser from '../hooks/useFeatchUser';

const UsersComponent = () => {
   const {users} = useFeatchUser()

    return (
<div className="relative flex flex-col mb-4 bg-white shadow-sm border border-slate-200  max-w-auto w-full">
                        <div className="p-4">
                <h4 className="flex items-center font-medium ">
                    <span>Recent Users</span>
                </h4>
                </div>
            <hr className="h-px bg-gray-100 border-0 mt-2 mb-4" />
            {users.map((user, index) => {
                const date = new Date(user.createdAt);
                const options = { year: 'numeric', day: 'numeric', month: 'long', };
                const formattedDate = date.toLocaleDateString('en-US', options);

                return (
                    <tr key={index}>
                        
                        <div className='hover:bg-gray-100'>
                            <div className="flex items-center justify-between p-1 w-full space-x-34 ">

                                <div className="flex items-center gap-12 p-2">
                                    <img className="w-12" src={pfp} alt="pfp" />
                                    <div className="flex flex-col font-thin ">
                                        <span>{user.firstName} {user.lastName}</span>
                                        <p className="text-gray-500 font-normal">Lorem Ipsum is simply dummy text.. </p>
                                    </div>
                                </div>

                                    <p className="text-sm text-gray-500 p-2">{formattedDate}</p>
                                <div className="flex items-center p-2 s ">

                                    <div className="flex gap-1">
                                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-small rounded-lg text-sm px-3 py-1 text-center">
                                            Reject
                                        </button>
                                        <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-small rounded-lg text-sm px-5 py-1 text-center">
                                            Accept
                                        </button>
                                    </div>
                                </div>

                            </div>
                        <hr className="h-px bg-gray-100 border-0 mt-2 mb-4" />
                        </div>
                    </tr>
                );
            })}
        </div>
    );
}


export default UsersComponent