import { Product } from '@/types/Product';
import React from 'react';
import ProductItem from './Product';

type ProductsListProps = {
  products: Product[];
};

function ProductsList({ products }: ProductsListProps) {
  return (
    <div className='row'>
      <h1 className='text-info text-center'> Products list</h1>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
