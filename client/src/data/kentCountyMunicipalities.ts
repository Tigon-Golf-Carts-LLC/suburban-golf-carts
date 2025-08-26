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

export const KENT_COUNTY_MUNICIPALITIES: Municipality[] = [
  { name: 'Bowers', type: 'Town', slug: 'bowers', url: '/bowers-golf-carts', population: 278, coordinates: { lat: 39.0567, lng: -75.3968 } },
  { name: 'Camden', type: 'Town', slug: 'camden', url: '/camden-golf-carts', population: 3715, coordinates: { lat: 39.1109, lng: -75.5521 } },
  { name: 'Cheswold', type: 'Town', slug: 'cheswold', url: '/cheswold-golf-carts', population: 1923, coordinates: { lat: 39.2170, lng: -75.5821 } },
  { name: 'Dover', type: 'City', slug: 'dover', url: '/dover-golf-carts', population: 39403, coordinates: { lat: 39.1573, lng: -75.5277 } },
  { name: 'Farmington', type: 'Town', slug: 'farmington', url: '/farmington-golf-carts', population: 92, coordinates: { lat: 38.8804, lng: -75.5924 } },
  { name: 'Felton', type: 'Town', slug: 'felton', url: '/felton-golf-carts', population: 1316, coordinates: { lat: 38.9548, lng: -75.5721 } },
  { name: 'Frederica', type: 'Town', slug: 'frederica', url: '/frederica-golf-carts', population: 1073, coordinates: { lat: 38.9723, lng: -75.4646 } },
  { name: 'Harrington', type: 'City', slug: 'harrington', url: '/harrington-golf-carts', population: 3774, coordinates: { lat: 38.9234, lng: -75.5799 } },
  { name: 'Hartly', type: 'Town', slug: 'hartly', url: '/hartly-golf-carts', population: 73, coordinates: { lat: 39.1587, lng: -75.7124 } },
  { name: 'Houston', type: 'Town', slug: 'houston', url: '/houston-golf-carts', population: 374, coordinates: { lat: 38.9162, lng: -75.5099 } },
  { name: 'Kenton', type: 'Town', slug: 'kenton', url: '/kenton-golf-carts', population: 261, coordinates: { lat: 39.2262, lng: -75.6688 } },
  { name: 'Leipsic', type: 'Town', slug: 'leipsic', url: '/leipsic-golf-carts', population: 196, coordinates: { lat: 39.2398, lng: -75.5199 } },
  { name: 'Little Creek', type: 'Town', slug: 'little-creek', url: '/little-creek-golf-carts', population: 195, coordinates: { lat: 39.1648, lng: -75.4474 } },
  { name: 'Magnolia', type: 'Town', slug: 'magnolia', url: '/magnolia-golf-carts', population: 225, coordinates: { lat: 39.0701, lng: -75.4765 } },
  { name: 'Milford', type: 'City', slug: 'milford', url: '/milford-golf-carts', population: 11190, coordinates: { lat: 38.9123, lng: -75.4299 } },
  { name: 'Viola', type: 'Town', slug: 'viola', url: '/viola-golf-carts', population: 157, coordinates: { lat: 38.9909, lng: -75.5685 } },
  { name: 'Woodside', type: 'Town', slug: 'woodside', url: '/woodside-golf-carts', population: 181, coordinates: { lat: 39.0717, lng: -75.5654 } },
  { name: 'Wyoming', type: 'Town', slug: 'wyoming', url: '/wyoming-golf-carts', population: 1313, coordinates: { lat: 39.1187, lng: -75.5596 } }
];