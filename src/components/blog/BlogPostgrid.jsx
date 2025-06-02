import BlogCard from "./BlogCard"
import Blog from "../../data/blogs.json" 

function BlogPostgrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
      {
        Blog.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))
      }
    </div>
  )
}

export default BlogPostgrid