import CountyPageTemplate from "./CountyPageTemplate";
import { DELAWARE_COUNTIES } from "@/data/delawareCounties";
import { KENT_COUNTY_MUNICIPALITIES } from "@/data/kentCountyMunicipalities";

export default function KentCountyPage() {
  const county = DELAWARE_COUNTIES.find(c => c.slug === 'kent-county')!;
  return <CountyPageTemplate county={county} municipalities={KENT_COUNTY_MUNICIPALITIES} />;
}