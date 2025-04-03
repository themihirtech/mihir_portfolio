import React, { useEffect, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import { renderCanvas } from "./components/ui/canvas";

export const ThemeContext = React.createContext({
  theme: 'dark',
  setTheme: (theme: string) => {},
});

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Create night sky with stars
    const createStarryBackground = () => {
      // Create container for night sky
      const nightSky = document.createElement('div');
      nightSky.className = 'night-sky';
      document.body.appendChild(nightSky);
      
      // Add twinkling stars layers
      for (let i = 0; i < 3; i++) {
        const starsLayer = document.createElement('div');
        starsLayer.className = 'stars';
        starsLayer.style.animationDelay = `${i * 0.8}s`;
        nightSky.appendChild(starsLayer);
      }
      
      // Create falling stars
      const fallingStars = document.createElement('div');
      fallingStars.className = 'falling-stars';
      nightSky.appendChild(fallingStars);
      
      // Create blinking stars
      const blinkingStars = document.createElement('div');
      blinkingStars.className = 'blinking-stars';
      document.body.appendChild(blinkingStars);
      
      // Add multiple blinking stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'blinking-star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.width = `${1 + Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${1 + Math.random() * 3}s`;
        blinkingStars.appendChild(star);
      }
      
      return { nightSky, blinkingStars };
    };
    
    const { nightSky, blinkingStars } = createStarryBackground();

    // Add canvas for cursor animation
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.className = 'pointer-events-none fixed inset-0 z-50';
    document.body.appendChild(canvas);

    // Initialize canvas animation
    renderCanvas();

    // Update theme in document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    // Hide the default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      if (nightSky) document.body.removeChild(nightSky);
      if (blinkingStars) document.body.removeChild(blinkingStars);
      if (canvas) document.body.removeChild(canvas);
      document.body.style.cursor = 'auto';
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <RouterProvider router={router} />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeContext.Provider>
  );
};

export default App;
