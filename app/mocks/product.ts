import { Product } from "@/types/product";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 230019,
    createdAt: "2023-11-22T04:01:46+00:00",
    productName: "Christopher Knight Home",
    price: 89.53,
    isAvailable: true,
    providerName: "Provider A",
    image:
      "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/black-chair.b2719b4f.jpeg",
  },
  {
    id: 87120,
    createdAt: "2023-01-09T02:00:00+00:00",
    productName: "Bar Height Swivel Barstool",
    price: 99.99,
    isAvailable: true,
    providerName: "Provider B",
    image:
      "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/chair-pink.686a7ae1.jpeg",
  },
  {
    id: 2456772,
    createdAt: "2023-11-01T03:20:00+00:00",
    productName: "Christopher Knight Home",
    price: 89.53,
    isAvailable: true,
    providerName: "Provider A",
    image:
      "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/black-chair.b2719b4f.jpeg",
  },
  {
    id: 1992,
    createdAt: "2023-08-08T23:55:34+00:00",
    productName: "Modern Square",
    price: 59.99,
    isAvailable: false,
    providerName: "Provider C",
    image:
      "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/chair-wood.d127f22b.jpeg",
  },
  {
    id: 412301,
    createdAt: "2023-02-19T02:08:08+00:00",
    productName: "Signature Design by Ashley",
    price: 129,
    isAvailable: true,
    providerName: "Provider B",
    image:
      "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/chair-steel.dd1d3892.jpeg",
  },
];

export const mockProductImage = {
  name: "Minimal Bar Stool 3",
  desc: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to “Naviglio” where you can enjoy the main night life in Barcelona.",
  image:
    "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/product-11.b01b2346.jpg",
};

export const mockProductInfo = {
  productName: "Minimal Bar Stool",
  description:
    "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
  weight: 2,
  quantity: 50,
  category: "Clothing",
};

export const mockProductSocial = {
  shoppifyUrl: "https://shoppify-url.com",
  facebookUrl: "https://facebook-url.com",
  instagramUrl: "https://instagra-url.com",
};

export const mockPricingInfo = {
  price: "90",
  type: "USD",
  sku: "71283476591",
  tags: [""],
};

export const mockProductInfoDetail = {
  id: 230019,
  productName: "Minimal Bar Stool",
  description:
    "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
  price: 1419,
  quantity: 50,
};

export const mockProductQuantity = [
  {
    id: 1,
    name: "Premium Support",
    count: 10,
  },
  {
    id: 2,
    name: "Metror Dashboard",
    count: 8,
  },
  {
    id: 3,
    name: "Parts for service",
    count: 15,
  },
];
