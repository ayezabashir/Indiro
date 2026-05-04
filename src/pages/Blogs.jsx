import React, { useState } from "react"; // useState add kiya
import BannerSection from "../components/common/BannerSection"
import BlogsSearchWidget from '../components/Blog/SearchComponent'
import RecentPostCard from '../components/Blog/PostCard'
import posts from "../data/Postcard"
import { archiveData, categoryData } from "../data/Categorydata"
import CategoryWidget from "../components/common/CategoryWidget"
import RecentPostSidebar from "../components/Blog/RecentPostSidebar"
import TagsWidget from "../components/Blog/TagsWidget"
import { tagsData } from "../data/Categorydata"
import { sidebarPosts } from "../data/Postcard"
import NewsletterSection from "../components/common/NewsLetter"
import { ChevronRight } from "lucide-react"; // Next icon ke liye

const Blogs = () => {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;

  // Logic: Kaunse posts dikhane hain
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Page Numbers nikalne ke liye
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-[#0b1119] relative pb-9">
      <BannerSection title={'Blogs'} />

      <div className="flex flex-col items-start lg:flex-row gap-10 w-full px-4 md:px-10 py-20 lg:py-30 max-w-[1400px] mx-auto">
        
        {/* Left Side: Posts */}
        <div className="w-full lg:w-[65%]"> 
          {currentPosts.map((post) => (
            <RecentPostCard 
              key={post.id}
              image={post.image}
              date={post.date}
              author={post.author}
              title={post.title}
              id={post.id}
              description={post.description}
            />
          ))}

          {/* Pagination UI - Image ke mutabiq */}
          <div className="flex items-center justify-center gap-4 mt-12">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-[Oswald] text-lg transition-all duration-300 ${
                  currentPage === number
                    ? "bg-[#fe4c1c] text-white shadow-[0_0_15px_rgba(254,76,28,0.5)]" // Active style
                    : "bg-[#192436] text-zinc-400 hover:text-white" // Inactive style
                }`}
              >
                {number}
              </button>
            ))}

            {/* Next Button */}
            {currentPage < totalPages && (
              <button 
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-12 h-12 rounded-full bg-[#192436] flex items-center justify-center text-white hover:bg-[#fe4c1c] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Right Side: Sidebar */}
        <div className="w-full lg:w-[30%]">
          <BlogsSearchWidget />
          <CategoryWidget title="Category" items={categoryData} />
          <CategoryWidget title="Archives" items={archiveData} />
          <RecentPostSidebar title="Recent Post" posts={sidebarPosts} />
          <TagsWidget title={'All Tags'} tags={tagsData} />
        </div>

      </div>
      <NewsletterSection />
    </div>
  )
}

export default Blogs