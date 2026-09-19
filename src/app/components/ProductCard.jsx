import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    const { name, price, category, description } = product;

    return (
        <div className="card bg-base-100 shadow-sm border border-base-200">

            <div className="card-body items-center text-center">

                <span className="badge badge-secondary badge-sm">{category}</span>


                <h2 className="card-title text-lg font-bold">{name}</h2>


                <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

                {price && <p className="text-xl font-bold text-primary mt-2">${price}</p>}


                <div className="card-actions mt-4">
                    <button className="btn btn-primary btn-sm">Buy Now</button>
                </div>

                <Link href={`/products/${product.id}`} className="btn btn-primary btn-sm">
                    Show Details
                </Link>


            </div>
        </div>
    );
};

export default ProductCard;