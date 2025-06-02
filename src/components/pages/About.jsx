import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiCode, FiServer, FiTool, FiCpu, FiBookOpen, FiAward, FiArrowRight, FiClock } from 'react-icons/fi';
import blogs from "../../data/blogs.json";

function About() {

const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className="relative bg-neutral-900 text-white md:h-[300vh] h-auto">
      <div className={`${isMobile ? 'relative h-auto' : 'sticky top-0 h-screen flex items-center overflow-hidden'}`}>
        <motion.div 
          style={{ x: isMobile ? "0%" : x }} 
          className={`flex ${isMobile ? 'flex-col gap-12' : 'flex-row'} transition-all duration-300`}
        >  
          {/* About Card */}
          <div className={`flex items-center justify-center ${isMobile ? 'mx-4 mt-12' : 'ml-12'} w-full md:w-[50vw] shrink-0`}>
            <div className="bg-neutral-800/80 border border-neutral-700 rounded-3xl p-6 md:p-10 max-w-md w-full text-center shadow-lg">
              <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
              <h3 className="text-lg text-yellow-400 font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-300 text-sm">
                A brief look into my professional journey, skills, and educational background. 
                {isMobile ? ' Swipe horizontally to explore more.' : ' Scroll to explore more.'}
              </p>
            </div>
          </div>

          {/* Vertical Line - Desktop Only */}
          {!isMobile && (
            <div className="relative left-[-70px] top-0 bottom-0 w-2 bg-yellow-400/20 rounded-xl" />
          )}

          {/* Skills Section */}
          <div className="flex flex-grow items-start justify-center w-full md:w-[50vw] shrink-0 px-4">
            <div className="bg-neutral-800/90 backdrop-blur-sm rounded-3xl p-6 md:p-12 w-full max-w-4xl border-2 border-neutral-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-yellow-400/10 rounded-xl">
                  <FiCode className="text-3xl text-yellow-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCategory 
                  title="Programming Languages"
                  skills={[
                    { name: 'C', level: 'Intermediate' },
                    { name: 'C++', level: 'Intermediate' },
                    { name: 'Java', level: 'Intermediate' },
                    { name: 'Python', level: 'Intermediate' },
                    { name: 'JavaScript', level: 'Intermediate' }
                  ]}
                  icon={<FiCode />}
                />

                <SkillCategory 
                  title="Frontend Mastery"
                  skills={[
                    { name: 'React.js', level: 'Intermediate' },
                    { name: 'HTML + CSS', level: 'Expert' },
                    { name: 'JavaScript', level: 'Intermediate' }
                  ]}
                  icon={<FiCode />}
                />

                <SkillCategory
                  title="Backend & Databases"
                  skills={[
                    { name: 'SQL', level: 'Intermediate' },
                    { name: 'MongoDB', level: 'Intermediate' }
                  ]}
                  icon={<FiServer />}
                />

                <SkillCategory
                  title="ML / AI Toolkit"
                  skills={[
                    { name: 'Pytorch', level: 'Intermediate' },
                    { name: 'NumPy', level: 'Intermediate' },
                    { name: 'Pandas', level: 'Intermediate' },
                    { name: 'Matplotlib', level: 'Intermediate' }
                  ]}
                  icon={<FiCpu />}
                />

                <SkillCategory
                  title="Tools & Platforms"
                  skills={[
                    { name: 'Git & GitHub', level: 'Intermediate' },
                    { name: 'VS Code', level: 'Intermediate' },
                    { name: 'Jupyter Notebook', level: 'Intermediate' }
                  ]}
                  icon={<FiTool />}
                />

                <SkillCategory
                  title="Exploring / Familiar With"
                  skills={[
                    { name: 'GANs', level: 'Familiar' },
                    { name: 'Power BI', level: 'Familiar' },
                    { name: 'Big Data', level: 'Familiar' }
                  ]}
                  icon={<FiBookOpen />}
                />
              </div>
            </div>
          </div>

          {/* Vertical Line - Desktop Only */}
          {!isMobile && (
            <div className="relative left-[5px] top-0 bottom-0 w-2 bg-yellow-400/20 rounded-xl mx-8 h-[80%]" />
          )}

          {/* Education Section */}
          <div className="flex items-center justify-center w-full md:w-[50vw] shrink-0 px-4 md:px-8">
            <div className="bg-neutral-800/90 backdrop-blur-sm rounded-3xl p-6 md:p-12 w-full max-w-2xl border-2 border-neutral-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-yellow-400/10 rounded-xl">
                  <FiBookOpen className="text-3xl text-yellow-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Education Journey</h3>
              </div>

              <div className="space-y-8 relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-yellow-400/20" />
                
                  {/* Timeline Items */}
                  <div className="space-y-8 relative">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-yellow-400/20" />

                  {/* 10th Grade */}
                  <div className="relative pl-16">
                    <div className="absolute left-5 top-2 w-4 h-4 bg-yellow-400 rounded-full -translate-x-1/2" />
                    <h4 className="text-xl font-semibold text-white">Secondary Education</h4>
                    <p className="text-neutral-400 mt-1">Jenkins School • 2018-2019</p>
                    <div className="mt-3 flex items-center gap-2">
                      <FiAward className="text-yellow-400 shrink-0" />
                      <span className="text-neutral-300">WBBSE Board - 94% Aggregate</span>
                    </div>
                  </div>

                  {/* Vertical Separator */}
                  <div className="h-0.5 bg-yellow-400/10 w-3/4 mx-auto" />

                  {/* 12th Grade */}
                  <div className="relative pl-16">
                    <div className="absolute left-5 top-2 w-4 h-4 bg-yellow-400 rounded-full -translate-x-1/2" />
                    <h4 className="text-xl font-semibold text-white">Senior Secondary</h4>
                    <p className="text-neutral-400 mt-1">Jenkins College • 2020-2021</p>
                    <div className="mt-3 flex items-center gap-2">
                      <FiAward className="text-yellow-400 shrink-0" />
                      <span className="text-neutral-300">WBCHSE Board - 91% in Science Stream</span>
                    </div>
                  </div>

                  {/* Vertical Separator */}
                  <div className="h-0.5 bg-yellow-400/10 w-3/4 mx-auto" />

                  {/* B.Tech */}
                  <div className="relative pl-16">
                    <div className="absolute left-5 top-2 w-4 h-4 bg-yellow-400 rounded-full -translate-x-1/2" />
                    <h4 className="text-xl font-semibold text-white">B.Tech in Computer Science</h4>
                    <p className="text-neutral-400 mt-1">KIIT University • 2022 - 2026</p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <FiAward className="text-yellow-400 shrink-0" />
                        <span className="text-sm text-neutral-300">Among Top 1000 Students in KIITEE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

          {/* Vertical Line - Desktop Only */}
          {!isMobile && (
            <div className="relative left-[5px] top-0 bottom-0 w-2 bg-yellow-400/20 rounded-xl mx-8" />
          )}

          {/* Blog Header */}
          <div className="flex items-center justify-center w-full md:w-[50vw] shrink-0 px-4 md:px-8">
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-700 rounded-3xl p-6 md:p-12 w-full max-w-2xl text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-4 md:mb-6">
                My Writings
              </h2>
              <p className="text-md text-neutral-300 leading-relaxed">
                Exploring the intersection of technology and creativity through in-depth 
                technical articles and project case studies.
              </p>
              <div className="mt-6 flex justify-center items-center gap-2 text-neutral-400">
                <FiArrowRight className="animate-pulse" />
                <span>{isMobile ? 'Swipe to explore' : 'Scroll horizontally to explore'}</span>
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="flex items-center w-full md:w-[50vw] shrink-0 pl-4 pr-4 md:pl-8 md:pr-24">
            <div className={`flex gap-6 w-full pb-4 ${isMobile ? 'overflow-x-auto' : ''}`}>
              {blogs?.slice(0, 4).map((blog) => (
                <div key={blog.id} className="flex-shrink-0 w-[85vw] md:w-[400px]">
                  <BlogCard blog={blog} />
                </div>
              ))}
              
              {/* Read More Card */}
              <div className="flex-shrink-0 w-[85vw] md:w-[400px] flex items-center justify-center md:pr-8">
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-700 rounded-2xl p-8 w-full h-[320px] flex flex-col items-center justify-center text-center space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    Want to Read More?
                  </h3>
                  <p className="text-neutral-400">
                    Explore all articles and technical deep dives in my blog archive
                  </p>
                  <a
                    href="/Portfolio/#/error"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-neutral-900 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200"
                  >
                    <FiArrowRight className="text-lg" />
                    View All Posts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


const SkillCategory = ({ title, skills, icon }) => (
  <div className="bg-neutral-700/20 p-5 rounded-xl border border-neutral-700/50">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-yellow-400">{icon}</div>
      <h4 className="font-semibold text-lg text-white">{title}</h4>
    </div>
    <div className="grid grid-cols-1 gap-2 w-full">
      {skills.map((skill, index) => (
        <div 
          key={index} 
          className="flex items-center justify-between text-sm text-yellow-400 w-full"
        >
          <span className="truncate pr-2">{skill.name}</span>
          <span className="shrink-0">{skill.level}</span>
        </div>
      ))}
    </div>
  </div>
);

const BlogCard = ({ blog }) => (
  <div className="group relative h-[320px] w-full rounded-2xl overflow-hidden bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 shadow-xl">
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
      // style={{ backgroundImage: `url(${blog?.imageUrl})` }}
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
);

export default About;