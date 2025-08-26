import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CreditCard, Calculator, DollarSign, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function FinancingPage() {
  const financingOptions = [
    {
      title: "Get the Yard Card",
      subtitle: "Buy Now, Pay Later With The Yard Card.*",
      description: "Flexible payment options for your golf cart purchase",
      buttonText: "Quick Apply⟶",
      url: "https://finance.consumercreditapp.com/cc/landing/yard_card",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Prequalify Now!",
      subtitle: "Get prequalified with no impact to your credit.*",
      description: "Check your financing options without affecting your credit score",
      buttonText: "Quick Apply⟶", 
      url: "https://prequalify.sheffieldfinancial.com/Apply/Dealer/56712?source=web",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Rent To Own",
      subtitle: "Helping Golf Cart Customers Achieve Ownership.*",
      description: "Start with rental payments that build toward ownership",
      buttonText: "Quick Apply⟶",
      url: "https://blirentals.com/app/TIGON_GOLFCARTS_LLC",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      title: "DLL Financial Solutions",
      subtitle: "Professional Equipment Financing",
      description: "Commercial and business financing solutions available",
      buttonText: "Quick Apply⟶",
      url: "https://applynow-cica-prd.dllgroup.com/?entityId=4&dealerCode=015639",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "GLL Financial Solutions",
      subtitle: "The lowest APR without hidden fees",
      description: "Competitive rates with transparent pricing",
      buttonText: "Quick Apply⟶",
      url: "#",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: "Roadrunner Financial",
      subtitle: "Consumer Financing",
      description: "Streamlined financing for personal purchases",
      buttonText: "Quick Apply⟶",
      url: "#",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "Univest Capital",
      subtitle: "UNIVEST CAPITAL",
      description: "Comprehensive financing solutions for your needs",
      buttonText: "Quick Apply⟶",
      url: "#",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      title: "Dealer Direct Financing",
      subtitle: "Buy Now, Pay with Direct Financing",
      description: "Work directly with our financing team for personalized solutions",
      buttonText: "Quick Apply⟶",
      url: "#",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    }
  ];

  const benefits = [
    "Competitive interest rates starting as low as 0% APR*",
    "Flexible payment terms from 12 to 84 months",
    "Quick approval process, often within minutes",
    "No prepayment penalties",
    "Multiple financing partners for best rates",
    "Personal and commercial financing available"
  ];

  return (
    <>
      <SEOHead 
        title="Golf Cart Financing | Delaware Golf Carts | Street Legal LSV & NEV Financing"
        description="Apply for flexible golf cart financing with Delaware Golf Carts. Multiple financing options available for DENAGO and EVOLUTION electric vehicles. Quick approval and competitive rates."
        keywords="golf cart financing, Delaware golf cart loans, LSV financing, NEV financing, electric vehicle financing, golf cart payment plans"
        canonicalUrl="https://delawaregolfcarts.com/financing"
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_ZIJgnM0qSLqCnmqzAiha0w_Tcds7ckvRe6FNLFDKo_aDg_1755541056710.jpeg"
        ogType="website"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative py-20 px-4 text-white overflow-hidden"
          style={getHeroBackgroundStyle('financing')}
        >
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Apply For Street Legal LSV, NEV &<br />Golf Cart Financing
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              At Delaware Golf Carts, we understand that financing your purchase is an important aspect of the buying process. 
              That's why we offer flexible financing options to suit every budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Calculator className="w-5 h-5 mr-2" />
                View Financing Options
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Flexible Financing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Whether you're looking for low monthly payments or competitive interest rates, our financing team is here to help you 
                find the perfect solution for your DENAGO or EVOLUTION golf cart purchase.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financing Options Grid */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Choose Your Financing Partner
              </h2>
              <p className="text-xl text-gray-600">
                Multiple financing options to fit your budget and credit situation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {financingOptions.map((option, index) => (
                <Card key={index} className={`${option.bgColor} ${option.borderColor} border-2 hover:shadow-lg transition-all duration-300 group`}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CreditCard className="w-8 h-8 text-theme-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="font-semibold text-gray-700">
                      {option.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {option.description}
                    </p>
                    <a 
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        className="w-full bg-theme-primary hover:bg-theme-primary/90 text-white group-hover:scale-105 transition-transform"
                        size="sm"
                      >
                        {option.buttonText}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Why Choose Our Financing Options?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Competitive Rates</h3>
                      <p className="text-gray-600">We work with multiple lenders to secure the best possible rates for your situation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calculator className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Flexible Terms</h3>
                      <p className="text-gray-600">Choose payment terms that work with your budget, from 12 to 84 months.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Quick Approval</h3>
                      <p className="text-gray-600">Get approved quickly with our streamlined application process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-theme-primary/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">
                  Contact our financing team today to discuss your options and find the perfect financing solution for your new golf cart.
                </p>
                <div className="space-y-3">
                  <a href="tel:1-844-844-6638">
                    <Button size="lg" className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                      Call 1-844-844-6638
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="w-full">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Contact Our Finance Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-gray-500">
              *Subject to credit approval. Terms and conditions apply. APR varies based on creditworthiness and other factors. 
              Not all applicants will qualify for promotional rates. See financing partner for complete terms and conditions.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}