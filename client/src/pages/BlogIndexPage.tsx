import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { getAllBlogPosts } from "@/data/blogPosts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

// Import all blog hero images
import golfCartOnHill from "@assets/generated_images/golf_cart_on_hill.png";
import golfCartDealershipStorefront from "@assets/generated_images/golf_cart_dealership_storefront.png";
import affordableElectricGolfCart from "@assets/generated_images/affordable_electric_golf_cart.png";
import familyInGolfCart from "@assets/generated_images/family_in_golf_cart.png";
import comparingGolfCartModels from "@assets/generated_images/comparing_golf_cart_models.png";
import golfCartPriceComparison from "@assets/generated_images/golf_cart_price_comparison.png";
import weatherResistantGolfCart from "@assets/generated_images/weather-resistant_golf_cart.png";
import customGolfCartDesign from "@assets/generated_images/custom_golf_cart_design.png";
import testDrivingGolfCart from "@assets/generated_images/test_driving_golf_cart.png";
import golfCartMaintenanceService from "@assets/generated_images/golf_cart_maintenance_service.png";

// Map image URLs to imported images
const imageMap: Record<string, string> = {
  "@assets/generated_images/golf_cart_on_hill.png": golfCartOnHill,
  "@assets/generated_images/golf_cart_dealership_storefront.png": golfCartDealershipStorefront,
  "@assets/generated_images/affordable_electric_golf_cart.png": affordableElectricGolfCart,
  "@assets/generated_images/family_in_golf_cart.png": familyInGolfCart,
  "@assets/generated_images/comparing_golf_cart_models.png": comparingGolfCartModels,
  "@assets/generated_images/golf_cart_price_comparison.png": golfCartPriceComparison,
  "@assets/generated_images/weather-resistant_golf_cart.png": weatherResistantGolfCart,
  "@assets/generated_images/custom_golf_cart_design.png": customGolfCartDesign,
  "@assets/generated_images/test_driving_golf_cart.png": testDrivingGolfCart,
  "@assets/generated_images/golf_cart_maintenance_service.png": golfCartMaintenanceService,
};

export default function BlogIndexPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      <Helmet>
        <title>Suburban Golf Carts Blog - Expert Tips, Reviews & Guides</title>
        <meta
          name="description"
          content="Expert advice on suburban golf carts including buying guides, maintenance tips, reviews, and comparisons. Serving all 50 US states with professional golf cart insights."
        />
        <meta property="og:title" content="Suburban Golf Carts Blog - Expert Tips, Reviews & Guides" />
        <meta property="og:description" content="Expert advice on suburban golf carts including buying guides, maintenance tips, reviews, and comparisons across all 50 US states." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.suburbangolfcarts.com/blog" />
      </Helmet>

      <div className="bg-white dark:bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4" data-testid="blog-index-title">
              Suburban Golf Carts Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="blog-index-description">
              Expert guides, reviews, and insights to help you choose, maintain, and enjoy your suburban golf cart. 
              From buying advice to maintenance tips, we cover everything you need to know about electric golf carts 
              across all 50 United States.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group"
                data-testid={`blog-post-card-${post.id}`}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  {/* Hero Image */}
                  {post.heroImage.imageUrl && imageMap[post.heroImage.imageUrl] && (
                    <div className="aspect-video overflow-hidden border-b border-gray-200 dark:border-gray-700">
                      <img
                        src={imageMap[post.heroImage.imageUrl]}
                        alt={post.heroImage.altText}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-testid={`blog-post-hero-image-${post.id}`}
                      />
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="h-4 w-4" />
                      <time 
                        dateTime={post.publishDate}
                        data-testid={`blog-post-date-${post.id}`}
                      >
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      {post.featured && (
                        <span className="ml-auto bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <CardTitle 
                      className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-black dark:text-white"
                      data-testid={`blog-post-title-${post.id}`}
                    >
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription 
                      className="text-gray-600 dark:text-gray-400 line-clamp-3"
                      data-testid={`blog-post-excerpt-${post.id}`}
                    >
                      {post.excerpt}
                    </CardDescription>
                    <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
                      Read More →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
