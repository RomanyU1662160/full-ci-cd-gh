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
  flags: { view_product_details: { id: 92031, enabled: true, value: null } },
  identity: undefined,
  ts: null,
  traits: {},
  evaluationEvent: null,
};

describe('renders products list', () => {
  it('should render correctly the products list', () => {
    render(
      <FeaturesFlagProvider serverState={mockServerState}>
        <ProductsList products={mockProducts} />
      </FeaturesFlagProvider>
    );

    expect(screen.getByText('Products list')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('should render correctly the products list with no products', () => {
    render(
      <FeaturesFlagProvider serverState={mockServerState}>
        <ProductsList products={[]} />
      </FeaturesFlagProvider>
    );

    expect(screen.getByText('Products list')).toBeInTheDocument();
  });

  it("should not render the product's details button if the feature flag is disabled", () => {
    const flagDisabled = {
      view_product_details: { id: 92031, enabled: false, value: null },
    };
    render(
      <FeaturesFlagProvider
        serverState={{
          ...mockServerState,
          flags: { ...mockServerState.flags, ...flagDisabled },
        }}
      >
        <ProductsList products={mockProducts} />
      </FeaturesFlagProvider>
    );

    expect(
      screen.queryByRole('button', { name: 'More info' })
    ).not.toBeInTheDocument();
  });
});
