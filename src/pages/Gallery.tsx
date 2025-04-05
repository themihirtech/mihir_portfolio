
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import FooterDock from '@/components/FooterDock';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Gallery data - easier to add new photos
const galleryImages = [
  {
    src: '/images/gallery/Burger 2.png',
    alt: 'Special food',
    size: 'large' // large image spanning multiple columns
  },
  {
    src: '/images/gallery/Burger Special.png',
    alt: 'Burger at 99',
    size: 'small' // small image taking up less space
  },
  {
    src: '/images/gallery/Business man businesscard.png',
    alt: 'Businesscard image',
    size: 'medium' // medium size image
  },
  {
    src: '/images/gallery/Buy home 1.png',
    alt: 'Buy home image',
    size: 'small' // small image
  },
  {
    src: '/images/gallery/Fast Delivery.png',
    alt: 'Fast Delivery image',
    size: 'medium' // medium size image
  },
  {
    src: '/images/gallery/Buy home 2.png',
    alt: 'Buy home 2',
    size: 'large' // large image spanning multiple columns
  },
  {
    src: '/images/gallery/Buy home 3.png',
    alt: 'Buy home 3',
    size: 'small' // small image
  },
  {
    src: '/images/gallery/Fertilizer banner.png',
    alt: 'Fertilizer banner',
    size: 'medium' // medium size image
  },
  // Additional demo images using placeholders
  {
    src: '/images/gallery/Fitness banner.png',
    alt: 'Fitness banner',
    size: 'large'
  },
  {
    src: '/images/gallery/Fried Chicken.png',
    alt: 'Fried Chicken',
    size: 'large'
  },
  {
    src: '/images/gallery/Hairing 1.png',
    alt: 'Hairing 1',
    size: 'medium'
  },
  {
    src: '/images/gallery/Hairing 2.png',
    alt: 'Hairing 2',
    size: 'medium'
  },
  {
    src: '/images/gallery/Hairing 3.png',
    alt: 'Hairing 3',
    size: 'medium'
  },
  {
    src: '/images/gallery/Hydroponic solution banner.png',
    alt: 'Hydroponic solution',
    size: 'large'
  },
  {
    src: '/images/gallery/Village Man Cycling.jpg',
    alt: 'Village Man Cycling',
    size: 'medium'
  },
  {
    src: '/public/images/gallery/Ferris wheel.jpg',
    alt: 'Ferris wheel',
    size: 'medium'
  },
  {
    src: '/images/gallery/jewellery banner.png',
    alt: 'Jewellery banner',
    size: 'large'
  },
  {
    src: '/images/gallery/Location logo.png',
    alt: 'Company logo',
    size: 'small'
  },
  {
    src: '/images/gallery/M logo.png',
    alt: 'Company logo',
    size: 'medium'
  },
  {
    src: '/images/gallery/Modern Food Menu.gif',
    alt: 'Modern Food Menu',
    size: 'medium'
  },
  {
    src: '/images/gallery/Hydroponic solution banner.png',
    alt: 'Nature With Empty Rode',
    size: 'medium'
  },
  {
    src: '/images/gallery/My mart logo.png',
    alt: 'mart logo',
    size: 'small'
  },
  {
    src: '/images/gallery/Personal trainer businesscard.png',
    alt: 'businesscard 1',
    size: 'small'
  },
  {
    src: '/images/gallery/royal golden logo.jpeg',
    alt: 'royal gold logo',
    size: 'medium'
  },
  {
    src: '/images/gallery/Travel businesscard.png',
    alt: 'Travel businesscard',
    size: 'small'
  },
  {
    src: '/images/gallery/watch banner.png',
    alt: 'watch banner',
    size: 'large'
  },
  {
    src: '/images/gallery/Boat Photography.jpeg',
    alt: 'Boat Photography',
    size: 'medium'
  },
  {
    src: '/images/gallery/Photography With Bike.jpg',
    alt: 'Photography With Bike',
    size: 'small'
  },
  {
    src: '/images/gallery/Moon Photography.jpeg',
    alt: 'Moon Photography',
    size: 'medium'
  },
  {
    src: '/images/gallery/Fighing Photography.jpg',
    alt: 'Fighing Photography',
    size: 'large'
  },
  {
    src: '/images/gallery/Victoriya Photography.jpeg',
    alt: 'Victoriya Memorial',
    size: 'medium'
  },
  {
    src: '/images/gallery/Ocian morning Photography.jpeg',
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

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

    // Navigation functions for the preview mode
    const goToNext = () => {
      if (selectedIndex === null) return;
      const nextIndex = (selectedIndex + 1) % galleryImages.length;
      setSelectedIndex(nextIndex);
      setSelectedImage(galleryImages[nextIndex].src);
    };
  
    const goToPrevious = () => {
      if (selectedIndex === null) return;
      const prevIndex = (selectedIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedIndex(prevIndex);
      setSelectedImage(galleryImages[prevIndex].src);
    };
  
    // Function to open the image preview
    const openImagePreview = (index: number) => {
      setSelectedIndex(index);
      setSelectedImage(galleryImages[index].src);
    };
  
    // Handle dialog close
    const handleCloseDialog = () => {
      setSelectedImage(null);
      setSelectedIndex(null);
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
                         ${getGridClasses(image.size)} cursor-pointer`}
              onMouseEnter={() => setActiveImage(image.src)}
              onMouseLeave={() => setActiveImage(null)}
              onClick={() => openImagePreview(index)}
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

      {/* Fixed Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={handleCloseDialog}>
        <DialogContent 
          className="max-w-[95vw] max-h-[95vh] p-0 bg-black/90 border-none" 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <img
                src={selectedImage}
                alt={selectedIndex !== null ? galleryImages[selectedIndex].alt : "Preview"}
                style={{ 
                  maxHeight: 'calc(95vh - 80px)', 
                  maxWidth: '100%', 
                  objectFit: 'contain', 
                  display: 'block' 
                }}
              />
              
              {/* Image counter */}
              {selectedIndex !== null && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white bg-black/60 px-3 py-1 rounded-full text-sm z-50">
                  {selectedIndex + 1} / {galleryImages.length}
                </div>
              )}
              
              {/* Navigation buttons - positioned on sides */}
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full h-12 w-12 z-50"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full h-12 w-12 z-50"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </Button>
              
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseDialog}
                className="absolute right-4 top-4 bg-black/50 hover:bg-black/70 rounded-full h-10 w-10 z-50"
                aria-label="Close preview"
              >
                <X className="h-6 w-6 text-white" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <FooterDock />
    </div>
  );
};

export default Gallery;
