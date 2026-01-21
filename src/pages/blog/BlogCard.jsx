import { FiClock } from "react-icons/fi"

function BlogCard({ blog, height = '200px' }) {
  return (
    <div className="group relative w-full rounded-xl overflow-hidden bg-neutral-900 hover:bg-neutral-700 transition-all duration-300 mb-4"
    style={{ height }}
    >
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
      style={{ backgroundImage: `url(${blog?.imagePath})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
      <div className="flex gap-2 flex-wrap">
        {blog?.tags?.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-xs font-medium bg-yellow-400/20 text-yellow-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <h4 className="font-bold text-white text-xl leading-tight">{blog?.title}</h4>
      <p className="text-sm text-neutral-300 line-clamp-2">{blog?.excerpt}</p>
      <div className="flex items-center justify-between mt-4 text-xs text-neutral-400">
        <span>{blog?.date}</span>
        <div className="flex items-center gap-1">
          <FiClock className="shrink-0" />
          <span>5 min read</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogCard