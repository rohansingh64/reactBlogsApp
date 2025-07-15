import React, { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import Spinner from "./Spinner";
import Blog from "./Blog";

const Blogs = ({posts}) => {
   const {loading , darkMode} = useContext(MyContext);

   return (
      <div className={`flex flex-col justify-center items-center p-2 gap-y-12
      ${darkMode ? "bg-zinc-900" : "bg-white"}
      `}>
         {loading ? (
            <Spinner />
         ) : posts.length === 0 ? (
            <div className="text-3xl h-screen flex items-center text-emerald-400">OOPs No Blogs Available !</div>
         ) : (
            posts.map((post) => (
               <Blog post={post} key={post.id}/>
            ))
         )}
      </div>
   );
};

export default Blogs;
