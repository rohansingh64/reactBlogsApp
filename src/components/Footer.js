import React, { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

const Footer = () => {

   const { pageNo, totalPages, changePageonbtnHandler , darkMode } = useContext(MyContext);

   if (!totalPages || totalPages === 0) {
      return <div />;
   }

   return (
      <div className={`w-full border-t-[1px] fixed bottom-0
      ${darkMode ? "bg-zinc-950" : "bg-white"}
      ${darkMode ? "border-t-slate-50" : "border-t-slate-400"}
      ${darkMode ? "text-white" : "text-black"}
      
      `}>
         <div className="w-[48%] h-full small_one:w-[98%] small_two:w-[70%] small_three:w-[58%] mx-auto flex justify-between items-center px-6 py-1">
            <div>
               {pageNo > 1 && (
                  <button
                     onClick={() => changePageonbtnHandler(pageNo - 1)}
                     className={`px-2 py-0.5 border-2 border-slate-400 
                     rounded-md mr-1 active:scale-95
                     ${darkMode ? "bg-gray-800" : "bg-white"}
                     ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-400"}
                     "`}
                  >
                     Previous
                  </button>
               )}

               {pageNo < totalPages && (
                  <button
                     onClick={() => changePageonbtnHandler(pageNo + 1)}
                     className={`px-2 py-0.5 border-2 border-slate-400 
                     rounded-md ml-1 active:scale-95
                     ${darkMode ? "bg-gray-800" : "bg-white"}
                     ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-400"}
                     "`}
                  >
                     Next
                  </button>
               )}
            </div>

            <div className="font-medium flex gap-1">
               <span>Page</span>
               <span>{pageNo}</span>
               <span>of</span>
               <span>{totalPages}</span>
            </div>
         </div>
      </div>
   );
};

export default Footer;
