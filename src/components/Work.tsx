
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

// Featured projects data - reusing the same structure
const featuredProjects = [
  {
    title: "Fitness App",
    description: "A mobile app for tracking workouts and nutrition",
    videoUrl: "/public/images/Project Video/Fat 2 Fit Fitness app.mp4",
    thumbnail: "/images/thumbnail/fitness-app.png",
    tags: ["React Native", "Firebase", "Redux"],
    externalLink: "https://dribbble.com/mihirmondal"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack shopping platform with real-time inventory",
    videoUrl: "/public/images/Project Video/My Mart App.mp4",
    thumbnail: "/images/thumbnail/ecommerce.png",
    tags: ["React", "Node.js", "MongoDB"],
    externalLink: "https://www.behance.net/mihirmondal1"
  },
  {
    title: "Money Transfer app",
    description: "Cross-platform Money Transfer app, you can Send Money with Ease: Anytime, Anywhere",
    videoUrl: "/public/images/Project Video/Tez Cash App.mp4",
    thumbnail: "/images/thumbnail/social-media.png",
    tags: ["Flutter", "Firebase", "GetX"],
    externalLink: "https://www.behance.net/mihirmondal1"
  },
  {
    title: "Food delivery App",
    description: "A mobile application that allows users to browse restaurant menus, place orders, and have food delivered to their location",
    videoUrl: "/public/images/Project Video/Fresh Food App.mp4",
    thumbnail: "/images/thumbnail/ai-generator.png",
    tags: ["Python", "TensorFlow", "React"],
    externalLink: "https://dribbble.com/mihirmondal"
  }
];

const Work = () => {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="work" className="py-20 relative">
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

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Selected Work
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-up shadow-lg border border-gray-200 dark:border-gray-700"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div 
                className="aspect-video relative overflow-hidden cursor-pointer"
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
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
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
        
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => navigate('/projects')}
            className="bg-primary hover:bg-primary/90 text-white dark:bg-primary dark:hover:bg-primary/90 dark:text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
