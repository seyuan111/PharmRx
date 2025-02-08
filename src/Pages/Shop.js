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
        <div className="min-h-screen">
            <NavBar />
            <div className="w-full min-h-screen p-8 pt-12">

                {["OTC Medications", "Hygiene Care Products", "Bathroom Care Products"].map((category, index) => (
                    <div key={index} className="mt-16">
                        <h2 className="text-2xl font-bold text-center mb-6 border-b-4 pb-2 w-fit mx-auto">
                            {category}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {products.map((product) => (
                                <div key={product.id} className="border p-5 rounded-xl shadow-md hover:shadow-2xl transition duration-300 bg-white">
                                    <img src={product.image} alt={product.name} className="w-full h-44 object-cover mb-4 rounded-lg" />
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-gray-600">{product.price}</p>
                                    <button className="mt-4 py-2 px-5 border border-black rounded-lg hover:bg-black hover:text-white transition">
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;

