export type AppScreenType = 'marketplace' | 'crop-details' | 'farmer-profile' | 'order-tracking' | 'farmer-listing';

export interface CropItem {
  id: string;
  name: string;
  category: string;
  farmer: string;
  location: string;
  pricePerKg: number;
  availableKg: number;
  harvestDate: string;
  badge?: string;
  image?: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}
