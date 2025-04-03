
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import FooterDock from '@/components/FooterDock';

// Gallery data - easier to add new photos
const galleryImages = [
  {
    src: '/public/images/gallery/Burger 2.png',
    alt: 'Special food',
    size: 'large' // large image spanning multiple columns
  },
  {
    src: '/public/images/gallery/Burger Special.png',
    alt: 'Burger at 99',
    size: 'small' // small image taking up less space
  },
  {
    src: '/public/images/gallery/Business man businesscard.png',
    alt: 'Businesscard image',
    size: 'medium' // medium size image
  },
  {
    src: '/public/images/gallery/Buy home 1.png',
    alt: 'Buy home image',
    size: 'small' // small image
  },
  {
    src: '/public/images/gallery/Fast Delivery.png',
    alt: 'Fast Delivery image',
    size: 'medium' // medium size image
  },
  {
    src: '/public/images/gallery/Buy home 2.png',
    alt: 'Buy home 2',
    size: 'large' // large image spanning multiple columns
  },
  {
    src: '/public/images/gallery/Buy home 3.png',
    alt: 'Buy home 3',
    size: 'small' // small image
  },
  {
    src: '/public/images/gallery/Fertilizer banner.png',
    alt: 'Fertilizer banner',
    size: 'medium' // medium size image
  },
  // Additional demo images using placeholders
  {
    src: '/public/images/gallery/Fitness banner.png',
    alt: 'Fitness banner',
    size: 'large'
  },
  {
    src: '/public/images/gallery/Fried Chicken.png',
    alt: 'Fried Chicken',
    size: 'large'
  },
  {
    src: '/public/images/gallery/Hairing 1.png',
    alt: 'Hairing 1',
    size: 'medium'
  },
  {
    src: '/public/images/gallery/Hairing 2.png',
    alt: 'Hairing 2',
    size: 'medium'
  },
  {
    src: '/public/images/gallery/Hairing 3.png',
    alt: 'Hairing 3',
    size: 'medium'
  },
  {
    src: '/public/images/gallery/Hydroponic solution banner.png',
    alt: 'Hydroponic solution',
    size: 'large'
  },
  {
    src: '/public/images/gallery/jewellery banner.png',
    alt: 'Jewellery banner',
    size: 'large'
  },
  {
    src: '/public/images/gallery/Location logo.png',
    alt: 'Company logo',
    size: 'small'
  },
  {
    src: '/public/images/gallery/M logo.png',
    alt: 'Company logo',
    size: 'medium'
  },
  {
    src: '/public/images/gallery/Modern Food Menu.gif',
    alt: 'Modern Food Menu',
    size: 'medium'
  },
  {
    src: '/public/images/gallery/My mart logo.png',
    alt: 'mart logo',
    size: 'small'
  },
  {
    src: '/public/images/gallery/Personal trainer businesscard.png',
    alt: 'businesscard 1',
    size: 'small'
  },
  {
    src: '/public/images/gallery/royal golden logo.jpeg',
    alt: 'royal gold logo',
    size: 'medium'
  },
  {
    src: '/public/images/gallery/Travel businesscard.png',
    alt: 'Travel businesscard',
    size: 'small'
  },
  {
    src: '/public/images/gallery/watch banner.png',
    alt: 'watch banner',
    size: 'large'
  },
  {
    src: '/public/images/gallery/Boat Photography.jpeg',
    alt: 'Boat Photography',
    size: 'medium'
  },
  {
    src: '/public/images/gallery/Photography With Bike.jpg',
    alt: 'Photography With Bike',
    size: 'small'
  },
  {
    src: '/public/images/gallery/Moon Photography.jpeg',
    alt: 'Moon Photography',
    size: 'medium'
  },
  {
    src: '/public/images/gallery/Fighing Photography.jpg',
    alt: 'Fighing Photography',
    size: 'large'
  },
  {
    src: '/public/images/gallery/Victoriya Photography.jpeg',
    alt: 'Victoriya Memorial',
    size: 'medium'
  },
  {
    src: '/public/images/gallery/Ocian morning Photography.jpeg',
    alt: 'Morningn sky',
    size: 'medium'
  },
  {
    src: '/images/gallery/Update Comming.gif',
    alt: 'Updates',
    size: 'medium'
  }
];

const Gallery = () => {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to determine grid layout classes based on image size
  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-2';
      case 'small':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      {activeImage && (
        <div 
          className="fixed inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${activeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            filter: 'blur(8px)',
            zIndex: 0
          }}
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-12 relative z-10 flex-grow">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-8 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
        >
          ← Back to Home
        </Button>

        <h1 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-500 
                         hover:scale-[1.03] hover:z-10 overflow-hidden rounded-xl 
                         ${getGridClasses(image.size)}`}
              onMouseEnter={() => setActiveImage(image.src)}
              onMouseLeave={() => setActiveImage(null)}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-all duration-700 
                           group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 p-4 w-full translate-y-full 
                              group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-lg font-semibold">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-full object-contain animate-fade-up"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </DialogContent>
      </Dialog>

      <FooterDock />
    </div>
  );
};

export default Gallery;
