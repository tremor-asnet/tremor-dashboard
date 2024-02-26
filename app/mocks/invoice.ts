export const INVOICE_DATA = {
  id: 230220,
  createdAt: "06/03/2019",
  dueAt: "11/03/2019",
  bankInfo: {
    address: "St. Independence Embankment, 050105",
    city: "Bucharest",
    state: "Romania",
    phone: "+4 (074) 1090873",
  },
  customer: {
    fullName: "John Doe",
    address: "4006 Locust View Drive",
    city: "San Francisco",
    stateCode: "CA",
    state: "California",
  },
  products: [
    {
      id: 1,
      productName: "Premium Support",
      quantity: 1,
      price: 9,
    },
    {
      id: 2,
      productName: "Metror Dashboard",
      quantity: 3,
      price: 100,
    },
    {
      id: 3,
      productName: "Parts for service",
      quantity: 2,
      price: 10,
    },
  ],
  totalCost: 345,
};
