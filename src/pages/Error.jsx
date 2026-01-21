function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#14181f]">
      <h1 className="text-4xl font-bold text-[#FFC000] mb-4">Sorry I am working on it</h1>
      <PhotoSection imagePath="./assets/Project_errors/404.jpg" />
      <p className="text-lg text-[#B8B8B8] mt-4">Please check back later!</p>
      <div className="mt-6">
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

const PhotoSection = ({ imagePath }) => (
  <div className="group relative h-[400px] w-[80%] md:w-[400px] rounded-2xl overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
      style={{ backgroundImage: `url(${imagePath})` }}
    />
  </div>
);

export default Error;