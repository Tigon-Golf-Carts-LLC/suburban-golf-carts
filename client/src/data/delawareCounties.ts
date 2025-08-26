export interface County {
  name: string;
  slug: string;
  seat: string;
  url: string;
  population: number;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const DELAWARE_COUNTIES: County[] = [
  {
    name: 'New Castle County',
    slug: 'new-castle-county',
    seat: 'Wilmington',
    url: '/new-castle-county-golf-carts',
    population: 570000,
    description: 'Northern Delaware county, home to Wilmington and most of the state\'s population',
    coordinates: { lat: 39.5827, lng: -75.6661 }
  },
  {
    name: 'Kent County',
    slug: 'kent-county', 
    seat: 'Dover',
    url: '/kent-county-golf-carts',
    population: 181851,
    description: 'Central Delaware county, home to Dover, the state capital',
    coordinates: { lat: 39.1573, lng: -75.5277 }
  },
  {
    name: 'Sussex County',
    slug: 'sussex-county',
    seat: 'Georgetown',
    url: '/sussex-county-golf-carts', 
    population: 237378,
    description: 'Southern Delaware county, known for beaches and coastal communities',
    coordinates: { lat: 38.6901, lng: -75.3855 }
  }
];