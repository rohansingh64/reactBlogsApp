import React, { useContext } from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";

const TagBlogPage = () => {
   const { posts , darkMode } = useContext(MyContext);

   const location = useLocation();

   const navigation = useNavigate();

   const tag = decodeURIComponent(location.pathname.split("/").at(-1)); 
   
   // decoding because in url spaces converted into %20 so for taking value from url path use decoding
   // so that in ui page see space not %20 etc

   return (
      <div className={`flex flex-col items-center
      ${darkMode ? "bg-zinc-950" : "bg-white"}
      ${darkMode ? "text-white" : "text-black"}
      `}>
         <Header />

         <div className={`w-[50%] min-h-screen small_one:w-[90%] small_two:w-[72%] small_three:w-[66%] 
         py-20 px-8 small_one:px-1 
         ${darkMode ?"shadow-x-only-dark" :"shadow-x-only"}
         ${darkMode ? "bg-zinc-900" : "bg-white"}
         `}>
            
            <div className="flex gap-x-3 items-center flex-wrap mb-5">

               <button className={`text-base rounded-md border-2
               ${darkMode ? "bg-gray-800" : "bg-white"}
               border-slate-400 py-1 px-4
               ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-400"}
               `} 
               
               onClick={() => navigation(-1)}>
                  Back
               </button>
               
               <p className="text-base font-bold">Blogs Tagged <span className="text-blue-700"><pre className="inline"> #</pre>{tag}</span></p>

            </div>

            <Blogs posts={posts} />

         </div>

         <Footer />
      </div>
   );
};

export default TagBlogPage;
