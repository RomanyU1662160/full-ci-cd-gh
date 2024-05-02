import ProductDetails from '@/components/Products/ProductDetails';
import React from 'react';

type ProductProps = {
  params: {
    productId: string;
  };
};

const retrieveProduct = async (productId: string) => {
  const url = `https://fakestoreapi.com/products/${productId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

async function Product({ params }: ProductProps) {
  const product = await retrieveProduct(params.productId);
  return <ProductDetails product={product} />;
}

export default Product;
