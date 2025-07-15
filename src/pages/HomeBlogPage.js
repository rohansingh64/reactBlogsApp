import React, { useContext } from "react";

import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MyContext } from "../contexts/MyContext";

const HomeBlogPage = () => {
   const { posts , darkMode } = useContext(MyContext);

   return (
      <div className={`flex flex-col items-center
      ${darkMode ? "bg-zinc-950" : "bg-white"}
      `}>
         <Header />

         <div
          className={`w-[50%] min-h-screen small_one:w-[90%] small_two:w-[72%] small_three:w-[66%] 
          py-20 px-8 small_one:px-1
          ${darkMode ?"shadow-x-only-dark" :"shadow-x-only"}
          ${darkMode ? "bg-zinc-900" : "bg-white"}
          `}
         >
            <Blogs posts={posts} />
         </div>

         <Footer />
      </div>
   );
};

export default HomeBlogPage;
