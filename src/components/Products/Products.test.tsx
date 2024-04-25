import { render, screen } from '@testing-library/react';
import ProductsList from './Products';
import { Product } from '@/types/Product';
import FeaturesFlagProvider from '../FeatureFlag/FeaturesProvider';

const mockProducts: Product[] = [
  {
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
  },
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

const mockServerState = {
  api: 'https://edge.api.flagsmith.com/api/v1/',
  environmentID: 'test',
  flags: { view_product_details: { id: 92031, enabled: false, value: null } },
  identity: undefined,
  ts: null,
  traits: {},
  evaluationEvent: null,
};

test('renders products list', () => {
  render(
    <FeaturesFlagProvider serverState={mockServerState}>
      <ProductsList products={mockProducts} />
    </FeaturesFlagProvider>
  );

  expect(screen.getByText('Products list')).toBeInTheDocument();
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
});
