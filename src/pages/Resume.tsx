import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/public/images/Resume/Mihir_Mondal_CV.pdf';
    link.download = 'Mihir_Mondal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "Your resume download has begun.",
    });
  };

  const handleContact = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <div className="cursor-dot" />
      <div className="cursor-ring" />
      <div className="custom-cursor" />
      
      <div className="container mx-auto px-6 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-card rounded-lg shadow-lg p-8 mb-8">
            <div className="aspect-[8.5/11] bg-gray-100 dark:bg-gray-800 rounded-lg">
              <iframe 
                src="/public/images/Resume/Mihir_Mondal_CV.pdf"
                className="w-full h-full rounded-lg"
                title="Resume"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <Button
              onClick={handleContact}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Custom Cursor Elements */}
      <div className="custom-cursor"></div>
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </div>
  );
};

export default Resume;
