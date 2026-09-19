import React from 'react';
import ProductCard from '../components/ProductCard';

const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    return res.json();
}

const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h2>Products: {products.length}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {prducts.map(product=><ProductCard key={product.id}
                product={product}></ProductCard>)}
            </div>
        </div>
    );
};

export default ProductsPage;