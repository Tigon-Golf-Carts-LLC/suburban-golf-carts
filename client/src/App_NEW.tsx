import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import RentalsPage from "@/pages/RentalsPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import DenagoPage from "@/pages/DenagoPage";
import EvolutionPage from "@/pages/EvolutionPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";
import ContactPage from "@/pages/ContactPage";
import ThankYouPage from "@/pages/ThankYouPage";
import ShowroomPage from "@/pages/ShowroomPage";
import NotFound from "@/pages/not-found";
import NewInventoryPage from "@/pages/NewInventoryPage";
import NewServicesPage from "@/pages/NewServicesPage";
import NewAboutPage from "@/pages/NewAboutPage";

import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";

// Policy Pages
import TermsConditionsPage from "@/pages/policies/TermsConditionsPage";
import ReturnPolicyPage from "@/pages/policies/ReturnPolicyPage";
import DeliveryPolicyPage from "@/pages/policies/DeliveryPolicyPage";
import RentalPolicyPage from "@/pages/policies/RentalPolicyPage";
import StoragePolicyPage from "@/pages/policies/StoragePolicyPage";
import PublishingPolicyPage from "@/pages/policies/PublishingPolicyPage";
import FeedbackPolicyPage from "@/pages/policies/FeedbackPolicyPage";
import CorrectionsPolicyPage from "@/pages/policies/CorrectionsPolicyPage";
import DiversityPolicyPage from "@/pages/policies/DiversityPolicyPage";
import EthicsPolicyPage from "@/pages/policies/EthicsPolicyPage";
import StaffingReportPage from "@/pages/policies/StaffingReportPage";

// Eastern Coastline State Pages
import {
  MainePage, NewHampshirePage, MassachusettsPage, RhodeIslandPage, ConnecticutPage,
  NewYorkPage, NewJerseyPage, DelawarePage, MarylandPage, VirginiaPage,
  NorthCarolinaPage, SouthCarolinaPage, GeorgiaPage, FloridaPage
} from "@/pages/locations/EasternCoastlineStatePages";

// Vehicle Detail Pages
import DenagoEvCityPage from "@/pages/vehicles/DenagoEvCityPage";
import DenagoEvNomadPage from "@/pages/vehicles/DenagoEvNomadPage";
import DenagoEvNomadXlPage from "@/pages/vehicles/DenagoEvNomadXlPage";
import DenagoEvRoverXlPage from "@/pages/vehicles/DenagoEvRoverXlPage";
import DenagoEvRoverXl6Page from "@/pages/vehicles/DenagoEvRoverXl6Page";
import DenagoEvRoverXxlPage from "@/pages/vehicles/DenagoEvRoverXxlPage";
import EvolutionD5Ranger4PlusPage from "@/pages/vehicles/EvolutionD5Ranger4PlusPage";
import EvolutionD5Ranger6PlusPage from "@/pages/vehicles/EvolutionD5Ranger6PlusPage";
import EvolutionD5Maverick4PlusPage from "@/pages/vehicles/EvolutionD5Maverick4PlusPage";
import EvolutionClassic4PlusPage from "@/pages/vehicles/EvolutionClassic4PlusPage";
import EvolutionCarrier6PlusPage from "@/pages/vehicles/EvolutionCarrier6PlusPage";
import EvolutionD6MaxXt4Page from "@/pages/vehicles/EvolutionD6MaxXt4Page";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

export default function App() {
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Switch>
            {/* Main Pages */}
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />

            <Route path="/denago" component={DenagoPage} />
            <Route path="/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsOfServicePage} />
            
            {/* Policy Pages */}
            <Route path="/policies/terms-conditions" component={TermsConditionsPage} />
            <Route path="/policies/return-policy" component={ReturnPolicyPage} />
            <Route path="/policies/delivery-policy" component={DeliveryPolicyPage} />
            <Route path="/policies/rental-policy" component={RentalPolicyPage} />
            <Route path="/policies/storage-policy" component={StoragePolicyPage} />
            <Route path="/policies/publishing-policy" component={PublishingPolicyPage} />
            <Route path="/policies/feedback-policy" component={FeedbackPolicyPage} />
            <Route path="/policies/corrections-policy" component={CorrectionsPolicyPage} />
            <Route path="/policies/diversity-policy" component={DiversityPolicyPage} />
            <Route path="/policies/ethics-policy" component={EthicsPolicyPage} />
            <Route path="/policies/staffing-report" component={StaffingReportPage} />
            
            {/* Eastern Coastline State Pages */}
            <Route path="/maine-golf-carts" component={MainePage} />
            <Route path="/new-hampshire-golf-carts" component={NewHampshirePage} />
            <Route path="/massachusetts-golf-carts" component={MassachusettsPage} />
            <Route path="/rhode-island-golf-carts" component={RhodeIslandPage} />
            <Route path="/connecticut-golf-carts" component={ConnecticutPage} />
            <Route path="/new-york-golf-carts" component={NewYorkPage} />
            <Route path="/new-jersey-golf-carts" component={NewJerseyPage} />
            <Route path="/delaware-golf-carts" component={DelawarePage} />
            <Route path="/maryland-golf-carts" component={MarylandPage} />
            <Route path="/virginia-golf-carts" component={VirginiaPage} />
            <Route path="/north-carolina-golf-carts" component={NorthCarolinaPage} />
            <Route path="/south-carolina-golf-carts" component={SouthCarolinaPage} />
            <Route path="/georgia-golf-carts" component={GeorgiaPage} />
            <Route path="/florida-golf-carts" component={FloridaPage} />
            
            {/* Vehicle Detail Pages */}
            {/* DENAGO Vehicles */}
            <Route path="/vehicles/denago-ev-city" component={DenagoEvCityPage} />
            <Route path="/vehicles/denago-ev-nomad" component={DenagoEvNomadPage} />
            <Route path="/vehicles/denago-ev-nomad-xl" component={DenagoEvNomadXlPage} />
            <Route path="/vehicles/denago-ev-rover-xl" component={DenagoEvRoverXlPage} />
            <Route path="/vehicles/denago-ev-rover-xl6" component={DenagoEvRoverXl6Page} />
            <Route path="/vehicles/denago-ev-rover-xxl" component={DenagoEvRoverXxlPage} />
            
            {/* EVOLUTION Vehicles */}
            <Route path="/vehicles/evolution-d5-ranger-4-plus" component={EvolutionD5Ranger4PlusPage} />
            <Route path="/vehicles/evolution-d5-ranger-6-plus" component={EvolutionD5Ranger6PlusPage} />
            <Route path="/vehicles/evolution-d5-maverick-4-plus" component={EvolutionD5Maverick4PlusPage} />
            <Route path="/vehicles/evolution-classic-4-plus" component={EvolutionClassic4PlusPage} />
            <Route path="/vehicles/evolution-carrier-6-plus" component={EvolutionCarrier6PlusPage} />
            <Route path="/vehicles/evolution-d6-max-xt4" component={EvolutionD6MaxXt4Page} />
            
            {/* 404 Page */}
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}