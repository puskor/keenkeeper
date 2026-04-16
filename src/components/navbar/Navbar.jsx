import React from 'react';
import { GoGraph } from 'react-icons/go';
import { IoHomeOutline, IoMenu } from 'react-icons/io5';
import { TiStopwatch } from 'react-icons/ti';
import { Link, NavLink } from 'react-router';
import logo from "../../assets/image/logo.png"
const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className='navbar container mx-auto'>
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost text-[24px] font-bold"><img src={logo} alt="" /></Link>
                </div>
                <div className="flex-none ">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hidden md:block'><NavLink className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : ""} to={"/"}><IoHomeOutline className='w-5 h-5' /><h1 className='text-[16px] font-semibold'>Home</h1></NavLink></li>
                        <li className='hidden md:block'>
                            <NavLink className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : ""} to={"/timeline"}><TiStopwatch className='w-5 h-5' /><h1 className='text-[16px] font-semibold'>Timeline</h1></NavLink >
                        </li>
                        <li className='hidden md:block'>
                            <NavLink className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : ""} to={"/status"}><GoGraph className='w-5 h-5' /><h1 className='text-[16px] font-semibold'>Status</h1></NavLink>
                        </li>
                        <li className='md:hidden relative'>
                            <details>
                                <summary><IoMenu className='w-5 h-5' /></summary>
                                {/* <ul className="bg-base-100 rounded-t-none p-2 "> */}
                                <ul className="absolute right-0 mt-2 bg-base-100 p-2 rounded shadow w-40">
                                    <li ><NavLink className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : ""} to={"/"}><IoHomeOutline className='w-5 h-5' /><h1 className='text-[16px] font-semibold'>Home</h1></NavLink></li>
                                    <li >
                                        <NavLink className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : ""} to={"/timeline"}><TiStopwatch className='w-5 h-5' /><h1 className='text-[16px] font-semibold'>Timeline</h1></NavLink >
                                    </li>
                                    <li >
                                        <NavLink className={({ isActive }) => isActive ? "bg-[#244D3F] text-white" : ""} to={"/status"}><GoGraph className='w-5 h-5' /><h1 className='text-[16px] font-semibold'>Status</h1></NavLink>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;