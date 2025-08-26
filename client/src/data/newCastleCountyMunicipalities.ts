export interface Municipality {
  name: string;
  type: 'Town' | 'City' | 'Village';
  slug: string;
  url: string;
  population: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const NEW_CASTLE_COUNTY_MUNICIPALITIES: Municipality[] = [
  { name: 'Arden', type: 'Village', slug: 'arden', url: '/arden-golf-carts', population: 430, coordinates: { lat: 39.8184, lng: -75.4893 } },
  { name: 'Ardencroft', type: 'Village', slug: 'ardencroft', url: '/ardencroft-golf-carts', population: 226, coordinates: { lat: 39.8145, lng: -75.4835 } },
  { name: 'Ardentown', type: 'Village', slug: 'ardentown', url: '/ardentown-golf-carts', population: 255, coordinates: { lat: 39.8073, lng: -75.4754 } },
  { name: 'Bellefonte', type: 'Town', slug: 'bellefonte', url: '/bellefonte-golf-carts', population: 1225, coordinates: { lat: 39.7723, lng: -75.4654 } },
  { name: 'Clayton', type: 'Town', slug: 'clayton', url: '/clayton-golf-carts', population: 3961, coordinates: { lat: 39.2901, lng: -75.6346 } },
  { name: 'Delaware City', type: 'City', slug: 'delaware-city', url: '/delaware-city-golf-carts', population: 1885, coordinates: { lat: 39.5773, lng: -75.5893 } },
  { name: 'Elsmere', type: 'Town', slug: 'elsmere', url: '/elsmere-golf-carts', population: 6229, coordinates: { lat: 39.7390, lng: -75.5896 } },
  { name: 'Middletown', type: 'Town', slug: 'middletown', url: '/middletown-golf-carts', population: 23192, coordinates: { lat: 39.4495, lng: -75.7163 } },
  { name: 'New Castle', type: 'City', slug: 'new-castle', url: '/new-castle-golf-carts', population: 5285, coordinates: { lat: 39.6623, lng: -75.5663 } },
  { name: 'Newark', type: 'City', slug: 'newark', url: '/newark-golf-carts', population: 31454, coordinates: { lat: 39.6837, lng: -75.7497 } },
  { name: 'Newport', type: 'Town', slug: 'newport', url: '/newport-golf-carts', population: 1055, coordinates: { lat: 39.7170, lng: -75.6063 } },
  { name: 'Odessa', type: 'Town', slug: 'odessa', url: '/odessa-golf-carts', population: 364, coordinates: { lat: 39.4584, lng: -75.6635 } },
  { name: 'Smyrna', type: 'Town', slug: 'smyrna', url: '/smyrna-golf-carts', population: 12883, coordinates: { lat: 39.2998, lng: -75.6046 } },
  { name: 'Townsend', type: 'Town', slug: 'townsend', url: '/townsend-golf-carts', population: 2257, coordinates: { lat: 39.3948, lng: -75.6935 } },
  { name: 'Wilmington', type: 'City', slug: 'wilmington', url: '/wilmington-golf-carts', population: 70898, coordinates: { lat: 39.7391, lng: -75.5398 } }
];