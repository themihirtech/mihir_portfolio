import { useEffect, useState } from "react";

// Define the tech stack data with icons and descriptions
const techStack = [
  {
    name: "Figma",
    icon: "/images/tech-stack/Figma.png",
    delay: 0,
  },
  {
    name: "adobe xd",
    icon: "/images/tech-stack/Adobexd.webp",
    delay: 0.1,
  },
  {
    name: "photoshop",
    icon: "/images/tech-stack/photoshop.png",
    delay: 0.2,
  },
  {
    name: "canva",
    icon: "/images/tech-stack/canva.webp",
    delay: 0.3,
  },
  {
    name: "premiere Pro",
    icon: "/images/tech-stack/premierepro.png",
    delay: 0.4,
  },
  {
    name: "Android",
    icon: "/images/tech-stack/Android.png",
    delay: 0.5,
  },
  {
    name: "html",
    icon: "/images/tech-stack/html.webp",
    delay: 0.6,
  },
  {
    name: "css",
    icon: "/images/tech-stack/css.webp",
    delay: 0.7,
  },
  {
    name: "javascript",
    icon: "/images/tech-stack/javascript.webp",
    delay: 0,
  },
  {
    name: "python",
    icon: "/images/tech-stack/python.webp",
    delay: 0.9,
  },
  {
    name: "Firefly",
    icon: "/images/tech-stack/Firefly.png",
    delay: 1.0,
  },
  {
    name: "uizard_logo",
    icon: "/images/tech-stack/uizard_logo.png",
    delay: 1.1,
  },
  {
    name: "flutter",
    icon: "/images/tech-stack/flutter.png",
    delay: 1.2,
  },
  {
    name: "firebase",
    icon: "/images/tech-stack/firebase.png",
    delay: 1.3,
  },
  {
    name: "github",
    icon: "/images/tech-stack/github.webp",
    delay: 1.4,
  },
  {
    name: "lovable",
    icon: "/images/tech-stack/lovable.png",
    delay: 1.5,
  },
  {
    name: "kali linux",
    icon: "/images/tech-stack/kalilinux.webp",
    delay: 1.6,
  },
  {
    name: "chatgpt",
    icon: "/images/tech-stack/chatgpt.webp",
    delay: 1.7,
  },
  {
    name: "v0",
    icon: "/images/tech-stack/v0.png",
    delay: 1.8,
  },
  {
    name: "Kotlin",
    icon: "/images/tech-stack/kotlin.png",
    delay: 1.9,
  },
];

// Define professional roles
const roles = [
  "UI/UX Designer",
  "Graphic Designer",
  "Software Engineer",
  "Web Developer",
  "Cyber Security Expert",
  "Photographer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (isTyping) {
      if (displayedRole.length < currentRole.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        }, 100);
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        return () => clearTimeout(timeoutId);
      }
    } else {
      if (displayedRole.length === 0) {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      } else {
        const timeoutId = setTimeout(() => {
          setDisplayedRole(displayedRole.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [displayedRole, isTyping, roleIndex]);

  // Add mouse follower effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
      const cursorRing = document.querySelector(".cursor-ring") as HTMLElement;
      if (cursor && cursorDot && cursorRing) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX - 16}px, ${
          mouseY - 16
        }px)`;
        cursorDot.style.transform = `translate(${mouseX - 4}px, ${
          mouseY - 4
        }px)`;
        cursorRing.style.transform = `translate(${mouseX - 25}px, ${
          mouseY - 25
        }px)`;
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      {/* Custom cursor elements */}
      <div className="custom-cursor"></div>
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>

      {/* Animated background with enhanced stars effect */}
      <div className="night-sky">
        <div className="stars"></div>
        <div className="falling-stars"></div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-start pt-32 md:pt-40 relative overflow-hidden py-[100px]">
        {/* Profile image section */}
        <div className="profile-container mb-12 relative group rounded-none">
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto relative transform transition-all duration-300 group-hover:scale-105 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 animate-spin-slow"></div>
            <img
              src="/images/profile/profile photo.jpg"
              alt="Mihir Mondal"
              className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover border-4 border-background-dark"
            />
          </div>
        </div>

        {/* Tech stack container with enhanced visibility */}
        <div className="relative w-full max-w-[90%] md:max-w-[80%] mx-auto overflow-hidden mb-12">
          <div className="tech-scroll-container">
            {/* Left dissolve gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none"></div>

            <div className="flex tech-scroll animate-scroll gap-4 py-0 bg-transparent">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  style={{
                    animationDelay: `${tech.delay}s`,
                    transform: `translateZ(0) rotateY(${
                      Math.sin(Date.now() * 0.001 + index) * 30
                    }deg)`,
                  }}
                  title={tech.name}
                  className="tech-icon group perspective-1000 hover:z-10 flex-shrink-0 rounded-none bg-[#000a00]/0 py-[10px]"
                >
                  <div className="relative w-12 h-12 transform-style-3d transition-transform duration-500 hover:rotate-y-180">
                    <div className="absolute inset-0 backface-hidden bg-transparent">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full p-1.5 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(107,70,254,0.5)] object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right dissolve gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Main heading with enhanced contrast */}
        <div className="space-y-6 animate-fade-up text-center px-4">
          <h1 className="text-3xl lg:text-6xl py-0 font-bold text-gray-900 dark:text-white md:text-6xl">
            Hi, I'm Mihir <span className="inline-block animate-wave">👋</span>
          </h1>
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 dark:text-white md:text-5xl">
            I'm{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {displayedRole}
            </span>
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* Availability indicator */}
        <button className="mt-12 px-6 bg-green-500/20 text-green-500 rounded-full border border-green-500/30 hover:bg-green-500/30 transition-all duration-300 animate-pulse-slow flex items-center gap-2 group dark:text-green-400 py-[13px]">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse dark:bg-green-400"></span>
          Available for Work
        </button>
      </div>
    </>
  );
};

export default Hero;
