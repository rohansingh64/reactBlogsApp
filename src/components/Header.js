import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";

const Header = () => {
   const { darkMode, setDarkMode } = useContext(MyContext);

   return (
      <div
         className={`w-full flex justify-evenly items-center py-2 
    shadow-md mb-5 fixed top-0 z-10 
    ${darkMode ? "bg-zinc-950" : "bg-white"}
    ${darkMode ? "text-white" : "text-black"}
    ${darkMode ? "shadow-white/15" : "shadow-md"} 
    `}
      >
         <header className="font-extrabold text-3xl">
            <NavLink to={"/"}>MY BLOGS</NavLink>
         </header>
         <div>
            <button
               onClick={() => {
                  setDarkMode(!darkMode);
               }}
               className={`
                  px-2 py-0.5 border-2 border-slate-400 
                  rounded-md active:scale-95
                  ${darkMode ? "bg-gray-800" : "bg-white"} 
                  ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-400"}
                  
               `}
            >
               {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
         </div>
      </div>
   );
};

export default Header;
