export interface Community {
  name: string;
  slug: string;
  type: 'suburb' | 'residential-area' | 'planned-community' | 'gated-community';
}

export interface State {
  name: string;
  abbreviation: string;
  slug: string;
  communities: Community[];
}

export const ALL_US_STATES: State[] = [
  {
    name: "Alabama",
    abbreviation: "AL",
    slug: "alabama",
    communities: [
      { name: "Mountain Brook", slug: "mountain-brook", type: "suburb" },
      { name: "Vestavia Hills", slug: "vestavia-hills", type: "suburb" },
      { name: "Hoover", slug: "hoover", type: "suburb" },
      { name: "Madison", slug: "madison", type: "suburb" },
      { name: "Auburn", slug: "auburn", type: "residential-area" },
      { name: "Homewood", slug: "homewood", type: "suburb" }
    ]
  },
  {
    name: "Alaska",
    abbreviation: "AK",
    slug: "alaska",
    communities: [
      { name: "Eagle River", slug: "eagle-river", type: "suburb" },
      { name: "Chugiak", slug: "chugiak", type: "residential-area" },
      { name: "Wasilla", slug: "wasilla", type: "suburb" },
      { name: "Palmer", slug: "palmer", type: "suburb" },
      { name: "Soldotna", slug: "soldotna", type: "residential-area" }
    ]
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    slug: "arizona",
    communities: [
      { name: "Scottsdale", slug: "scottsdale", type: "suburb" },
      { name: "Gilbert", slug: "gilbert", type: "suburb" },
      { name: "Chandler", slug: "chandler", type: "suburb" },
      { name: "Mesa", slug: "mesa", type: "suburb" },
      { name: "Tempe", slug: "tempe", type: "suburb" },
      { name: "Peoria", slug: "peoria", type: "suburb" },
      { name: "Surprise", slug: "surprise", type: "suburb" },
      { name: "Anthem", slug: "anthem", type: "planned-community" },
      { name: "Oro Valley", slug: "oro-valley", type: "suburb" }
    ]
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    slug: "arkansas",
    communities: [
      { name: "Little Rock", slug: "little-rock", type: "residential-area" },
      { name: "Bentonville", slug: "bentonville", type: "suburb" },
      { name: "Rogers", slug: "rogers", type: "suburb" },
      { name: "Conway", slug: "conway", type: "suburb" },
      { name: "Fayetteville", slug: "fayetteville", type: "residential-area" }
    ]
  },
  {
    name: "California",
    abbreviation: "CA",
    slug: "california",
    communities: [
      { name: "Irvine", slug: "irvine", type: "planned-community" },
      { name: "Newport Beach", slug: "newport-beach", type: "suburb" },
      { name: "Palo Alto", slug: "palo-alto", type: "suburb" },
      { name: "Pasadena", slug: "pasadena", type: "suburb" },
      { name: "Santa Monica", slug: "santa-monica", type: "suburb" },
      { name: "La Jolla", slug: "la-jolla", type: "suburb" },
      { name: "Carmel", slug: "carmel", type: "residential-area" },
      { name: "Laguna Beach", slug: "laguna-beach", type: "suburb" },
      { name: "Saratoga", slug: "saratoga", type: "suburb" },
      { name: "Calabasas", slug: "calabasas", type: "gated-community" }
    ]
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    slug: "colorado",
    communities: [
      { name: "Cherry Hills Village", slug: "cherry-hills-village", type: "suburb" },
      { name: "Castle Rock", slug: "castle-rock", type: "suburb" },
      { name: "Highlands Ranch", slug: "highlands-ranch", type: "planned-community" },
      { name: "Boulder", slug: "boulder", type: "residential-area" },
      { name: "Fort Collins", slug: "fort-collins", type: "suburb" },
      { name: "Aurora", slug: "aurora", type: "suburb" },
      { name: "Lakewood", slug: "lakewood", type: "suburb" }
    ]
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    slug: "connecticut",
    communities: [
      { name: "Greenwich", slug: "greenwich", type: "suburb" },
      { name: "Westport", slug: "westport", type: "suburb" },
      { name: "New Canaan", slug: "new-canaan", type: "suburb" },
      { name: "Darien", slug: "darien", type: "suburb" },
      { name: "Ridgefield", slug: "ridgefield", type: "suburb" },
      { name: "Farmington", slug: "farmington", type: "suburb" }
    ]
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    slug: "delaware",
    communities: [
      { name: "Wilmington", slug: "wilmington", type: "residential-area" },
      { name: "Newark", slug: "newark", type: "suburb" },
      { name: "Hockessin", slug: "hockessin", type: "suburb" },
      { name: "Middletown", slug: "middletown", type: "suburb" },
      { name: "Pike Creek", slug: "pike-creek", type: "residential-area" }
    ]
  },
  {
    name: "Florida",
    abbreviation: "FL",
    slug: "florida",
    communities: [
      { name: "Boca Raton", slug: "boca-raton", type: "suburb" },
      { name: "Naples", slug: "naples", type: "suburb" },
      { name: "Palm Beach Gardens", slug: "palm-beach-gardens", type: "suburb" },
      { name: "Weston", slug: "weston", type: "planned-community" },
      { name: "Winter Park", slug: "winter-park", type: "suburb" },
      { name: "Coral Gables", slug: "coral-gables", type: "suburb" },
      { name: "Sarasota", slug: "sarasota", type: "residential-area" },
      { name: "The Villages", slug: "the-villages", type: "planned-community" }
    ]
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    slug: "georgia",
    communities: [
      { name: "Alpharetta", slug: "alpharetta", type: "suburb" },
      { name: "Johns Creek", slug: "johns-creek", type: "suburb" },
      { name: "Roswell", slug: "roswell", type: "suburb" },
      { name: "Dunwoody", slug: "dunwoody", type: "suburb" },
      { name: "Marietta", slug: "marietta", type: "suburb" },
      { name: "Peachtree City", slug: "peachtree-city", type: "planned-community" },
      { name: "Sandy Springs", slug: "sandy-springs", type: "suburb" }
    ]
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    slug: "hawaii",
    communities: [
      { name: "Kahala", slug: "kahala", type: "suburb" },
      { name: "Hawaii Kai", slug: "hawaii-kai", type: "residential-area" },
      { name: "Kailua", slug: "kailua", type: "suburb" },
      { name: "Wailea", slug: "wailea", type: "planned-community" },
      { name: "Princeville", slug: "princeville", type: "planned-community" }
    ]
  },
  {
    name: "Idaho",
    abbreviation: "ID",
    slug: "idaho",
    communities: [
      { name: "Meridian", slug: "meridian", type: "suburb" },
      { name: "Eagle", slug: "eagle", type: "suburb" },
      { name: "Boise", slug: "boise", type: "residential-area" },
      { name: "Coeur d'Alene", slug: "coeur-dalene", type: "residential-area" },
      { name: "Nampa", slug: "nampa", type: "suburb" }
    ]
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    slug: "illinois",
    communities: [
      { name: "Naperville", slug: "naperville", type: "suburb" },
      { name: "Wheaton", slug: "wheaton", type: "suburb" },
      { name: "Oak Park", slug: "oak-park", type: "suburb" },
      { name: "Evanston", slug: "evanston", type: "suburb" },
      { name: "Schaumburg", slug: "schaumburg", type: "suburb" },
      { name: "Arlington Heights", slug: "arlington-heights", type: "suburb" }
    ]
  },
  {
    name: "Indiana",
    abbreviation: "IN",
    slug: "indiana",
    communities: [
      { name: "Carmel", slug: "carmel", type: "suburb" },
      { name: "Fishers", slug: "fishers", type: "suburb" },
      { name: "Zionsville", slug: "zionsville", type: "suburb" },
      { name: "Westfield", slug: "westfield", type: "suburb" },
      { name: "Noblesville", slug: "noblesville", type: "suburb" }
    ]
  },
  {
    name: "Iowa",
    abbreviation: "IA",
    slug: "iowa",
    communities: [
      { name: "West Des Moines", slug: "west-des-moines", type: "suburb" },
      { name: "Ankeny", slug: "ankeny", type: "suburb" },
      { name: "Urbandale", slug: "urbandale", type: "suburb" },
      { name: "Cedar Rapids", slug: "cedar-rapids", type: "residential-area" },
      { name: "Iowa City", slug: "iowa-city", type: "residential-area" }
    ]
  },
  {
    name: "Kansas",
    abbreviation: "KS",
    slug: "kansas",
    communities: [
      { name: "Overland Park", slug: "overland-park", type: "suburb" },
      { name: "Olathe", slug: "olathe", type: "suburb" },
      { name: "Leawood", slug: "leawood", type: "suburb" },
      { name: "Lenexa", slug: "lenexa", type: "suburb" },
      { name: "Shawnee", slug: "shawnee", type: "suburb" }
    ]
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
    slug: "kentucky",
    communities: [
      { name: "Lexington", slug: "lexington", type: "residential-area" },
      { name: "Louisville", slug: "louisville", type: "residential-area" },
      { name: "Bowling Green", slug: "bowling-green", type: "suburb" },
      { name: "Owensboro", slug: "owensboro", type: "suburb" },
      { name: "Georgetown", slug: "georgetown", type: "suburb" }
    ]
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
    slug: "louisiana",
    communities: [
      { name: "Metairie", slug: "metairie", type: "suburb" },
      { name: "Baton Rouge", slug: "baton-rouge", type: "residential-area" },
      { name: "Lafayette", slug: "lafayette", type: "suburb" },
      { name: "Shreveport", slug: "shreveport", type: "residential-area" },
      { name: "Kenner", slug: "kenner", type: "suburb" }
    ]
  },
  {
    name: "Maine",
    abbreviation: "ME",
    slug: "maine",
    communities: [
      { name: "Portland", slug: "portland", type: "residential-area" },
      { name: "South Portland", slug: "south-portland", type: "suburb" },
      { name: "Scarborough", slug: "scarborough", type: "suburb" },
      { name: "Falmouth", slug: "falmouth", type: "suburb" },
      { name: "Cape Elizabeth", slug: "cape-elizabeth", type: "suburb" }
    ]
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    slug: "maryland",
    communities: [
      { name: "Bethesda", slug: "bethesda", type: "suburb" },
      { name: "Potomac", slug: "potomac", type: "suburb" },
      { name: "Rockville", slug: "rockville", type: "suburb" },
      { name: "Columbia", slug: "columbia", type: "planned-community" },
      { name: "Annapolis", slug: "annapolis", type: "residential-area" },
      { name: "Ellicott City", slug: "ellicott-city", type: "suburb" }
    ]
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    slug: "massachusetts",
    communities: [
      { name: "Newton", slug: "newton", type: "suburb" },
      { name: "Brookline", slug: "brookline", type: "suburb" },
      { name: "Wellesley", slug: "wellesley", type: "suburb" },
      { name: "Lexington", slug: "lexington", type: "suburb" },
      { name: "Cambridge", slug: "cambridge", type: "residential-area" },
      { name: "Needham", slug: "needham", type: "suburb" }
    ]
  },
  {
    name: "Michigan",
    abbreviation: "MI",
    slug: "michigan",
    communities: [
      { name: "Birmingham", slug: "birmingham", type: "suburb" },
      { name: "Troy", slug: "troy", type: "suburb" },
      { name: "Rochester Hills", slug: "rochester-hills", type: "suburb" },
      { name: "Novi", slug: "novi", type: "suburb" },
      { name: "Ann Arbor", slug: "ann-arbor", type: "residential-area" },
      { name: "Bloomfield Hills", slug: "bloomfield-hills", type: "suburb" }
    ]
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
    slug: "minnesota",
    communities: [
      { name: "Edina", slug: "edina", type: "suburb" },
      { name: "Minnetonka", slug: "minnetonka", type: "suburb" },
      { name: "Eden Prairie", slug: "eden-prairie", type: "suburb" },
      { name: "Plymouth", slug: "plymouth", type: "suburb" },
      { name: "Bloomington", slug: "bloomington", type: "suburb" },
      { name: "Maple Grove", slug: "maple-grove", type: "suburb" }
    ]
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
    slug: "mississippi",
    communities: [
      { name: "Madison", slug: "madison", type: "suburb" },
      { name: "Oxford", slug: "oxford", type: "residential-area" },
      { name: "Hattiesburg", slug: "hattiesburg", type: "suburb" },
      { name: "Southaven", slug: "southaven", type: "suburb" },
      { name: "Ridgeland", slug: "ridgeland", type: "suburb" }
    ]
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    slug: "missouri",
    communities: [
      { name: "Clayton", slug: "clayton", type: "suburb" },
      { name: "Ladue", slug: "ladue", type: "suburb" },
      { name: "Town and Country", slug: "town-and-country", type: "suburb" },
      { name: "Lee's Summit", slug: "lees-summit", type: "suburb" },
      { name: "O'Fallon", slug: "ofallon", type: "suburb" }
    ]
  },
  {
    name: "Montana",
    abbreviation: "MT",
    slug: "montana",
    communities: [
      { name: "Billings", slug: "billings", type: "residential-area" },
      { name: "Missoula", slug: "missoula", type: "residential-area" },
      { name: "Bozeman", slug: "bozeman", type: "suburb" },
      { name: "Great Falls", slug: "great-falls", type: "residential-area" },
      { name: "Helena", slug: "helena", type: "residential-area" }
    ]
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    slug: "nebraska",
    communities: [
      { name: "Omaha", slug: "omaha", type: "residential-area" },
      { name: "Lincoln", slug: "lincoln", type: "residential-area" },
      { name: "Papillion", slug: "papillion", type: "suburb" },
      { name: "La Vista", slug: "la-vista", type: "suburb" },
      { name: "Bellevue", slug: "bellevue", type: "suburb" }
    ]
  },
  {
    name: "Nevada",
    abbreviation: "NV",
    slug: "nevada",
    communities: [
      { name: "Summerlin", slug: "summerlin", type: "planned-community" },
      { name: "Henderson", slug: "henderson", type: "suburb" },
      { name: "Green Valley", slug: "green-valley", type: "planned-community" },
      { name: "Anthem", slug: "anthem", type: "planned-community" },
      { name: "Reno", slug: "reno", type: "residential-area" }
    ]
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    slug: "new-hampshire",
    communities: [
      { name: "Bedford", slug: "bedford", type: "suburb" },
      { name: "Hanover", slug: "hanover", type: "suburb" },
      { name: "Portsmouth", slug: "portsmouth", type: "residential-area" },
      { name: "Nashua", slug: "nashua", type: "suburb" },
      { name: "Concord", slug: "concord", type: "residential-area" }
    ]
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    slug: "new-jersey",
    communities: [
      { name: "Short Hills", slug: "short-hills", type: "suburb" },
      { name: "Princeton", slug: "princeton", type: "suburb" },
      { name: "Ridgewood", slug: "ridgewood", type: "suburb" },
      { name: "Montclair", slug: "montclair", type: "suburb" },
      { name: "Summit", slug: "summit", type: "suburb" },
      { name: "Hoboken", slug: "hoboken", type: "residential-area" }
    ]
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    slug: "new-mexico",
    communities: [
      { name: "Albuquerque", slug: "albuquerque", type: "residential-area" },
      { name: "Santa Fe", slug: "santa-fe", type: "residential-area" },
      { name: "Rio Rancho", slug: "rio-rancho", type: "suburb" },
      { name: "Las Cruces", slug: "las-cruces", type: "suburb" },
      { name: "Farmington", slug: "farmington", type: "suburb" }
    ]
  },
  {
    name: "New York",
    abbreviation: "NY",
    slug: "new-york",
    communities: [
      { name: "Scarsdale", slug: "scarsdale", type: "suburb" },
      { name: "Great Neck", slug: "great-neck", type: "suburb" },
      { name: "Bronxville", slug: "bronxville", type: "suburb" },
      { name: "Garden City", slug: "garden-city", type: "suburb" },
      { name: "Manhasset", slug: "manhasset", type: "suburb" },
      { name: "Rye", slug: "rye", type: "suburb" }
    ]
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    slug: "north-carolina",
    communities: [
      { name: "Cary", slug: "cary", type: "suburb" },
      { name: "Chapel Hill", slug: "chapel-hill", type: "suburb" },
      { name: "Davidson", slug: "davidson", type: "suburb" },
      { name: "Apex", slug: "apex", type: "suburb" },
      { name: "Cornelius", slug: "cornelius", type: "suburb" },
      { name: "Huntersville", slug: "huntersville", type: "suburb" }
    ]
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    slug: "north-dakota",
    communities: [
      { name: "Fargo", slug: "fargo", type: "residential-area" },
      { name: "Bismarck", slug: "bismarck", type: "residential-area" },
      { name: "Grand Forks", slug: "grand-forks", type: "suburb" },
      { name: "Minot", slug: "minot", type: "suburb" },
      { name: "West Fargo", slug: "west-fargo", type: "suburb" }
    ]
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    slug: "ohio",
    communities: [
      { name: "Dublin", slug: "dublin", type: "suburb" },
      { name: "Upper Arlington", slug: "upper-arlington", type: "suburb" },
      { name: "Shaker Heights", slug: "shaker-heights", type: "suburb" },
      { name: "Mason", slug: "mason", type: "suburb" },
      { name: "Westlake", slug: "westlake", type: "suburb" },
      { name: "Beachwood", slug: "beachwood", type: "suburb" }
    ]
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    slug: "oklahoma",
    communities: [
      { name: "Edmond", slug: "edmond", type: "suburb" },
      { name: "Norman", slug: "norman", type: "suburb" },
      { name: "Broken Arrow", slug: "broken-arrow", type: "suburb" },
      { name: "Tulsa", slug: "tulsa", type: "residential-area" },
      { name: "Oklahoma City", slug: "oklahoma-city", type: "residential-area" }
    ]
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    slug: "oregon",
    communities: [
      { name: "Lake Oswego", slug: "lake-oswego", type: "suburb" },
      { name: "West Linn", slug: "west-linn", type: "suburb" },
      { name: "Tigard", slug: "tigard", type: "suburb" },
      { name: "Beaverton", slug: "beaverton", type: "suburb" },
      { name: "Bend", slug: "bend", type: "residential-area" }
    ]
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    slug: "pennsylvania",
    communities: [
      { name: "Lower Merion", slug: "lower-merion", type: "suburb" },
      { name: "Radnor", slug: "radnor", type: "suburb" },
      { name: "Swarthmore", slug: "swarthmore", type: "suburb" },
      { name: "State College", slug: "state-college", type: "residential-area" },
      { name: "Bethlehem", slug: "bethlehem", type: "suburb" }
    ]
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    slug: "rhode-island",
    communities: [
      { name: "Barrington", slug: "barrington", type: "suburb" },
      { name: "East Greenwich", slug: "east-greenwich", type: "suburb" },
      { name: "Narragansett", slug: "narragansett", type: "suburb" },
      { name: "Newport", slug: "newport", type: "residential-area" },
      { name: "Providence", slug: "providence", type: "residential-area" }
    ]
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    slug: "south-carolina",
    communities: [
      { name: "Mount Pleasant", slug: "mount-pleasant", type: "suburb" },
      { name: "Hilton Head Island", slug: "hilton-head-island", type: "planned-community" },
      { name: "Summerville", slug: "summerville", type: "suburb" },
      { name: "Greenville", slug: "greenville", type: "residential-area" },
      { name: "Charleston", slug: "charleston", type: "residential-area" }
    ]
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    slug: "south-dakota",
    communities: [
      { name: "Sioux Falls", slug: "sioux-falls", type: "residential-area" },
      { name: "Rapid City", slug: "rapid-city", type: "residential-area" },
      { name: "Brookings", slug: "brookings", type: "suburb" },
      { name: "Aberdeen", slug: "aberdeen", type: "suburb" },
      { name: "Watertown", slug: "watertown", type: "suburb" }
    ]
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    slug: "tennessee",
    communities: [
      { name: "Brentwood", slug: "brentwood", type: "suburb" },
      { name: "Franklin", slug: "franklin", type: "suburb" },
      { name: "Germantown", slug: "germantown", type: "suburb" },
      { name: "Collierville", slug: "collierville", type: "suburb" },
      { name: "Chattanooga", slug: "chattanooga", type: "residential-area" }
    ]
  },
  {
    name: "Texas",
    abbreviation: "TX",
    slug: "texas",
    communities: [
      { name: "The Woodlands", slug: "the-woodlands", type: "planned-community" },
      { name: "Plano", slug: "plano", type: "suburb" },
      { name: "Frisco", slug: "frisco", type: "suburb" },
      { name: "Sugar Land", slug: "sugar-land", type: "suburb" },
      { name: "Allen", slug: "allen", type: "suburb" },
      { name: "McKinney", slug: "mckinney", type: "suburb" },
      { name: "Southlake", slug: "southlake", type: "suburb" },
      { name: "Katy", slug: "katy", type: "suburb" }
    ]
  },
  {
    name: "Utah",
    abbreviation: "UT",
    slug: "utah",
    communities: [
      { name: "Draper", slug: "draper", type: "suburb" },
      { name: "Sandy", slug: "sandy", type: "suburb" },
      { name: "South Jordan", slug: "south-jordan", type: "suburb" },
      { name: "Provo", slug: "provo", type: "residential-area" },
      { name: "Park City", slug: "park-city", type: "residential-area" }
    ]
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    slug: "vermont",
    communities: [
      { name: "Burlington", slug: "burlington", type: "residential-area" },
      { name: "South Burlington", slug: "south-burlington", type: "suburb" },
      { name: "Stowe", slug: "stowe", type: "residential-area" },
      { name: "Shelburne", slug: "shelburne", type: "suburb" },
      { name: "Montpelier", slug: "montpelier", type: "residential-area" }
    ]
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    slug: "virginia",
    communities: [
      { name: "McLean", slug: "mclean", type: "suburb" },
      { name: "Arlington", slug: "arlington", type: "suburb" },
      { name: "Alexandria", slug: "alexandria", type: "suburb" },
      { name: "Fairfax", slug: "fairfax", type: "suburb" },
      { name: "Reston", slug: "reston", type: "planned-community" },
      { name: "Virginia Beach", slug: "virginia-beach", type: "residential-area" }
    ]
  },
  {
    name: "Washington",
    abbreviation: "WA",
    slug: "washington",
    communities: [
      { name: "Bellevue", slug: "bellevue", type: "suburb" },
      { name: "Redmond", slug: "redmond", type: "suburb" },
      { name: "Kirkland", slug: "kirkland", type: "suburb" },
      { name: "Sammamish", slug: "sammamish", type: "suburb" },
      { name: "Mercer Island", slug: "mercer-island", type: "suburb" },
      { name: "Issaquah", slug: "issaquah", type: "suburb" }
    ]
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    slug: "west-virginia",
    communities: [
      { name: "Charleston", slug: "charleston", type: "residential-area" },
      { name: "Huntington", slug: "huntington", type: "residential-area" },
      { name: "Morgantown", slug: "morgantown", type: "suburb" },
      { name: "Wheeling", slug: "wheeling", type: "residential-area" },
      { name: "Parkersburg", slug: "parkersburg", type: "suburb" }
    ]
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    slug: "wisconsin",
    communities: [
      { name: "Brookfield", slug: "brookfield", type: "suburb" },
      { name: "Mequon", slug: "mequon", type: "suburb" },
      { name: "Wauwatosa", slug: "wauwatosa", type: "suburb" },
      { name: "Madison", slug: "madison", type: "residential-area" },
      { name: "Whitefish Bay", slug: "whitefish-bay", type: "suburb" }
    ]
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
    slug: "wyoming",
    communities: [
      { name: "Jackson", slug: "jackson", type: "residential-area" },
      { name: "Cheyenne", slug: "cheyenne", type: "residential-area" },
      { name: "Casper", slug: "casper", type: "residential-area" },
      { name: "Laramie", slug: "laramie", type: "suburb" },
      { name: "Gillette", slug: "gillette", type: "suburb" }
    ]
  }
];

// Helper function to generate all community URLs
export function generateAllCommunityUrls(): string[] {
  const urls: string[] = [];
  
  ALL_US_STATES.forEach(state => {
    state.communities.forEach(community => {
      urls.push(`/${state.slug}/${community.slug}-golf-carts`);
    });
  });
  
  return urls;
}

// Helper function to get state by slug
export function getStateBySlug(slug: string): State | undefined {
  return ALL_US_STATES.find(state => state.slug === slug);
}

// Helper function to get community by slug
export function getCommunityBySlug(stateSlug: string, communitySlug: string): Community | undefined {
  const state = getStateBySlug(stateSlug);
  return state?.communities.find(community => community.slug === communitySlug);
}
