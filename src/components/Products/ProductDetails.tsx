'use client';
import { Product } from '@/types/Product';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type ProductDetailsProps = {
  product: Product;
};

function ProductDetails({ product }: ProductDetailsProps) {
  const router = useRouter();
  return (
    <div className='row m-2'>
      <h2 className='text-info text-center'>{product?.title}</h2>
      <div className='col-md-4 border'>
        <Image
          src={product?.image}
          alt={product?.title}
          className='img-fluid '
          width={500}
          height={200}
        />
        <h3 className='text-warning text-center'> £{product.price}</h3>
      </div>
      <div className='col-md-7 card-body offset-md-1 p-2'>
        <p>{product?.description}</p>
        <p>
          <strong>Price:</strong>
          <span className='text-warning fw-bolder'>${product?.price}</span>
        </p>
        <p>
          <strong>Category:</strong> {product?.category}
        </p>
        <p>
          <strong>Rating:</strong> {product?.rating.rate} (
          {product?.rating.count} reviews)
        </p>

        <button
          className='btn btn-lg btn-outline-dark'
          onClick={() => router.back()}
        >
          Go back
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
