import ProductsList from '@/components/Products/Products';
import React from 'react';

const fetchProducts = async () => {
  const url = 'https://fakestoreapi.com/products';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

async function ProductsPage() {
  const products = await fetchProducts();
  return <ProductsList products={products} />;
}

export default ProductsPage;
