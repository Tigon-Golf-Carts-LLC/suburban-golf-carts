import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { getBlogPostBySlug } from "@/data/blogPosts";
import NotFound from "@/pages/not-found";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const blogPost = getBlogPostBySlug(params.slug || "");

  if (!blogPost) {
    return <NotFound />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title,
    "description": blogPost.metaDescription,
    "datePublished": blogPost.publishDate,
    "author": {
      "@type": "Organization",
      "name": "Suburban Golf Carts"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Suburban Golf Carts",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.suburbangolfcarts.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.suburbangolfcarts.com/blog/${blogPost.slug}`
    }
  };

  return (
    <>
      <Helmet>
        <title>{blogPost.seoTitle}</title>
        <meta name="description" content={blogPost.metaDescription} />
        <meta property="og:title" content={blogPost.seoTitle} />
        <meta property="og:description" content={blogPost.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={blogPost.publishDate} />
        <link rel="canonical" href={`https://www.suburbangolfcarts.com/blog/${blogPost.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-white dark:bg-black min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Back to Blog Button */}
          <div className="mb-8">
            <Link href="/blog" data-testid="link-back-to-blog">
              <Button variant="ghost" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-4 w-4" />
                <time 
                  dateTime={blogPost.publishDate}
                  data-testid="blog-post-publish-date"
                >
                  {new Date(blogPost.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                {blogPost.featured && (
                  <span className="ml-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>

              {/* Hero Image */}
              {blogPost.heroImage.imageUrl && imageMap[blogPost.heroImage.imageUrl] && (
                <div className="mb-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img
                    src={imageMap[blogPost.heroImage.imageUrl]}
                    alt={blogPost.heroImage.altText}
                    className="w-full h-auto"
                    data-testid="blog-post-hero-image"
                  />
                </div>
              )}
            </header>

            {/* Blog Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-black dark:prose-headings:text-white
                prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-a:text-blue-600 dark:prose-a:text-blue-400
                prose-a:no-underline hover:prose-a:underline
                prose-strong:text-black dark:prose-strong:text-white
                prose-ul:text-gray-700 dark:prose-ul:text-gray-300
                prose-ol:text-gray-700 dark:prose-ol:text-gray-300
                prose-li:text-gray-700 dark:prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
              data-testid="blog-post-content"
            />
          </article>

          {/* Related Content / CTA */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
              Ready to Find Your Perfect Golf Cart?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium" data-testid="link-contact-from-blog">
                Contact Suburban Golf Carts
              </Link> today for personalized recommendations and expert guidance on choosing the right golf cart for your needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/inventory" data-testid="link-inventory-from-blog">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Inventory
                </Button>
              </Link>
              <Link href="/about" data-testid="link-about-from-blog">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/30">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link href="/blog" data-testid="link-all-posts">
              <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                ← View All Blog Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
