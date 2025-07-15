import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../contexts/MyContext";

const Blog = ({ post }) => {
   const { darkMode } = useContext(MyContext);

   return (
      <div
         className={`  
         ${darkMode ? "bg-neutral-800" : "bg-zinc-200"}

         ${darkMode ? "text-zinc-200" : "text-black"}

         ${darkMode ? "shadow-[0_8px_8px_rgba(255,255,255,0.2)]" : "shadow-[0_10px_8px_rgba(0,0,0,0.4)]"}
         
         hover:scale-[1.025] transition-all duration-700 p-4 rounded-lg`}
      >
         
         <p className={`text-sm font-bold my-1.5 leading-5 underline hover:text-teal-900`}>
            <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
         </p>

         <p className={`text-base my-1.5`}>
            By <span className="italic">{post.author}</span> on{" "}
            <span className="underline font-bold hover:text-teal-900">
               <NavLink to={`/categories/${post.category}`}>
                  {post.category}
               </NavLink>
            </span>
         </p>

         <p className={`text-base mt-1.5`}>
            Posted on <span>{post.date}</span>
         </p>

         <p className={`text-base mt-5 mb-3`}>{post.content}</p>

         <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag, index) => (
               <span
                  key={index}
                  className="text-blue-700 font-bold underline text-sm hover:text-teal-900"
               >
                  <NavLink to={`/tags/${tag}`}>#{tag}</NavLink>
               </span>
            ))}
         </div>
      </div>
   );
};

export default Blog;
