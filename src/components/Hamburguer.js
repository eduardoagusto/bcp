"use client"
import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/celoLogo.svg"

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className={`w-screen flex bg-[#252525] mt-2 md:mt-5${
            navbar ? "h-full" : ""
        }`}>
            <div className="px-4 w-full mx-auto md:mx-5 md:flex md:px-0 ">
                    <div className="flex justify-between">
                        <a className="mt-2 ml-2 md:mt-0 md:ml-0" href="#">
                            <Image className="w-10 lg:w-16"  src={Logo} alt="Logo BCP"/>			
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-[#00EA75] rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div
                        className={`flex-1 absolute justify-self-center pb-3 mt-8 md:relative md:flex md:justify-end md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                
                            <li className="text-white font-black w-20">
                                <a href="">Home</a>
                            </li>
                            <li className="text-white font-black w-20">
                                <a href="">Blog</a>
                            </li>
                            <li className="text-white font-black w-20">
                                <a href="">About US</a>
                            </li>
                            <li className="">
                                <a className="w-40 h-12 bg-[#00EA75] rounded-3xl items-center justify-center hidden lg:flex" href="#">
                                    <span className="text-white font-black">WHATSWAPP</span>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
}