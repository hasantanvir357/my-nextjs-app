import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product }) => {
    const { id, name, price, category, image, description } = product;
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    width={640}
                    height={427}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className="card-subtitle">{category}</p>
                <p className="card-text">{description}</p>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;