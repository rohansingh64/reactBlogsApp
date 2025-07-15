import React, { createContext, useState } from "react";


import { baseUrl } from "../BaseUrl";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

function MyProvider({ children }) {
   //  all data [variables & functions] that is need to be send

   const [darkMode,setDarkMode] = useState(false);

   const [totalPages, setTotalPages] = useState(0);

   const [loading, setLoading] = useState(false);

   const [posts, setPosts] = useState([]);

   const [pageNo,setPageNo] = useState(1);

   const navigation = useNavigate();


   async function fetchBlogsDetails(page = 1,tag = null,category = null) {

      setLoading(true);

      let url = `${baseUrl}?page=${page}`;


      if(tag){
         url += `&tag=${tag}`;
      }

      if(category){
         url += `&category=${category}`;
      }

      try {
         let data = await fetch(url);

         let result = await data.json();

         setPageNo(result.page);

         setTotalPages(result.totalPages);

         setPosts(result.posts);
      } catch (error) {
         alert("error occured in fetching API");

         setPageNo(1);

         setTotalPages(0);

         setPosts([]);
      }

      setLoading(false);
   }

   function changePageonbtnHandler(p) {
      setPageNo(p);
      navigation({search:`?page=${p}`});
   }

   const SendingValues = {
      totalPages,
      setTotalPages,
      pageNo,
      loading,
      setLoading,
      posts,
      setPosts,
      fetchBlogsDetails,
      changePageonbtnHandler,
      darkMode,
      setDarkMode
   };

   return (
      <MyContext.Provider value={SendingValues}>
         {children}
      </MyContext.Provider>
   );
}

export default MyProvider;
