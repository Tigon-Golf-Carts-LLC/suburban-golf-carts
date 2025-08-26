export interface Beach {
  name: string;
  slug: string;
  type: 'beach' | 'shore' | 'coastal-town' | 'port';
}

export interface CoastalState {
  name: string;
  abbreviation: string;
  slug: string;
  beaches: Beach[];
}

export const EASTERN_COASTLINE_STATES: CoastalState[] = [
  {
    name: "Maine",
    abbreviation: "ME",
    slug: "maine",
    beaches: [
      { name: "Old Orchard Beach", slug: "old-orchard-beach", type: "beach" },
      { name: "Kennebunkport", slug: "kennebunkport", type: "coastal-town" },
      { name: "Bar Harbor", slug: "bar-harbor", type: "coastal-town" },
      { name: "Camden", slug: "camden", type: "coastal-town" },
      { name: "Pemaquid Beach", slug: "pemaquid-beach", type: "beach" },
      { name: "Popham Beach", slug: "popham-beach", type: "beach" },
      { name: "Wells Beach", slug: "wells-beach", type: "beach" },
      { name: "York Beach", slug: "york-beach", type: "beach" },
      { name: "Ogunquit", slug: "ogunquit", type: "beach" },
      { name: "Boothbay Harbor", slug: "boothbay-harbor", type: "coastal-town" },
      { name: "Acadia National Park", slug: "acadia-national-park", type: "shore" },
      { name: "Portland", slug: "portland", type: "port" }
    ]
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    slug: "new-hampshire",
    beaches: [
      { name: "Hampton Beach", slug: "hampton-beach", type: "beach" },
      { name: "Seabrook Beach", slug: "seabrook-beach", type: "beach" },
      { name: "Rye Beach", slug: "rye-beach", type: "beach" },
      { name: "North Beach", slug: "north-beach", type: "beach" },
      { name: "Wallis Sands State Beach", slug: "wallis-sands-state-beach", type: "beach" },
      { name: "Portsmouth", slug: "portsmouth", type: "port" }
    ]
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    slug: "massachusetts",
    beaches: [
      { name: "Cape Cod", slug: "cape-cod", type: "shore" },
      { name: "Martha's Vineyard", slug: "marthas-vineyard", type: "coastal-town" },
      { name: "Nantucket", slug: "nantucket", type: "coastal-town" },
      { name: "Provincetown", slug: "provincetown", type: "coastal-town" },
      { name: "Chatham", slug: "chatham", type: "coastal-town" },
      { name: "Hyannis", slug: "hyannis", type: "coastal-town" },
      { name: "Falmouth", slug: "falmouth", type: "coastal-town" },
      { name: "Gloucester", slug: "gloucester", type: "port" },
      { name: "Salem", slug: "salem", type: "coastal-town" },
      { name: "Newburyport", slug: "newburyport", type: "port" },
      { name: "Revere Beach", slug: "revere-beach", type: "beach" },
      { name: "Nahant Beach", slug: "nahant-beach", type: "beach" },
      { name: "Duxbury Beach", slug: "duxbury-beach", type: "beach" },
      { name: "Plymouth Beach", slug: "plymouth-beach", type: "beach" }
    ]
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    slug: "rhode-island",
    beaches: [
      { name: "Newport", slug: "newport", type: "coastal-town" },
      { name: "Narragansett", slug: "narragansett", type: "beach" },
      { name: "Watch Hill", slug: "watch-hill", type: "beach" },
      { name: "Westerly", slug: "westerly", type: "coastal-town" },
      { name: "Block Island", slug: "block-island", type: "coastal-town" },
      { name: "Misquamicut Beach", slug: "misquamicut-beach", type: "beach" },
      { name: "Scarborough Beach", slug: "scarborough-beach", type: "beach" },
      { name: "East Beach", slug: "east-beach", type: "beach" },
      { name: "Second Beach", slug: "second-beach", type: "beach" },
      { name: "First Beach", slug: "first-beach", type: "beach" }
    ]
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    slug: "connecticut",
    beaches: [
      { name: "Mystic", slug: "mystic", type: "coastal-town" },
      { name: "New London", slug: "new-london", type: "port" },
      { name: "Old Saybrook", slug: "old-saybrook", type: "coastal-town" },
      { name: "Madison", slug: "madison", type: "coastal-town" },
      { name: "Guilford", slug: "guilford", type: "coastal-town" },
      { name: "Branford", slug: "branford", type: "coastal-town" },
      { name: "East Haven", slug: "east-haven", type: "coastal-town" },
      { name: "Milford", slug: "milford", type: "coastal-town" },
      { name: "Stratford", slug: "stratford", type: "coastal-town" },
      { name: "Bridgeport", slug: "bridgeport", type: "port" },
      { name: "Norwalk", slug: "norwalk", type: "coastal-town" },
      { name: "Stamford", slug: "stamford", type: "coastal-town" }
    ]
  },
  {
    name: "New York",
    abbreviation: "NY",
    slug: "new-york",
    beaches: [
      { name: "Coney Island", slug: "coney-island", type: "beach" },
      { name: "Brighton Beach", slug: "brighton-beach", type: "beach" },
      { name: "Rockaway Beach", slug: "rockaway-beach", type: "beach" },
      { name: "Jones Beach", slug: "jones-beach", type: "beach" },
      { name: "Fire Island", slug: "fire-island", type: "beach" },
      { name: "The Hamptons", slug: "the-hamptons", type: "shore" },
      { name: "Montauk", slug: "montauk", type: "coastal-town" },
      { name: "Sag Harbor", slug: "sag-harbor", type: "port" },
      { name: "Southampton", slug: "southampton", type: "coastal-town" },
      { name: "East Hampton", slug: "east-hampton", type: "coastal-town" },
      { name: "Westhampton", slug: "westhampton", type: "coastal-town" },
      { name: "Long Beach", slug: "long-beach", type: "beach" },
      { name: "Orchard Beach", slug: "orchard-beach", type: "beach" }
    ]
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    slug: "new-jersey",
    beaches: [
      { name: "Atlantic City", slug: "atlantic-city", type: "beach" },
      { name: "Cape May", slug: "cape-may", type: "coastal-town" },
      { name: "Ocean City", slug: "ocean-city", type: "beach" },
      { name: "Wildwood", slug: "wildwood", type: "beach" },
      { name: "Seaside Heights", slug: "seaside-heights", type: "beach" },
      { name: "Asbury Park", slug: "asbury-park", type: "beach" },
      { name: "Point Pleasant", slug: "point-pleasant", type: "beach" },
      { name: "Long Beach Island", slug: "long-beach-island", type: "beach" },
      { name: "Belmar", slug: "belmar", type: "beach" },
      { name: "Spring Lake", slug: "spring-lake", type: "beach" },
      { name: "Avon-by-the-Sea", slug: "avon-by-the-sea", type: "beach" },
      { name: "Bradley Beach", slug: "bradley-beach", type: "beach" },
      { name: "Manasquan", slug: "manasquan", type: "beach" }
    ]
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    slug: "delaware",
    beaches: [
      { name: "Rehoboth Beach", slug: "rehoboth-beach", type: "beach" },
      { name: "Bethany Beach", slug: "bethany-beach", type: "beach" },
      { name: "Dewey Beach", slug: "dewey-beach", type: "beach" },
      { name: "Fenwick Island", slug: "fenwick-island", type: "beach" },
      { name: "Lewes", slug: "lewes", type: "coastal-town" },
      { name: "Cape Henlopen", slug: "cape-henlopen", type: "shore" }
    ]
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    slug: "maryland",
    beaches: [
      { name: "Ocean City", slug: "ocean-city", type: "beach" },
      { name: "Assateague Island", slug: "assateague-island", type: "beach" },
      { name: "Cambridge", slug: "cambridge", type: "coastal-town" },
      { name: "St. Michaels", slug: "st-michaels", type: "coastal-town" },
      { name: "Annapolis", slug: "annapolis", type: "port" },
      { name: "Baltimore", slug: "baltimore", type: "port" },
      { name: "Havre de Grace", slug: "havre-de-grace", type: "coastal-town" },
      { name: "Chesapeake Beach", slug: "chesapeake-beach", type: "beach" }
    ]
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    slug: "virginia",
    beaches: [
      { name: "Virginia Beach", slug: "virginia-beach", type: "beach" },
      { name: "Norfolk", slug: "norfolk", type: "port" },
      { name: "Newport News", slug: "newport-news", type: "port" },
      { name: "Hampton", slug: "hampton", type: "coastal-town" },
      { name: "Portsmouth", slug: "portsmouth", type: "port" },
      { name: "Chesapeake", slug: "chesapeake", type: "coastal-town" },
      { name: "Sandbridge", slug: "sandbridge", type: "beach" },
      { name: "Chincoteague", slug: "chincoteague", type: "coastal-town" },
      { name: "Williamsburg", slug: "williamsburg", type: "coastal-town" }
    ]
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    slug: "north-carolina",
    beaches: [
      { name: "Outer Banks", slug: "outer-banks", type: "shore" },
      { name: "Nags Head", slug: "nags-head", type: "beach" },
      { name: "Duck", slug: "duck", type: "beach" },
      { name: "Kitty Hawk", slug: "kitty-hawk", type: "beach" },
      { name: "Kill Devil Hills", slug: "kill-devil-hills", type: "beach" },
      { name: "Cape Hatteras", slug: "cape-hatteras", type: "shore" },
      { name: "Ocracoke", slug: "ocracoke", type: "coastal-town" },
      { name: "Wrightsville Beach", slug: "wrightsville-beach", type: "beach" },
      { name: "Carolina Beach", slug: "carolina-beach", type: "beach" },
      { name: "Kure Beach", slug: "kure-beach", type: "beach" },
      { name: "Wilmington", slug: "wilmington", type: "port" },
      { name: "Sunset Beach", slug: "sunset-beach", type: "beach" },
      { name: "Ocean Isle Beach", slug: "ocean-isle-beach", type: "beach" }
    ]
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    slug: "south-carolina",
    beaches: [
      { name: "Myrtle Beach", slug: "myrtle-beach", type: "beach" },
      { name: "Charleston", slug: "charleston", type: "port" },
      { name: "Hilton Head", slug: "hilton-head", type: "beach" },
      { name: "Kiawah Island", slug: "kiawah-island", type: "beach" },
      { name: "Folly Beach", slug: "folly-beach", type: "beach" },
      { name: "Isle of Palms", slug: "isle-of-palms", type: "beach" },
      { name: "Sullivan's Island", slug: "sullivans-island", type: "beach" },
      { name: "Pawleys Island", slug: "pawleys-island", type: "beach" },
      { name: "Garden City", slug: "garden-city", type: "beach" },
      { name: "Surfside Beach", slug: "surfside-beach", type: "beach" },
      { name: "North Myrtle Beach", slug: "north-myrtle-beach", type: "beach" },
      { name: "Beaufort", slug: "beaufort", type: "coastal-town" }
    ]
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    slug: "georgia",
    beaches: [
      { name: "Savannah", slug: "savannah", type: "port" },
      { name: "Tybee Island", slug: "tybee-island", type: "beach" },
      { name: "Jekyll Island", slug: "jekyll-island", type: "beach" },
      { name: "St. Simons Island", slug: "st-simons-island", type: "beach" },
      { name: "Sea Island", slug: "sea-island", type: "beach" },
      { name: "Cumberland Island", slug: "cumberland-island", type: "beach" },
      { name: "Little St. Simons Island", slug: "little-st-simons-island", type: "beach" },
      { name: "Brunswick", slug: "brunswick", type: "port" },
      { name: "St. Marys", slug: "st-marys", type: "coastal-town" }
    ]
  },
  {
    name: "Florida",
    abbreviation: "FL",
    slug: "florida",
    beaches: [
      { name: "Miami Beach", slug: "miami-beach", type: "beach" },
      { name: "Fort Lauderdale", slug: "fort-lauderdale", type: "beach" },
      { name: "Daytona Beach", slug: "daytona-beach", type: "beach" },
      { name: "Jacksonville", slug: "jacksonville", type: "port" },
      { name: "St. Augustine", slug: "st-augustine", type: "coastal-town" },
      { name: "Fernandina Beach", slug: "fernandina-beach", type: "beach" },
      { name: "Neptune Beach", slug: "neptune-beach", type: "beach" },
      { name: "Atlantic Beach", slug: "atlantic-beach", type: "beach" },
      { name: "Ponte Vedra Beach", slug: "ponte-vedra-beach", type: "beach" },
      { name: "Ormond Beach", slug: "ormond-beach", type: "beach" },
      { name: "New Smyrna Beach", slug: "new-smyrna-beach", type: "beach" },
      { name: "Cocoa Beach", slug: "cocoa-beach", type: "beach" },
      { name: "Melbourne Beach", slug: "melbourne-beach", type: "beach" },
      { name: "Vero Beach", slug: "vero-beach", type: "beach" },
      { name: "Fort Pierce", slug: "fort-pierce", type: "beach" },
      { name: "Stuart", slug: "stuart", type: "coastal-town" },
      { name: "Jupiter", slug: "jupiter", type: "beach" },
      { name: "West Palm Beach", slug: "west-palm-beach", type: "beach" },
      { name: "Boca Raton", slug: "boca-raton", type: "beach" },
      { name: "Deerfield Beach", slug: "deerfield-beach", type: "beach" },
      { name: "Pompano Beach", slug: "pompano-beach", type: "beach" },
      { name: "Hollywood", slug: "hollywood", type: "beach" },
      { name: "Hallandale Beach", slug: "hallandale-beach", type: "beach" }
    ]
  }
];

// Generate URLs for routing
export const generateStateUrls = () => {
  return EASTERN_COASTLINE_STATES.map(state => ({
    ...state,
    url: `/${state.slug}-golf-carts`
  }));
};

// Generate all beach URLs for routing
export const generateAllBeachUrls = () => {
  const allBeaches: Array<{
    name: string;
    slug: string;
    type: string;
    state: string;
    stateSlug: string;
    url: string;
  }> = [];

  EASTERN_COASTLINE_STATES.forEach(state => {
    state.beaches.forEach(beach => {
      allBeaches.push({
        ...beach,
        state: state.name,
        stateSlug: state.slug,
        url: `/${state.slug}/${beach.slug}-golf-carts`
      });
    });
  });

  return allBeaches;
};