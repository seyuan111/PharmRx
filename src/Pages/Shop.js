import React from 'react';
import NavBar from '../components/Navbar';

const products = [
    { id: 1, name: "Product 1", price: "$20", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$25", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$30", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "$35", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: "$40", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: "$45", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Product 7", price: "$50", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Product 8", price: "$55", image: "https://via.placeholder.com/150" }
];

const Shop = () => {
    return (
        <div className="bg-neutral-500 min-h-screen">
            <NavBar />
            <div className="w-full min-h-screen p-8 pt-24 bg-zinc-900/70">
                <h1 className="text-white text-3xl font-bold text-center mb-8">Shop here for our exclusive deals</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-neutral-300/70">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-700">{product.price}</p>
                            <button className="mt-4 text-white py-2 px-4 rounded hover:bg-black transition duration-300">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
