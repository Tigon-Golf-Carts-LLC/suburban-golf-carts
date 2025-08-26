import CountyPageTemplate from "./CountyPageTemplate";
import { DELAWARE_COUNTIES } from "@/data/delawareCounties";
import { NEW_CASTLE_COUNTY_MUNICIPALITIES } from "@/data/newCastleCountyMunicipalities";

export default function NewCastleCountyPage() {
  const county = DELAWARE_COUNTIES.find(c => c.slug === 'new-castle-county')!;
  return <CountyPageTemplate county={county} municipalities={NEW_CASTLE_COUNTY_MUNICIPALITIES} />;
}