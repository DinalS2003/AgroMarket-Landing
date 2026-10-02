import { CropItem, FeatureItem, StepItem } from '../types';

export const BRAND = {
  name: "AgroMarket",
  tagline: "Connecting Farms. Growing Markets.",
  mainMessage: "Fresh From Local Farms, Closer to You.",
  subtext: "AgroMarket connects Sri Lankan farmers and buyers through one simple mobile marketplace.",
  badge: "Built for Sri Lankan Agriculture",
  colors: {
    primary: "#087F4E",
    dark: "#073B35",
    light: "#E5F4EA",
    background: "#F5FAF6",
    accent: "#149B5C",
    white: "#FFFFFF",
    gray: "#68747D",
  }
};

export const SAMPLE_CROPS: CropItem[] = [
  {
    id: "crop-1",
    name: "Welimada Highland Potatoes",
    category: "Vegetables",
    farmer: "Sunil Bandara",
    location: "Keppetipola, Welimada",
    pricePerKg: 180,
    availableKg: 450,
    harvestDate: "Harvested Today",
    badge: "Bulk Available"
  },
  {
    id: "crop-2",
    name: "Crisp Green Cabbage",
    category: "Vegetables",
    farmer: "Bandara Ranatunga",
    location: "Kandapola, Nuwara Eliya",
    pricePerKg: 60,
    availableKg: 200,
    harvestDate: "Fresh Harvest",
    badge: "Farm Gate Direct"
  },
  {
    id: "crop-3",
    name: "Nuwara Eliya Carrots",
    category: "Vegetables",
    farmer: "Bandara Ranatunga",
    location: "Kandapola, Nuwara Eliya",
    pricePerKg: 380,
    availableKg: 240,
    harvestDate: "Harvested Today",
    badge: "Direct from Farm"
  },
  {
    id: "crop-4",
    name: "Dambulla Red Onions",
    category: "Roots & Bulbs",
    farmer: "Sunil Jayasuriya",
    location: "Pelwehera, Dambulla",
    pricePerKg: 420,
    availableKg: 500,
    harvestDate: "Harvested Yesterday",
    badge: "Bulk Available"
  },
  {
    id: "crop-5",
    name: "Jaffna Green Chillies",
    category: "Vegetables",
    farmer: "Kandeepan Tharmalingam",
    location: "Chavakachcheri, Jaffna",
    pricePerKg: 650,
    availableKg: 85,
    harvestDate: "Fresh Harvest",
    badge: "High Pungency"
  },
  {
    id: "crop-6",
    name: "Matale Ceylon Cinnamon",
    category: "Spices",
    farmer: "Nimal Premachandra",
    location: "Ukuwela, Matale",
    pricePerKg: 2800,
    availableKg: 40,
    harvestDate: "Cured Grade C5",
    badge: "Ceylon Alba/C5"
  },
  {
    id: "crop-7",
    name: "Embilipitiya Kolikuttu",
    category: "Fruits",
    farmer: "Dinesh Karunaratne",
    location: "Chandrika Wewa, Embilipitiya",
    pricePerKg: 320,
    availableKg: 160,
    harvestDate: "Tree Ripened",
    badge: "Naturally Grown"
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Nearby Farmers",
    description: "Discover farmers and produce based on location.",
    icon: "MapPin"
  },
  {
    id: 2,
    title: "Fresh Crop Listings",
    description: "See current availability, quantities, prices and harvest information.",
    icon: "Leaf"
  },
  {
    id: 3,
    title: "In-App Messaging",
    description: "Connect with farmers and buyers through the platform.",
    icon: "MessageSquare"
  },
  {
    id: 4,
    title: "Flexible Delivery",
    description: "Choose pickup, farmer delivery or supported external delivery options.",
    icon: "Truck"
  },
  {
    id: 5,
    title: "Secure Payments",
    description: "Complete purchases through a secure payment experience.",
    icon: "ShieldCheck"
  },
  {
    id: 6,
    title: "Order Tracking",
    description: "Follow your order from payment through fulfilment.",
    icon: "PackageCheck"
  }
];

export const BUYER_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Discover",
    description: "Find farmers and available crops near you."
  },
  {
    number: "02",
    title: "Order",
    description: "Choose your produce, delivery option and complete payment."
  },
  {
    number: "03",
    title: "Receive",
    description: "Collect your order or have it delivered."
  }
];

export const FARMER_WORKFLOW = [
  { step: "List", description: "Publish crop harvest, quantity & price" },
  { step: "Connect", description: "Chat directly with local buyers" },
  { step: "Accept Orders", description: "Confirm orders with delivery or pickup" },
  { step: "Fulfil", description: "Handover produce and receive secure payment" }
];
