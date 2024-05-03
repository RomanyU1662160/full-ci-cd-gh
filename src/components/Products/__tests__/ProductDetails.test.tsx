import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import ProductDetails from '../ProductDetails';
import { mockProduct } from '../mockData';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('ProductDetails', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      back: jest.fn(),
    });
  });

  it('should render product details correctly', () => {
    render(<ProductDetails product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`£${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockProduct.rating.rate} (${mockProduct.rating.count} reviews)`
      )
    ).toBeInTheDocument();
  });

  it('should call router.back() when "Go back" button is clicked', () => {
    const mockBack = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      back: mockBack,
    });

    render(<ProductDetails product={mockProduct} />);

    const backButton = screen.getByRole('button', { name: 'Go back' });
    backButton.click();

    expect(mockBack).toHaveBeenCalled();
  });
});
