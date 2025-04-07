
import { Button } from './ui/button';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-scroll';
import FooterDock from './FooterDock';

const Contact = () => {
  // Function to copy email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mihirmondaltech@gmail.com');
    toast({
      title: "Email Copied!",
      description: "Email address has been copied to clipboard."
    });
  };
  
  return (
    <section id="contact" className="min-h-screen relative flex flex-col py-0">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0 py-px my-[22px]">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/90 my-[77px] py-0"></div>
        <div className="absolute inset-0 bg-[url('/images/background/desk.jpg')] bg-cover bg-center opacity-20" style={{
        aspectRatio: '16/9',
        objectFit: 'cover'
      }}></div>
      </div>

      {/* Main content section */}
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col my-[54px] py-[89px]">
        <div className="max-w-3xl mx-auto text-center flex-grow flex flex-col justify-between my-[31px]">
          <div className="mb-auto py-[25px]">
            <h2 className="text-4xl font-bold mb-6 animate-fade-up text-foreground-light dark:text-foreground-dark my-0 md:text-5xl">
              Let's work together
            </h2>
            
            <p style={{
            animationDelay: "0.2s"
          }} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 animate-fade-up my-[65px]">
              I am currently available for full-time work and eager to contribute my skills and experience to the right opportunity. If you're looking for a dedicated professional ready to take on new challenges, let's connect!
            </p>
          </div>
          
          <div className="mt-auto mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-up" style={{
            animationDelay: "0.4s"
          }}>
              <Button variant="default" size="lg" className="w-full md:w-auto px-8 py-6 text-lg flex items-center gap-2 hover:scale-105 transition-transform bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => {
              window.location.href = `https://wa.me/917872651513`;
            }}>
                Schedule a Call
              </Button>
              <Button variant="secondary" size="lg" className="w-full md:w-auto px-8 py-6 text-lg flex items-center gap-2 hover:scale-105 transition-transform bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700" onClick={() => {
              window.location.href = `mailto:mihirmondaltech@gmail.com`;
            }}>
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Dock */}
      <FooterDock />
    </section>
  );
};

export default Contact;
