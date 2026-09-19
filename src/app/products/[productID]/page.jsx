import React from 'react';

const ProductDetailPage = async ({ params }) => {

    const { productID } = await params;


    const res = await fetch(`http://127.0.0.1:5000/products/${productID}`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }

    const product = await res.json();

    return (
        <div>
            <h2>Product: {product.name}</h2>
            <h3>Price: ${product.price}</h3>
            <p>{product.description}</p>
            <p>{product.category}</p>
        </div>
    );
};

export default ProductDetailPage;