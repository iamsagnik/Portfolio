import projects from '../../data/projects.json';


function Projects() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#282828] pb-15' id="projects">
      <div >
        <h1 className="text-3xl font-bold text-center text-[#FFC000] mt-20 mb-4 uppercase tracking-wider">
          Projects
        </h1>
        <h1 className="text-center text-white text-4xl font-bold mb-4">
          My Works
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl">
          Here are some of the projects I've worked on, showcasing my skills in various technologies. Projects are dynamically prioritized by AI based on engagement.
        </p>
      </div>
      <div className="w-[65%] mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-zinc-900 p-4 rounded-xl ${project.span}`}
            >
              <img src={project.imageUrl} alt={project.imageHint} className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-zinc-700 px-2 py-1 rounded-md">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Projects
