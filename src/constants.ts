export interface CarItem {
  id: number;
  name: string;
  type: string;
  transmission: 'Manual' | 'Automatic';
  price: number;
  features: string[];
  image: string;
  category: 'Budget' | 'Mid-Range' | 'SUV' | 'Luxury';
}

export const FLEET_DATA: CarItem[] = [
  { id: 1, name: "Maruti Swift", type: "Hatchback", transmission: "Manual", price: 1200, features: ["5 Seater", "AC", "Power Steering"], category: "Budget", image: "https://images.unsplash.com/photo-1721013401569-424759600984?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Mahindra Thar", type: "Off-Road SUV", transmission: "Manual", price: 3500, features: ["4 Seater", "Convertible/Hard Top", "Best for Goa beaches"], category: "SUV", image: "https://images.unsplash.com/photo-1662453531980-60b64d39f400?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Hyundai Creta", type: "Premium SUV", transmission: "Automatic", price: 2500, features: ["5 Seater", "Sunroof", "Touchscreen Navigation"], category: "SUV", image: "https://images.unsplash.com/photo-1695286950293-18ef55776d65?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Toyota Innova Crysta", type: "MUV", transmission: "Automatic", price: 3800, features: ["7 Seater", "Dual AC", "Premium Comfort"], category: "Luxury", image: "https://images.unsplash.com/photo-1647464303350-dfd358896500?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Maruti Baleno", type: "Premium Hatchback", transmission: "Automatic", price: 1800, features: ["5 Seater", "Reverse Camera", "Modern Interior"], category: "Mid-Range", image: "https://images.unsplash.com/photo-1704289871790-252a16d82b0e?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Kia Seltos", type: "SUV", transmission: "Automatic", price: 2200, features: ["5 Seater", "Leatherette Seats", "Safety Priority"], category: "SUV", image: "https://images.unsplash.com/photo-1678121617260-264624443424?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Hyundai i20", type: "Premium Hatchback", transmission: "Manual", price: 1500, features: ["5 Seater", "Apple CarPlay", "Sleek Design"], category: "Mid-Range", image: "https://images.unsplash.com/photo-1632243206689-5373a25b3991?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Maruti Dzire", type: "Sedan", transmission: "Manual", price: 1600, features: ["5 Seater", "Large Boot Space", "Fuel Efficient"], category: "Mid-Range", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop" },
  { id: 9, name: "Maruti Ertiga", type: "MUV", transmission: "Manual", price: 2800, features: ["7 Seater", "Family Favorite", "Spacious Interior"], category: "SUV", image: "https://images.unsplash.com/photo-1621348336301-447551069542?q=80&w=800&auto=format&fit=crop" },
  { id: 10, name: "Renault Kwid", type: "Hatchback", transmission: "Manual", price: 1000, features: ["4 Seater", "Compact", "Easy to Park"], category: "Budget", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop" },
  { id: 11, name: "MG Hector", type: "Luxury SUV", transmission: "Automatic", price: 4500, features: ["5 Seater", "Panoramic Sunroof", "Voice Commands"], category: "Luxury", image: "https://images.unsplash.com/photo-1617462002161-001089929841?q=80&w=800&auto=format&fit=crop" },
  { id: 12, name: "Jeep Compass", type: "Premium SUV", transmission: "Automatic", price: 4000, features: ["5 Seater", "4x4 Drive", "Luxury Leather Seats"], category: "Luxury", image: "https://images.unsplash.com/photo-1606148301667-4e63e263d91c?q=80&w=800&auto=format&fit=crop" },
  { id: 13, name: "Toyota Fortuner", type: "Luxury SUV", transmission: "Automatic", price: 6500, features: ["7 Seater", "4x4", "Ultimate Power"], category: "Luxury", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" },
  { id: 14, name: "Audi A4", type: "Luxury Sedan", transmission: "Automatic", price: 8000, features: ["5 Seater", "Sunroof", "Audi Drive Select"], category: "Luxury", image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=800&auto=format&fit=crop" },
  { id: 15, name: "Maruti Alto K10", type: "Budget Hatchback", transmission: "Manual", price: 900, features: ["4 Seater", "Great City Car", "Low Fuel Consumption"], category: "Budget", image: "https://images.unsplash.com/photo-1611859600100-349f29158fb7?q=80&w=800&auto=format&fit=crop" },
  { id: 16, name: "Hyundai Verna", type: "Premium Sedan", transmission: "Automatic", price: 3200, features: ["5 Seater", "Ventilated Seats", "ADAS"], category: "Luxury", image: "https://images.unsplash.com/photo-1542362567-b0349cd121bb?q=80&w=800&auto=format&fit=crop" },
  { id: 17, name: "Kia Carens", type: "MUV", transmission: "Automatic", price: 3500, features: ["6 Seater", "Ambient Lighting", "Bose Sound System"], category: "SUV", image: "https://images.unsplash.com/photo-1631853683059-d8e23f03b865?q=80&w=800&auto=format&fit=crop" },
  { id: 18, name: "Tata Nexon", type: "Compact SUV", transmission: "Manual", price: 1800, features: ["5 Seater", "5 Star Safety", "High Ground Clearance"], category: "Mid-Range", image: "https://images.unsplash.com/photo-1631284523945-81676646cc26?q=80&w=800&auto=format&fit=crop" },
  { id: 19, name: "Maruti Ignis", type: "Compact Hatchback", transmission: "Manual", price: 1300, features: ["5 Seater", "Peppy Engine", "Cute Design"], category: "Budget", image: "https://images.unsplash.com/photo-1618451121877-3e404b9015ba?q=80&w=800&auto=format&fit=crop" },
  { id: 20, name: "Honda City", type: "Premium Sedan", transmission: "Manual", price: 2500, features: ["5 Seater", "Elegant Style", "IVTEC Engine"], category: "Mid-Range", image: "https://images.unsplash.com/photo-1594070319944-7c0c631581de?q=80&w=800&auto=format&fit=crop" }
];
