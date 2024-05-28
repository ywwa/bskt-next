export type ApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Metadata;
  images: string[];
  thumbnail: string;
};

export type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type Metadata = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

// this type contains only fields that are beeing used
// yes i could just use full type of product but no point and its
// harder to navigate atleast for me
export type ProductMin = Pick<
  Product,
  | "id"
  | "title"
  | "description"
  | "category"
  | "price"
  | "thumbnail"
  | "brand"
  | "rating"
>;
