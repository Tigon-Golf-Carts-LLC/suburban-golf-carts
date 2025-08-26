import CountyPageTemplate from "./CountyPageTemplate";
import { DELAWARE_COUNTIES } from "@/data/delawareCounties";
import { SUSSEX_COUNTY_MUNICIPALITIES } from "@/data/sussexCountyMunicipalities";

export default function SussexCountyPage() {
  const county = DELAWARE_COUNTIES.find(c => c.slug === 'sussex-county')!;
  return <CountyPageTemplate county={county} municipalities={SUSSEX_COUNTY_MUNICIPALITIES} />;
}