import { NEW_CASTLE_COUNTY_MUNICIPALITIES, Municipality as NewCastleMunicipality } from './newCastleCountyMunicipalities';
import { KENT_COUNTY_MUNICIPALITIES, Municipality as KentMunicipality } from './kentCountyMunicipalities';
import { SUSSEX_COUNTY_MUNICIPALITIES, Municipality as SussexMunicipality } from './sussexCountyMunicipalities';

// Unified municipality interface
export type Municipality = NewCastleMunicipality & KentMunicipality & SussexMunicipality;

// All Delaware municipalities by county
export const ALL_DELAWARE_MUNICIPALITIES = {
  'New Castle': NEW_CASTLE_COUNTY_MUNICIPALITIES,
  'Kent': KENT_COUNTY_MUNICIPALITIES,
  'Sussex': SUSSEX_COUNTY_MUNICIPALITIES
};

// Flattened list of all municipalities
export const DELAWARE_MUNICIPALITIES_LIST = [
  ...NEW_CASTLE_COUNTY_MUNICIPALITIES,
  ...KENT_COUNTY_MUNICIPALITIES,
  ...SUSSEX_COUNTY_MUNICIPALITIES
];

// Helper function to get municipality by slug
export const getMunicipalityBySlug = (slug: string): Municipality | undefined => {
  return DELAWARE_MUNICIPALITIES_LIST.find(municipality => municipality.slug === slug);
};

// Helper function to get municipalities by county
export const getMunicipalitiesByCounty = (countyName: 'New Castle' | 'Kent' | 'Sussex'): Municipality[] => {
  return ALL_DELAWARE_MUNICIPALITIES[countyName];
};