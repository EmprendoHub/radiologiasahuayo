// Define all interfaces
export type Variation = {
  _id: string;
  size: string;
  color: string;
  colorHex: string;
  price: number;
  stock: number;
  image: string;
  product?: string;
  variation?: string;
  title?: string;
  images?: Array<{ url: string }>;
  quantity: number;
  brand?: string;
};

export type UserInfo = {
  // Add user properties based on your needs
  id: string;
  email: string;
  // Add other user properties
};

export type ShippingInfo = {
  // Add shipping properties based on your needs
  address: string;
  city: string;
  // Add other shipping properties
};

export type EmailData = {
  _id: string;
  id: string;
  // Add other email properties
};

export type QRData = {
  _id: string;
  id: string;
  // Add other QR properties
};

// Define the state type
export type ShoppingState = {
  productsData: Variation[];
  productsPOS: Variation[];
  favoritesData: Variation[];
  userInfo: UserInfo | null;
  shippingInfo: ShippingInfo | null;
  orderData: Record<string, undefined>; // Replace 'any' with proper order type if available
  emailListData: EmailData[];
  qrListData: QRData[];
  loginAttempts: number;
};
