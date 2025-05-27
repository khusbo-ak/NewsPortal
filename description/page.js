const data = [
  {
    title: "Global Markets Rally as Inflation Slows",
    summary: "Stocks rise globally amid cooling inflation data.",
    description: "Markets in Asia, Europe, and the U.S. rallied today after key inflation indicators showed a continued slowdown, boosting investor confidence.",
    time: "2025-05-26T08:30:00Z",
    slug: "global-markets-rally-inflation-slows",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  },
  {
    title: "AI Advances Revolutionize Healthcare Diagnostics",
    summary: "AI tools now outperform doctors in some diagnostics.",
    description: "Recent studies reveal that AI-based diagnostic tools are matching or exceeding human doctors in identifying certain diseases, prompting debates about regulation and adoption.",
    time: "2025-05-26T07:45:00Z",
    slug: "ai-healthcare-diagnostics",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
  },
  {
    title: "Severe Storms Hit Midwest, Causing Power Outages",
    summary: "Thousands without power as storms sweep through.",
    description: "Severe thunderstorms with high winds and hail hit parts of the Midwest overnight, leaving thousands without power and causing travel disruptions.",
    time: "2025-05-26T06:00:00Z",
    slug: "midwest-storms-power-outage",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5"
  },
  {
    title: "NASA Announces Mission to Explore Europa",
    summary: "New space mission to investigate Jupiter’s moon.",
    description: "NASA revealed plans for a 2026 mission to Europa, one of Jupiter’s moons believed to harbor a subsurface ocean that might support life.",
    time: "2025-05-25T23:00:00Z",
    slug: "nasa-europa-mission-2026",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  },
  {
    title: "Global Cyberattack Hits Banks and Hospitals",
    summary: "Massive cyberattack targets critical infrastructure.",
    description: "A coordinated cyberattack has affected banks and hospitals across several countries, with experts tracing the source to a known ransomware group.",
    time: "2025-05-25T21:15:00Z",
    slug: "cyberattack-banks-hospitals",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
  },
  {
    title: "UN Calls for Ceasefire in Ongoing Conflict",
    summary: "UN urges warring sides to agree to ceasefire.",
    description: "The United Nations has issued a strong appeal for an immediate ceasefire amid escalating violence in the disputed region.",
    time: "2025-05-25T20:00:00Z",
    slug: "un-ceasefire-appeal",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5"
  },
  {
    title: "Tech Giants Face Antitrust Investigation",
    summary: "Global regulators probe tech monopolies.",
    description: "Major tech companies are under investigation by international regulators over allegations of monopolistic behavior and anti-competitive practices.",
    time: "2025-05-25T18:40:00Z",
    slug: "tech-antitrust-investigation",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  },
  {
    title: "Oil Prices Surge Amid Supply Concerns",
    summary: "Global oil prices spike over supply worries.",
    description: "Crude oil prices have jumped over 5% due to growing concerns about supply chain disruptions in the Middle East.",
    time: "2025-05-25T17:30:00Z",
    slug: "oil-prices-surge",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
  },
  {
    title: "Olympic Committee Adds New Sports for 2028",
    summary: "Breakdancing and cricket added to LA 2028.",
    description: "The International Olympic Committee has officially added breakdancing and cricket to the lineup for the 2028 Olympic Games in Los Angeles.",
    time: "2025-05-25T16:00:00Z",
    slug: "olympics-2028-new-sports",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5"
  },
  {
    title: "Bitcoin Hits New All-Time High",
    summary: "Bitcoin reaches record value amid demand.",
    description: "Bitcoin has hit an all-time high of $120,000 following a surge in institutional investment and growing adoption in global markets.",
    time: "2025-05-25T15:00:00Z",
    slug: "bitcoin-all-time-high-2025",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  },
  {
    title: "Electric Vehicles Surpass Gas Cars in Sales",
    summary: "EVs now outsell traditional gas-powered cars.",
    description: "For the first time, electric vehicles have outsold gasoline-powered cars in multiple countries, signaling a global shift in transportation.",
    time: "2025-05-25T14:00:00Z",
    slug: "electric-vehicles-surpass-gas",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
  },
  {
    title: "New Study Links Sleep to Mental Health",
    summary: "Lack of sleep increases mental health risks.",
    description: "A new study confirms strong links between sleep deprivation and a rise in anxiety and depression among young adults.",
    time: "2025-05-25T13:00:00Z",
    slug: "sleep-mental-health-study",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5"
  },
  {
    title: "Wildfires Rage Across Western Canada",
    summary: "Firefighters battle fast-spreading wildfires.",
    description: "Multiple wildfires continue to spread rapidly in British Columbia, forcing thousands to evacuate amid dry, windy conditions.",
    time: "2025-05-25T12:00:00Z",
    slug: "canada-wildfires-2025",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  },
  {
    title: "Breakthrough in Quantum Computing Achieved",
    summary: "Quantum processor hits key milestone.",
    description: "Researchers announced a major breakthrough in quantum computing, achieving stable computation with over 100 qubits for the first time.",
    time: "2025-05-25T11:00:00Z",
    slug: "quantum-computing-breakthrough",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
  },
  {
    title: "Global Tourism Rebounds Post-Pandemic",
    summary: "Travel surges as restrictions ease worldwide.",
    description: "With nearly all travel restrictions lifted, tourism is booming across Europe, Asia, and the Americas, according to new data.",
    time: "2025-05-25T10:00:00Z",
    slug: "global-tourism-rebound",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5"
  },
  {
    title: "Massive Coral Reef Discovered in Pacific",
    summary: "Scientists find thriving reef in deep Pacific.",
    description: "Marine biologists have discovered a massive, untouched coral reef system off the Pacific coast, teeming with biodiversity.",
    time: "2025-05-25T09:00:00Z",
    slug: "coral-reef-pacific-discovery",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  },
  {
    title: "Education Reform Bill Passes in Senate",
    summary: "Major overhaul for national education policy.",
    description: "The Senate passed a sweeping education reform bill today, promising increased funding and updated curricula nationwide.",
    time: "2025-05-25T08:00:00Z",
    slug: "education-reform-bill-2025",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
  },
  {
    title: "Major Sports League Plans Expansion Teams",
    summary: "New franchises announced in multiple cities.",
    description: "One of the world’s biggest sports leagues is planning to add four new franchises across North America and Europe by 2027.",
    time: "2025-05-25T07:00:00Z",
    slug: "sports-league-expansion-2027",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5"
  },
  {
    title: "Drone Delivery Pilot Begins in Suburbs",
    summary: "Retail giant starts drone shipping test.",
    description: "A major retailer has launched a new pilot program for drone deliveries in suburban areas, aiming for 30-minute delivery times.",
    time: "2025-05-25T06:00:00Z",
    slug: "drone-delivery-pilot-2025",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  },
  {
    title: "Scientists Develop Plastic-Eating Enzyme",
    summary: "Enzyme offers potential plastic waste solution.",
    description: "A team of scientists has engineered an enzyme capable of breaking down common plastics in days, offering new hope for recycling.",
    time: "2025-05-25T05:00:00Z",
    slug: "plastic-eating-enzyme-discovery",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
  }
];


console.log("data", data);


const container = document.createElement("div");
container.className = "container";



// Get slug from URL
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

if (slug) {
  const article = data.find(item => item.slug === slug);

  if (article) {
    // Create and display content dynamically
    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = article.title;

    const summary = document.createElement("p");
    summary.textContent = article.summary;

    const description = document.createElement("p");
    description.textContent = article.description;

    const image = document.createElement("img");
    image.src = article.image;
    image.alt = article.title;
    image.style.maxWidth = "100%";

    container.appendChild(title);
    container.appendChild(summary);
    container.appendChild(description);
    container.appendChild(image);

    document.body.appendChild(container);
  } else {
    document.body.innerHTML = "<p>Article not found.</p>";
  }
} else {
  document.body.innerHTML = "<p>No slug provided.</p>";
}
