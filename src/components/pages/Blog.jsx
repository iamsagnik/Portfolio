import BlogPostgrid from "../blog/BlogPostgrid"

function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#181818]">
      <p>Blog</p>
      <div className="w-[80%]">
        <BlogPostgrid/>
      </div>
      <div className="mt-10">
        <a 
          href="/Portfolio/#/home" 
          className="bg-[#FFC000] hover:bg-[#FFC000]/90 text-[#14181f] font-semibold px-6 py-3 rounded-lg transition-colors text-center text-white" 
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default Blog