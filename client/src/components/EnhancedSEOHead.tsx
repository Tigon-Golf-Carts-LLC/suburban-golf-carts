import { Helmet } from "react-helmet-async";
import { getPageBackground } from "@/utils/backgroundImages";

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  heroImage?: string;
  pageName?: string;
  ogType?: string;
  customImage?: string;
}

export interface PageSEOConfig {
  h1Text: string;
  benefitSentence: string;
  keywords?: string;
  pageName?: string;
  canonicalUrl?: string;
  ogType?: string;
  customImage?: string;
}

// Utility to build SEO metadata from page config
export function buildSEOMetadata(config: PageSEOConfig): SEOMetadata {
  const title = config.h1Text;
  const description = `${config.benefitSentence} Call 1-844-844-6638.`;
  
  // Get hero image - priority: customImage > pageName background > fallback
  let heroImage = "/attached_assets/Shoreside Golf Carts (1)_1756300346412.png"; // fallback logo
  
  if (config.customImage) {
    heroImage = config.customImage;
  } else if (config.pageName) {
    const pageBackground = getPageBackground(config.pageName);
    if (pageBackground && typeof pageBackground === 'string') {
      heroImage = pageBackground;
    }
  }
  
  return {
    title,
    description,
    keywords: config.keywords || "golf carts, suburban golf carts, residential golf carts, Denago, Evolution, electric golf carts, neighborhood transportation, all 50 states",
    canonicalUrl: config.canonicalUrl,
    heroImage,
    pageName: config.pageName,
    ogType: config.ogType || "website"
  };
}

interface EnhancedSEOHeadProps {
  config: PageSEOConfig;
}

export default function EnhancedSEOHead({ config }: EnhancedSEOHeadProps) {
  const metadata = buildSEOMetadata(config);
  const fullImageUrl = metadata.heroImage?.startsWith('http') 
    ? metadata.heroImage 
    : `https://www.suburbangolfcarts.com${metadata.heroImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      {metadata.canonicalUrl && <link rel="canonical" href={metadata.canonicalUrl} />}
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/png" href="/attached_assets/Shoreside Golf Carts (1)_1756300346412.png" />
      <link rel="apple-touch-icon" href="/attached_assets/Shoreside Golf Carts (1)_1756300346412.png" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content={metadata.ogType} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Suburban Golf Carts" />
      <meta property="og:locale" content="en_US" />
      {metadata.canonicalUrl && <meta property="og:url" content={metadata.canonicalUrl} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@suburbangolfcarts" />
      <meta name="twitter:creator" content="@suburbangolfcarts" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Suburban Golf Carts" />
      <meta name="publisher" content="Suburban Golf Carts" />
      <meta name="theme-color" content="#0e2e55" />
      <meta name="msapplication-navbutton-color" content="#0e2e55" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#0e2e55" />
      
      {/* Business Information */}
      <meta name="contact" content="info@suburbangolfcarts.com" />
      <meta name="phone" content="1-844-844-6638" />
      <meta name="geography" content="All 50 United States" />
      <meta name="region" content="US-Nationwide" />
    </Helmet>
  );
}

// Helper function to create SEO config for different page types
export const createPageSEOConfig = {
  home: (): PageSEOConfig => ({
    h1Text: "Suburban Golf Carts - Premier Nationwide Residential Golf Cart Dealership",
    benefitSentence: "Discover premium electric golf carts from DENAGO and Evolution serving residential areas and suburban communities across all 50 states with expert sales, service, and rentals.",
    keywords: "suburban golf carts, residential golf carts, neighborhood electric vehicles, DENAGO Evolution dealer, golf carts for residential areas, all 50 states, Alabama Alaska Arizona Arkansas California Colorado Connecticut Delaware Florida Georgia Hawaii Idaho Illinois Indiana Iowa Kansas Kentucky Louisiana Maine Maryland Massachusetts Michigan Minnesota Mississippi Missouri Montana Nebraska Nevada New Hampshire New Jersey New Mexico New York North Carolina North Dakota Ohio Oklahoma Oregon Pennsylvania Rhode Island South Carolina South Dakota Tennessee Texas Utah Vermont Virginia Washington West Virginia Wisconsin Wyoming",
    pageName: "home",
    canonicalUrl: "https://www.suburbangolfcarts.com/",
    ogType: "website"
  }),
  
  about: (): PageSEOConfig => ({
    h1Text: "About Suburban Golf Carts - Nationwide Residential Golf Cart Experts Since 2008",
    benefitSentence: "Learn about the nation's premier golf cart dealership with expert team, authorized DENAGO and Evolution dealer serving suburban and residential communities across all 50 states.",
    keywords: "about Suburban Golf Carts, residential golf cart dealership, suburban golf carts, DENAGO Evolution dealer, neighborhood golf cart service",
    pageName: "about",
    canonicalUrl: "https://www.suburbangolfcarts.com/about",
    ogType: "website"
  }),
  
  contact: (): PageSEOConfig => ({
    h1Text: "Contact Suburban Golf Carts - Your Residential Golf Cart Experts",
    benefitSentence: "Contact the nation's premier golf cart dealership for sales, service, and rentals throughout residential and suburban communities nationwide.",
    keywords: "contact Suburban Golf Carts, residential golf cart dealer, suburban golf cart service, DENAGO Evolution sales",
    pageName: "contact",
    canonicalUrl: "https://www.suburbangolfcarts.com/contact",
    ogType: "website"
  }),
  
  inventory: (): PageSEOConfig => ({
    h1Text: "Golf Cart Inventory - Premium DENAGO & Evolution Electric Carts",
    benefitSentence: "Browse our premium DENAGO and Evolution electric golf cart inventory serving residential and suburban communities across all 50 states.",
    keywords: "golf cart inventory, DENAGO Evolution electric carts, suburban golf carts, residential golf carts for sale",
    pageName: "inventory",
    canonicalUrl: "https://www.suburbangolfcarts.com/inventory",
    ogType: "website"
  }),
  
  services: (): PageSEOConfig => ({
    h1Text: "Professional Golf Cart Services - Sales, Service & Rentals",
    benefitSentence: "Professional golf cart sales, service, and rental solutions throughout residential and suburban communities nationwide.",
    keywords: "golf cart services, residential golf cart service, suburban golf cart maintenance, DENAGO Evolution service",
    pageName: "services",
    canonicalUrl: "https://www.suburbangolfcarts.com/services",
    ogType: "website"
  }),
  
  rentals: (): PageSEOConfig => ({
    h1Text: "Golf Cart Rentals - Residential & Suburban Community Transportation",
    benefitSentence: "Premium golf cart rentals for suburban and residential communities nationwide with daily, weekly, and monthly options.",
    keywords: "golf cart rentals, suburban rentals, residential transportation, neighborhood golf carts",
    pageName: "rentals",
    canonicalUrl: "https://www.suburbangolfcarts.com/rentals",
    ogType: "website"
  }),
  
  financing: (): PageSEOConfig => ({
    h1Text: "Golf Cart Financing - Easy Payment Plans & Options",
    benefitSentence: "Flexible golf cart financing options and payment plans for DENAGO and Evolution electric carts in residential areas nationwide.",
    keywords: "golf cart financing, residential golf cart loans, suburban golf cart payment plans, DENAGO Evolution financing",
    pageName: "financing",
    canonicalUrl: "https://www.suburbangolfcarts.com/financing",
    ogType: "website"
  }),
  
  // Specialty pages
  showroom: (): PageSEOConfig => ({
    h1Text: "Suburban Golf Carts Residential Showroom",
    benefitSentence: "Visit our premier showroom featuring the complete lineup of DENAGO and Evolution electric vehicles serving residential and suburban communities across all 50 states.",
    keywords: "Suburban golf carts showroom, residential golf cart dealership, DENAGO Evolution suburban locations, neighborhood golf cart sales",
    pageName: "showroom",
    canonicalUrl: "https://www.suburbangolfcarts.com/showroom",
    ogType: "website"
  }),
  
  thankYou: (): PageSEOConfig => ({
    h1Text: "Thank You!",
    benefitSentence: "Thank you for contacting Suburban Golf Carts, we'll respond to your residential golf cart inquiry within 24 hours.",
    keywords: "thank you, contact confirmation, Suburban Golf Carts, residential golf carts",
    pageName: "thankyou",
    canonicalUrl: "https://www.suburbangolfcarts.com/thank-you",
    ogType: "website"
  }),
  
  // Policy pages
  privacyPolicy: (): PageSEOConfig => ({
    h1Text: "Privacy Policy",
    benefitSentence: "Review Suburban Golf Carts' privacy policy to understand how we protect your personal information across all residential communities.",
    keywords: "privacy policy, data protection, personal information, Suburban Golf Carts",
    pageName: "policy",
    canonicalUrl: "https://www.suburbangolfcarts.com/privacy-policy",
    ogType: "website"
  }),
  
  termsOfService: (): PageSEOConfig => ({
    h1Text: "Terms of Service",
    benefitSentence: "Review Suburban Golf Carts' terms of service for purchasing golf carts, rental services, and website usage across residential locations.",
    keywords: "terms of service, terms and conditions, golf cart purchase, rental agreement, Suburban Golf Carts",
    pageName: "policy",
    canonicalUrl: "https://www.suburbangolfcarts.com/terms-of-service",
    ogType: "website"
  }),
  
  correctionsPolicy: (): PageSEOConfig => ({
    h1Text: "Corrections Policy",
    benefitSentence: "Learn about Suburban Golf Carts' commitment to accuracy and transparent process for handling corrections to published content and information.",
    keywords: "corrections policy, content accuracy, Suburban Golf Carts, information corrections",
    pageName: "policy",
    canonicalUrl: "https://www.suburbangolfcarts.com/policies/corrections",
    ogType: "website"
  }),
  
  deliveryPolicy: (): PageSEOConfig => ({
    h1Text: "Delivery Policy",
    benefitSentence: "Comprehensive golf cart delivery services throughout residential and suburban communities nationwide with free delivery zones and professional transport.",
    keywords: "delivery policy, golf cart delivery, residential delivery, golf cart shipping",
    pageName: "policy",
    canonicalUrl: "https://www.suburbangolfcarts.com/policies/delivery",
    ogType: "website"
  }),
  
  diversityPolicy: (): PageSEOConfig => ({
    h1Text: "Diversity & Inclusion Policy", 
    benefitSentence: "Learn about Suburban Golf Carts' commitment to diversity, equity, and inclusion in our workplace and customer service practices nationwide.",
    keywords: "diversity policy, equity inclusion, Suburban Golf Carts, workplace diversity",
    pageName: "policy",
    canonicalUrl: "https://www.suburbangolfcarts.com/policies/diversity",
    ogType: "website"
  }),
  
  ethicsPolicy: (): PageSEOConfig => ({
    h1Text: "Ethics Policy",
    benefitSentence: "Learn about Suburban Golf Carts' code of ethics and business conduct standards serving customers throughout residential communities nationwide.",
    keywords: "ethics policy, business ethics, Suburban Golf Carts, code of conduct",
    pageName: "policy",
    canonicalUrl: "https://www.suburbangolfcarts.com/policies/ethics",
    ogType: "website"
  }),
  
  feedbackPolicy: (): PageSEOConfig => ({
    h1Text: "Feedback Policy",
    benefitSentence: "Learn how to provide feedback to Suburban Golf Carts and our commitment to customer feedback and continuous improvement across residential locations.",
    keywords: "feedback policy, customer feedback, Suburban Golf Carts, customer service policy",
    pageName: "policy",
    canonicalUrl: "https://www.suburbangolfcarts.com/policies/feedback",
    ogType: "website"
  }),
  
  returnPolicy: (): PageSEOConfig => ({
    h1Text: "Return Policy",
    benefitSentence: "Learn about Suburban Golf Carts return policy for golf cart purchases, accessories, and parts across residential locations nationwide.",
    keywords: "return policy, golf cart returns, Suburban Golf Carts, refund policy",
    pageName: "policy",
    canonicalUrl: "https://www.suburbangolfcarts.com/policies/return",
    ogType: "website"
  }),
  
  rentalPolicy: (): PageSEOConfig => ({
    h1Text: "Rental Policy",
    benefitSentence: "Complete golf cart rental policy for Suburban Golf Carts with rental requirements, responsibilities, and terms throughout residential communities.",
    keywords: "rental policy, golf cart rental, residential rentals, golf cart rental policy",
    pageName: "policy",
    canonicalUrl: "https://www.suburbangolfcarts.com/policies/rental",
    ogType: "website"
  }),
  
  // Vehicle-specific configs
  denagoEvNomad: (): PageSEOConfig => ({
    h1Text: "EV NOMAD",
    benefitSentence: "Discover the DENAGO EV NOMAD designed for outdoor adventures and off-road capability with 45-60 mile range, perfect for suburban residential areas.",
    keywords: "DENAGO EV NOMAD, adventure electric vehicle, off-road golf cart, outdoor recreation, DENAGO dealer residential",
    pageName: "vehicle",
    canonicalUrl: "https://www.suburbangolfcarts.com/vehicles/denago-ev-nomad",
    ogType: "product"
  }),
  
  denagoEvCityPage: (): PageSEOConfig => ({
    h1Text: "EV CITY",
    benefitSentence: "Discover the DENAGO EV CITY lineup with urban mobility features and street-legal NEV certification, perfect for suburban neighborhood transportation.",
    keywords: "DENAGO EV CITY, street legal electric vehicle, NEV, urban mobility, DENAGO dealer residential",
    pageName: "vehicle",
    canonicalUrl: "https://www.suburbangolfcarts.com/vehicles/denago-ev-city",
    ogType: "product"
  }),
  
  evolutionClassic4Plus: (): PageSEOConfig => ({
    h1Text: "CLASSIC 4 PLUS",
    benefitSentence: "Experience the Evolution Classic 4 Plus with timeless design and modern electric performance combining classic styling with contemporary technology for residential areas.",
    keywords: "Evolution Classic 4 Plus, classic golf cart, premium electric vehicle, traditional styling, Evolution dealer residential",
    pageName: "vehicle",
    canonicalUrl: "https://www.suburbangolfcarts.com/vehicles/evolution-classic-4-plus",
    ogType: "product"
  }),
  
  denagoEvCity: (): PageSEOConfig => ({
    h1Text: "DENAGO EV City - Street Legal Electric Golf Cart $11,995",
    benefitSentence: "Discover the DENAGO EV City street-legal electric golf cart with 25 mph capability and 35-mile range, perfect for suburban residential communities.",
    keywords: "DENAGO EV City, street legal golf cart, LSV low speed vehicle, 25 mph golf cart, residential electric vehicle",
    pageName: "vehicle",
    canonicalUrl: "https://www.suburbangolfcarts.com/vehicles/denago-ev-city",
    ogType: "product"
  }),
  
  // Generic vehicle config generator
  vehicle: (vehicleName: string, brand: string, price?: string): PageSEOConfig => ({
    h1Text: price ? `${vehicleName} - ${brand} Electric Golf Cart ${price}` : vehicleName,
    benefitSentence: `Discover the ${brand} ${vehicleName} electric golf cart with premium features and reliability, available throughout residential and suburban communities nationwide.`,
    keywords: `${brand} ${vehicleName}, ${brand} electric golf cart, residential electric vehicle, suburban golf cart ${vehicleName}`,
    pageName: "vehicle",
    canonicalUrl: `https://www.suburbangolfcarts.com/vehicles/${vehicleName.toLowerCase().replace(/\s+/g, '-')}`,
    ogType: "product"
  }),
  
  // Location-specific config generator
  location: (locationName: string, state: string): PageSEOConfig => ({
    h1Text: `${locationName} Golf Carts - Premium Residential Transportation Solutions`,
    benefitSentence: `Premium golf cart sales, service, and rentals in ${locationName}, ${state} with DENAGO and Evolution electric vehicles for residential and suburban communities.`,
    keywords: `${locationName} golf carts, ${state} residential golf carts, ${locationName} electric vehicles, suburban golf cart dealer`,
    pageName: "locations",
    canonicalUrl: `https://www.suburbangolfcarts.com/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    ogType: "website"
  }),
  
  // Generic policy config generator
  policy: (policyName: string): PageSEOConfig => ({
    h1Text: policyName,
    benefitSentence: `Learn about Suburban Golf Carts' ${policyName.toLowerCase()} serving customers throughout residential and suburban communities nationwide.`,
    keywords: `${policyName.toLowerCase()}, Suburban Golf Carts policies, residential golf cart dealer`,
    pageName: "policy", 
    canonicalUrl: `https://www.suburbangolfcarts.com/policies/${policyName.toLowerCase().replace(/\s+/g, '-')}`,
    ogType: "website"
  })
};
