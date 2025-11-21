import StateLocationPageTemplate from "./StateLocationPageTemplate";
import { ALL_US_STATES } from "@/data/all50states";

// Maine
export const MainePage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'maine')!;
  return <StateLocationPageTemplate state={state} />;
};

// New Hampshire
export const NewHampshirePage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'new-hampshire')!;
  return <StateLocationPageTemplate state={state} />;
};

// Massachusetts
export const MassachusettsPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'massachusetts')!;
  return <StateLocationPageTemplate state={state} />;
};

// Rhode Island
export const RhodeIslandPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'rhode-island')!;
  return <StateLocationPageTemplate state={state} />;
};

// Connecticut
export const ConnecticutPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'connecticut')!;
  return <StateLocationPageTemplate state={state} />;
};

// New York
export const NewYorkPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'new-york')!;
  return <StateLocationPageTemplate state={state} />;
};

// New Jersey
export const NewJerseyPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'new-jersey')!;
  return <StateLocationPageTemplate state={state} />;
};

// Delaware
export const DelawarePage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'delaware')!;
  return <StateLocationPageTemplate state={state} />;
};

// Maryland
export const MarylandPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'maryland')!;
  return <StateLocationPageTemplate state={state} />;
};

// Virginia
export const VirginiaPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'virginia')!;
  return <StateLocationPageTemplate state={state} />;
};

// North Carolina
export const NorthCarolinaPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'north-carolina')!;
  return <StateLocationPageTemplate state={state} />;
};

// South Carolina
export const SouthCarolinaPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'south-carolina')!;
  return <StateLocationPageTemplate state={state} />;
};

// Georgia
export const GeorgiaPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'georgia')!;
  return <StateLocationPageTemplate state={state} />;
};

// Florida
export const FloridaPage = () => {
  const state = ALL_US_STATES.find(s => s.slug === 'florida')!;
  return <StateLocationPageTemplate state={state} />;
};