
import {
  Github, 
  Mail, 
  Linkedin, 
  Copy, 
  ArrowUp, 
  Download, 
  Home, 
  Image, 
  FileText,
  Briefcase,
  Dribbble,
  Camera // Using Camera icon as an alternative for Pinterest
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeContext } from '@/App';
import { useContext } from 'react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const FooterDock = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // Function to handle resume download
  const handleDownloadResume = () => {
    const resumeUrl = "/public/images/Resume/Mihir_Mondal_CV.pdf";
    window.open(resumeUrl, '_blank');
  };

  // Function to copy email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@mihirmondal.com');
    toast({
      title: "Email Copied!",
      description: "Email address has been copied to clipboard."
    });
  };

  const dockItems = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: () => window.location.href = "/"
    },
    {
      title: "Projects",
      icon: <Briefcase className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: () => window.location.href = "/projects"
    },
    {
      title: "Gallery",
      icon: <Image className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: () => window.location.href = "/gallery"
    },
    {
      title: "Resume",
      icon: <FileText className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: () => window.location.href = "/resume"
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: () => window.open("https://github.com/themihirtech", "_blank")
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: () => window.open("https://in.linkedin.com/in/mihir-mondal-9a9baa214", "_blank")
    },
    {
      title: "Dribbble",
      icon: <Dribbble className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: () => window.open("https://dribbble.com/mihirmondal", "_blank")
    },
    {
      title: "Pinterest",
      icon: <Camera className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: () => window.open("https://in.pinterest.com/mihirmondal1/", "_blank")
    },
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: handleCopyEmail
    },
    {
      title: "Download CV",
      icon: <Download className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: handleDownloadResume
    },
    {
      title: "Top",
      icon: <ArrowUp className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  ];

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 py-4 relative">
      <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2 z-10">
        <Dock className="items-end pb-3 border border-gray-200 dark:border-gray-700">
          {dockItems.map((item, idx) => (
            <DockItem
              key={idx}
              className="aspect-square rounded-full bg-gray-200 dark:bg-gray-800 cursor-pointer"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>
                <div 
                  className="h-full w-full cursor-pointer" 
                  onClick={item.action}
                >
                  {item.icon}
                </div>
              </DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
      
      <div className="container mx-auto px-4 py-2 text-center mt-16">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2024 Mihir Mondal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterDock;
