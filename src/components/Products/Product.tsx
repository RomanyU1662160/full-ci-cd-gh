'use client';

import { Product } from '@/types/Product';
import Image from 'next/image';
import React from 'react';
import { useFlags } from 'flagsmith/react';
import Link from 'next/link';
type ProductProps = {
  product: Product;
};

function ProductItem({ product }: ProductProps) {
  const { view_product_details } = useFlags(['view_product_details']);

  return (
    <div className='col-md-4 card mt-2'>
      <Image
        src={product?.image}
        alt={product?.title}
        width={250}
        height={250}
      />
      <div className='card-body'>
        <h3 className='card-title text-info'>{product?.title}</h3>
        <p className='info-description'>{product?.description}</p>
      </div>
      <div className='card-footer row'>
        <p className='info-price'>
          <strong> Price: </strong>{' '}
          <span className='text-warning fw-bolder'> ${product?.price} </span>
        </p>
        {view_product_details?.enabled && (
          <Link href={`/products/${product?.id}`}>
            <button className='btn btn-lg btn-primary'>More info</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
