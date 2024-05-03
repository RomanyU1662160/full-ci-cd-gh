import { Product } from '@/types/Product';

export const mockProduct: Product = {
  id: 1,
  title: 'Product 1',
  price: 100,
  description: 'Description 1',
  category: 'Category 1',
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 4,
    count: 10,
  },
};

export const mockProducts: Product[] = [
  mockProduct,
  {
    id: 2,
    title: 'Product 2',
    price: 100,
    description: 'Description 1',
    category: 'Category 2',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 4,
      count: 10,
    },
  },
];

export const mockServerState = {
  api: 'https://edge.api.flagsmith.com/api/v1/',
  environmentID: 'test',
  flags: { view_product_details: { id: 92031, enabled: true, value: null } },
  identity: undefined,
  ts: null,
  traits: {},
  evaluationEvent: null,
};
