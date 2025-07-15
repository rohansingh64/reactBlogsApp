import HomeBlogPage from "./pages/HomeBlogPage";

import CategoryBlogPage from "./pages/CategoryBlogPage";

import TagBlogPage from "./pages/TagBlogPage";

import RelatedBlogPage from "./pages/RelatedBlogPage";

import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";

import { useContext, useEffect } from "react";
import { MyContext } from "./contexts/MyContext";

function App() {
   const { fetchBlogsDetails } = useContext(MyContext);

   //  const [searchParams, setSearchParams] = useSearchParams(); setsearchparams is not used anywhere

   const [searchParams] = useSearchParams();

   const location = useLocation();

   useEffect(() => {
      let tag = null;

      let category = null;

      let page = Number(searchParams.get("page") ?? 1);

      if (location.pathname.includes("tags")) {
         tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
         category = null;
      } else if (location.pathname.includes("categories")) {
         category = location.pathname.split("/").at(-1).replaceAll("-", " ");
         tag = null;
      } else {
         tag = null;
         category = null;
      }
      fetchBlogsDetails(page, tag, category);
      // in 43 line warning occur so i disable wrning
      // eslint-disable-next-line
   }, [location.pathname, location.search]);

   return (
      <div>
         <Routes>
            <Route path="/" element={<HomeBlogPage />} />

            <Route
               path="/categories/:category"
               element={<CategoryBlogPage />}
            />

            <Route path="/tags/:tag" element={<TagBlogPage />} />

            <Route path="/blog/:blogId" element={<RelatedBlogPage />} />
         </Routes>
      </div>
   );
}

export default App;
