
import { Code2, Smartphone, Palette, Shield, Cpu } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces with attention to detail."
    },
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing clean, maintainable, and efficient code is my top priority."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile First",
      description: "Creating responsive applications that work seamlessly across all devices."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Cyber Security",
      description: "Implementing robust security measures to protect digital assets."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Generative AI",
      description: "Leveraging cutting-edge AI technologies for innovative solutions."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Transparent background instead of image */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">What I Do Best</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            I craft intuitive UI/UX experiences, design stunning graphics, develop secure and scalable software, build dynamic websites, and capture compelling photography—blending creativity and technology to deliver impactful digital solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-xl 
                         border border-gray-200 dark:border-gray-700
                         hover:border-primary/30 dark:hover:border-primary/30
                         hover:bg-white dark:hover:bg-gray-800
                         transition-all duration-300 animate-fade-up
                         hover:shadow-[0_0_30px_rgba(107,70,254,0.2)]
                         hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg 
                              group-hover:bg-primary/10 dark:group-hover:bg-primary/10 
                              transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white 
                             group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 
                            group-hover:text-gray-800 dark:group-hover:text-gray-300 
                            transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
