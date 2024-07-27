export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    QuantityAvailable: number;
    CategoryID: string;
    AdminID: string;
    IsCustomizable: boolean;
    HasNutritionalInfo: boolean;
    image: string;
    vendor: string;
    is_deleted: boolean;
  }
  