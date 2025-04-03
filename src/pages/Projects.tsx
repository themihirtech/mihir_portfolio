
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterDock from '@/components/FooterDock';
import { toast } from '@/components/ui/use-toast';
import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

// Projects data - easier to add new projects
const projectsData = [
  {
    title: "Fitness App",
    description: "A mobile app for tracking workouts and nutrition",
    videoUrl: "/public/images/Project Video/Fat 2 Fit Fitness app.mp4",
    thumbnail: "/images/thumbnail/fitness-app.png",
    tags: ["Figma", "Premiere Pro", "After Effact"],
    github: "https://dribbble.com/mihirmondal"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack shopping platform with real-time inventory",
    videoUrl: "/public/images/Project Video/My Mart App.mp4",
    thumbnail: "/images/thumbnail/ecommerce.png",
    tags: ["Figma", "Premiere Pro", "After Effact"],
    github: "https://www.behance.net/mihirmondal1"
  },
  {
    title: "Money Transfer app",
    description: "Cross-platform Money Transfer app, you can Send Money with Ease: Anytime, Anywhere",
    videoUrl: "/public/images/Project Video/Tez Cash App.mp4",
    thumbnail: "/images/thumbnail/social-media.png",
    tags: ["Figma", "Premiere Pro", "After Effact"],
    github: "https://dribbble.com/mihirmondal"
  },
  {
    title: "Food delivery App",
    description: "A mobile application that allows users to browse restaurant menus, place orders, and have food delivered to their location",
    videoUrl: "/public/images/Project Video/Fresh Food App.mp4",
    thumbnail: "/images/thumbnail/ai-generator.png",
    tags: ["Figma", "Premiere Pro", "After Effact"],
    github: "https://www.behance.net/mihirmondal1"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with modern design",
    videoUrl: "/public/images/Project Video/loading Screen 1.mp4",
    thumbnail: "/images/thumbnail/fitness-app.png",
    tags: ["Figma", "Premiere Pro", "After Effact"],
    github: "https://dribbble.com/mihirmondal"
  },
  {
    title: "Weather App",
    description: "Real-time weather tracking application",
    videoUrl: "/public/images/Project Video/loading Screen 2.mp4",
    thumbnail: "/images/thumbnail/ecommerce.png",
    tags: ["Figma", "Premiere Pro", "After Effact"],
    github: "https://github.com"
  },
  {
    title: "Task Manager",
    description: "Collaborative task management platform",
    videoUrl: "/public/images/Project Video/loading Screen 3.mp4",
    thumbnail: "/images/thumbnail/social-media.png",
    tags: ["Vue.js", "Firebase", "Vuex"],
    github: "https://github.com"
  },
  {
    title: "Crypto Tracker",
    description: "Cryptocurrency price tracking dashboard",
    videoUrl: "/public/images/Project Video/loading Screen 4.mp4",
    thumbnail: "/images/thumbnail/ai-generator.png",
    tags: ["React", "CryptoCompare API"],
    github: "https://github.com"
  },
  {
    title: "Blog Platform",
    description: "Full-stack blogging platform with CMS",
    videoUrl: "/public/images/Project Video/loading Screen 5.mp4",
    thumbnail: "/images/thumbnail/fitness-app.png",
    tags: ["Next.js", "Strapi", "PostgreSQL"],
    github: "https://github.com"
  }
];

const Projects = () => {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleContactClick = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <video
            src={activeVideo}
            className="max-w-[90vw] max-h-[90vh]"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-12 flex-grow">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-8 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
        >
          ← Back to Home
        </Button>
        
        <h1 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white">
          All Projects
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-up shadow-lg border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="relative aspect-video cursor-pointer"
                onClick={() => setActiveVideo(project.videoUrl)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <video
                  src={project.videoUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={handleContactClick}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Contact Me
          </Button>
        </div>
      </div>

      <FooterDock />
    </div>
  );
};

export default Projects;
