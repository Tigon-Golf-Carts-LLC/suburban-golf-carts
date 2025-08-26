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

export const SUSSEX_COUNTY_MUNICIPALITIES: Municipality[] = [
  { name: 'Bethany Beach', type: 'Town', slug: 'bethany-beach', url: '/bethany-beach-golf-carts', population: 954, coordinates: { lat: 38.5407, lng: -75.0635 } },
  { name: 'Bethel', type: 'Town', slug: 'bethel', url: '/bethel-golf-carts', population: 239, coordinates: { lat: 38.5590, lng: -75.6293 } },
  { name: 'Blades', type: 'Town', slug: 'blades', url: '/blades-golf-carts', population: 1179, coordinates: { lat: 38.6370, lng: -75.6076 } },
  { name: 'Bridgeville', type: 'Town', slug: 'bridgeville', url: '/bridgeville-golf-carts', population: 2568, coordinates: { lat: 38.7401, lng: -75.6002 } },
  { name: 'Dagsboro', type: 'Town', slug: 'dagsboro', url: '/dagsboro-golf-carts', population: 870, coordinates: { lat: 38.5501, lng: -75.2471 } },
  { name: 'Delmar', type: 'Town', slug: 'delmar', url: '/delmar-golf-carts', population: 2027, coordinates: { lat: 38.4565, lng: -75.5777 } },
  { name: 'Dewey Beach', type: 'Town', slug: 'dewey-beach', url: '/dewey-beach-golf-carts', population: 353, coordinates: { lat: 38.6928, lng: -75.0713 } },
  { name: 'Ellendale', type: 'Town', slug: 'ellendale', url: '/ellendale-golf-carts', population: 487, coordinates: { lat: 38.8081, lng: -75.4248 } },
  { name: 'Fenwick Island', type: 'Town', slug: 'fenwick-island', url: '/fenwick-island-golf-carts', population: 343, coordinates: { lat: 38.4604, lng: -75.0535 } },
  { name: 'Frankford', type: 'Town', slug: 'frankford', url: '/frankford-golf-carts', population: 790, coordinates: { lat: 38.5109, lng: -75.2335 } },
  { name: 'Georgetown', type: 'Town', slug: 'georgetown', url: '/georgetown-golf-carts', population: 7134, coordinates: { lat: 38.6901, lng: -75.3855 } },
  { name: 'Greenwood', type: 'Town', slug: 'greenwood', url: '/greenwood-golf-carts', population: 990, coordinates: { lat: 38.8056, lng: -75.5932 } },
  { name: 'Henlopen Acres', type: 'Town', slug: 'henlopen-acres', url: '/henlopen-acres-golf-carts', population: 122, coordinates: { lat: 38.7284, lng: -75.1043 } },
  { name: 'Laurel', type: 'Town', slug: 'laurel', url: '/laurel-golf-carts', population: 4317, coordinates: { lat: 38.5579, lng: -75.5710 } },
  { name: 'Lewes', type: 'City', slug: 'lewes', url: '/lewes-golf-carts', population: 3303, coordinates: { lat: 38.7747, lng: -75.1412 } },
  { name: 'Milford', type: 'City', slug: 'milford', url: '/milford-golf-carts', population: 11190, coordinates: { lat: 38.9123, lng: -75.4299 } },
  { name: 'Millsboro', type: 'Town', slug: 'millsboro', url: '/millsboro-golf-carts', population: 5247, coordinates: { lat: 38.5909, lng: -75.2902 } },
  { name: 'Millville', type: 'Town', slug: 'millville', url: '/millville-golf-carts', population: 617, coordinates: { lat: 38.5451, lng: -75.1221 } },
  { name: 'Milton', type: 'Town', slug: 'milton', url: '/milton-golf-carts', population: 3282, coordinates: { lat: 38.7773, lng: -75.3099 } },
  { name: 'Ocean View', type: 'Town', slug: 'ocean-view', url: '/ocean-view-golf-carts', population: 2230, coordinates: { lat: 38.5426, lng: -75.0904 } },
  { name: 'Rehoboth Beach', type: 'City', slug: 'rehoboth-beach', url: '/rehoboth-beach-golf-carts', population: 1108, coordinates: { lat: 38.7095, lng: -75.0765 } },
  { name: 'Seaford', type: 'City', slug: 'seaford', url: '/seaford-golf-carts', population: 8421, coordinates: { lat: 38.6412, lng: -75.6110 } },
  { name: 'Selbyville', type: 'Town', slug: 'selbyville', url: '/selbyville-golf-carts', population: 2731, coordinates: { lat: 38.4582, lng: -75.2235 } },
  { name: 'Slaughter Beach', type: 'Town', slug: 'slaughter-beach', url: '/slaughter-beach-golf-carts', population: 207, coordinates: { lat: 38.8573, lng: -75.3065 } },
  { name: 'South Bethany', type: 'Town', slug: 'south-bethany', url: '/south-bethany-golf-carts', population: 449, coordinates: { lat: 38.5181, lng: -75.0657 } },
];