// Suburban Golf Carts - Professional Residential & Suburban Background Images
// 9 professional Suburban golf cart residential and suburban images for dynamic backgrounds

import image1 from "@assets/Shoreside Golf Carts - Golf Carts In and On the Shore Side_1756238208000.jpeg";
import image2 from "@assets/Shoreside Golf Carts - Golf Carts In and On the Shore Side 2_1756238208000.jpeg";
import image3 from "@assets/Shoreside Golf Carts - Golf Carts In and On the Shore Side 3_1756238208001.jpeg";
import image4 from "@assets/Shoreside Golf Carts - Golf Carts In and On the Shore Side 4_1756238208001.jpeg";
import image5 from "@assets/Shoreside Golf Carts - Golf Carts In and On the Shore Side 5_1756238208001.jpeg";
import image6 from "@assets/Shoreside Golf Carts - Golf Carts In and On the Shore Side 6_1756238208001.jpeg";
import image7 from "@assets/Shoreside Golf Carts - Golf Carts In and On the Shore Side 7_1756238208002.jpeg";
import image8 from "@assets/Shoreside Golf Carts - Golf Carts In and On the Shore Side 8_1756238208002.jpeg";
import image9 from "@assets/Shoreside Golf Carts - Golf Carts In and On the Shore Side 9_1756238208002.jpeg";

export const backgroundImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

// Page-specific background image assignments for consistency
export const pageBackgrounds = {
  home: image1,           // Suburban Golf Carts main residential scene for homepage
  inventory: image2,      // Suburban Golf Carts suburban display
  rentals: image3,        // Suburban Golf Carts neighborhood-focused view
  services: image4,       // Suburban Golf Carts professional residential service
  about: image5,          // Suburban Golf Carts welcoming suburban scene
  contact: image6,        // Suburban Golf Carts customer residential area
  showroom: image7,       // Suburban Golf Carts premium suburban showroom
  denago: image8,         // Suburban Golf Carts residential area for Denago vehicles
  evolution: image9,      // Suburban Golf Carts suburban scene for Evolution vehicles
  vehicle: image3,        // Suburban Golf Carts individual vehicle residential display
  vehicleDetail: image7,  // Suburban Golf Carts premium vehicle suburban showcase
  counties: image2,       // Suburban Golf Carts for state/community pages
  locations: image6,      // Suburban Golf Carts for location pages
  financing: image4,      // Suburban Golf Carts for financing pages
  policies: image5,       // Suburban Golf Carts for policy pages
  default: image1,        // Suburban Golf Carts main residential scene as fallback
};

// Function to get background image for a specific page
export const getPageBackground = (pageName: string): string => {
  return pageBackgrounds[pageName as keyof typeof pageBackgrounds] || pageBackgrounds.default;
};

// Function to get a random background image
export const getRandomBackground = (): string => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};

// Function to get a random background for vehicle pages
export const getRandomVehicleBackground = (): string => {
  // Use a subset of images that work well for vehicle displays
  const vehicleImages = [image3, image7, image8, image9];
  const randomIndex = Math.floor(Math.random() * vehicleImages.length);
  return vehicleImages[randomIndex];
};

// Function to get a random background for location pages
export const getRandomLocationBackground = (): string => {
  // Use residential-focused images for location pages
  const locationImages = [image1, image2, image5, image6];
  const randomIndex = Math.floor(Math.random() * locationImages.length);
  return locationImages[randomIndex];
};

// Function to get hero background style with overlay for readability
export const getHeroBackgroundStyle = (pageName: string) => {
  const backgroundImage = getPageBackground(pageName);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.75), rgba(14, 46, 85, 0.75)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};

// Function to get lighter background style for content sections
export const getLightBackgroundStyle = (pageName: string) => {
  const backgroundImage = getPageBackground(pageName);
  return {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};