import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://ip-api.com/json/24.48.0.1');
                const data = await response.json();

                if (data.length === 20) {
                    setProducts(data);
                } else {
                    setProducts([]); // Optional: Handle case where data length isn't 20
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([]); // Optional: Handle error case
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <h2>....loading</h2>;
    }

    return (
        <div className="post">
            {products.map(item => (
                <div className="product" key={item.id}>
                    <h4>{item.title}</h4>
                    <br />
                    <sup>{item.category}</sup>
                    <img src={item.image} alt={item.title} />
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
