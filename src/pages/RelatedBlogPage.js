import React, { useContext, useEffect, useState } from "react";

import { baseRelatedPageUrl } from "../BaseUrl";
import { MyContext } from "../contexts/MyContext";
import { useNavigate, useLocation } from "react-router-dom";
import Blog from "../components/Blog";
import Blogs from "../components/Blogs";
import Spinner from "../components/Spinner";
import Header from "../components/Header";

const RelatedBlogPage = () => {
   const { loading, setLoading , darkMode } = useContext(MyContext);

   const [relatedBlogs, setRelatedblogs] = useState([]);

   const [currBlog, setCurrBlog] = useState(null);

   const navigation = useNavigate();

   async function fetchRelatedBlogsDetails(blogId) {
      const url = `${baseRelatedPageUrl}?blogId=${blogId}`;

      setLoading(true);

      try {
         const data = await fetch(url);

         const result = await data.json();

         setCurrBlog(result.blog);

         setRelatedblogs(result.relatedBlogs);
      } catch (error) {
         alert("error occured in fetching API");
         setCurrBlog(null);
         setRelatedblogs([]);
      }
      setLoading(false);
   }

   const location = useLocation();

   useEffect(() => {
      let blogId = location.pathname.split("/").at(-1);

      fetchRelatedBlogsDetails(blogId);
      // in 49 line warning occur so i disable wrning
      // eslint-disable-next-line
   }, [location.pathname]);

   return (
      <div className={`flex flex-col items-center
         ${darkMode ? "bg-zinc-950" : "bg-white"}
         ${darkMode ? "text-white" : "text-black"}
         `}
      >

         <Header />

         <div className={`w-[50%] min-h-screen small_one:w-[90%] small_two:w-[72%] small_three:w-[66%] 
            py-20 px-8 small_one:px-1 
            ${darkMode ?"shadow-x-only-dark" :"shadow-x-only"}
            ${darkMode ? "bg-zinc-900" : "bg-white"}
            `}
         >
            <div>
               <button className={`text-base rounded-md border-2
               ${darkMode ? "bg-gray-800" : "bg-white"}
               border-slate-400 py-1 px-4
               ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-400"}
               `} 
               
               onClick={() => navigation(-1)}>
                  Back
               </button>
            </div>
            {loading ? (
               <Spinner />
            ) : (
               <div>
                  <div className="p-2 my-5">
                     {currBlog ? (
                        <Blog post={currBlog} />
                     ) : (
                        <div>Current Blog Not available</div>
                     )}
                  </div>

                  <h1 className="text-3xl font-extrabold mt-12 mb-7">Related Blogs</h1>

                  <Blogs posts={relatedBlogs} />
               </div>
            )}
         </div>
      </div>
   );
};

export default RelatedBlogPage;
