import BannerSection from "../components/common/BannerSection"
import NewsletterSection from "../components/common/NewsLetter"
import BlogsSearchWidget from '../components/Blog/SearchComponent'
import RecentPostCard from '../components/Blog/PostCard'
import CategoryWidget from "../components/common/CategoryWidget"
import RecentPostSidebar from "../components/Blog/RecentPostSidebar"
import TagsWidget from "../components/Blog/TagsWidget"
import { archiveData, categoryData } from "../data/Categorydata"
import { tagsData } from "../data/Categorydata"
import { sidebarPosts } from "../data/Postcard"
import BlogDetailContent from "../components/Blog/BlogContent"
import CommentSection from "../components/Blog/CommentSection"
import AuthorBio from "../components/Blog/AuthorBio"
import posts from "../data/Postcard"
import { useParams } from "react-router-dom"
const BlogDetails = () => {
  const { id } = useParams();
const post = posts.find((p) => p.id === Number(id));

  // Agar post na milay (404 case)
  if (!post) {
    return <div className="text-white text-center py-20">Post Not Found</div>;
  }
  return (
    <div className="relative">
      <BannerSection title="Black Friday: All of Our Deals in One Spot" />
       <div className="flex flex-col items-start lg:flex-row gap-10 w-full px-4 md:px-10 py-20 lg:py-30 max-w-[1400px] mx-auto">
            {/* Left Side: Posts */}
        <div className="w-full lg:w-[65%]"> 
        <BlogDetailContent 
            image={post.image}
            date={post.date}
            author={post.author}
            category={post.category}
            views={post.views}
            title={post.title}
            content={post.content}
            tags={post.tags}
          />
          
          <AuthorBio 
            authorName={post.author} 
            authorImage={post.authorImage} 
          />
          
          <CommentSection commentCount={post.commentCount} />
    
        </div>
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

export default BlogDetails