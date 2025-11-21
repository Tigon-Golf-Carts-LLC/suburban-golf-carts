import { useEffect } from "react";

interface OrganizationSchemaProps {
  pageType?: "home" | "about" | "contact" | "services";
}

export default function OrganizationSchema({ pageType = "home" }: OrganizationSchemaProps) {
  useEffect(() => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Suburban Golf Carts",
      "description": "Premier golf cart dealership serving all 50 states specializing in electric golf carts for residential areas, sales, service, rentals, and financing for suburban communities nationwide.",
      "url": "https://suburbangolfcarts.com",
      "logo": "https://suburbangolfcarts.com/attached_assets/Shoreside Golf Carts (1)_1756300346412.png",
      "image": "https://suburbangolfcarts.com/attached_assets/Shoreside Golf Carts (1)_1756300346412.png",
      "telephone": "1-844-844-6638",
      "email": "info@suburbangolfcarts.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "642 NJ-35",
        "addressLocality": "Neptune City",
        "addressRegion": "NJ",
        "postalCode": "07753",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.2005",
        "longitude": "-74.0313"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-17:00"
      ],
      "serviceArea": {
        "@type": "AdministrativeArea",
        "name": "All 50 United States - Residential & Suburban Communities"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Golf Cart Services & Products",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Denago Electric Golf Carts",
              "category": "Electric Golf Carts"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Evolution Electric Golf Carts",
              "category": "Electric Golf Carts"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Sales",
              "category": "Sales Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Rentals",
              "category": "Rental Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Maintenance & Repair",
              "category": "Maintenance Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Financing",
              "category": "Financial Service"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/suburbangolfcarts",
        "https://www.instagram.com/suburbangolfcarts",
        "https://www.linkedin.com/company/suburbangolfcarts"
      ]
    };

    // Add page-specific schema
    let structuredData = baseStructuredData;

    if (pageType === "about") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "foundingDate": "2015",
        "numberOfEmployees": "15-25"
      } as any;
    } else if (pageType === "contact") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "(215) 555-0123",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      } as any;
    } else if (pageType === "services") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "provider": {
          "@type": "Organization",
          "name": "Suburban Golf Carts"
        }
      } as any;
    }

    const existingScript = document.querySelector('script[type="application/ld+json"][data-organization]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-organization", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-organization]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [pageType]);

  return null;
}