import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [product,setProduct] = useState([]);
    


        useEffect(() => {
            fetchProdcut();
        }, []);

        
    const fetchProdcut = () => {
        axios.get('http://localhost:8000/api')
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.error("Error fetching people:", err));
    };

        const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(() => {
                setProduct(product.filter(p => p._id !== productId));
            })
            .catch(err => console.error(err));
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
        .then(res => {
            console.log("Product added:", res.data);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch(err => console.log(err));
    };

    


    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title: </label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price: </label><br/>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description: </label><br/>
                    <textarea type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <input type="submit" value="Add Product"/>
            </form>

            <h3>Product List:</h3>
            <ul>
                {product.map((product, index) => (
                    <li key={index}>
                        <Link to={`/product/${product._id}`}>{product.title} </Link>
                        |
                        <Link style={{color : "yellow"}} to={"/product/" + product._id + "/edit"}> Edit </Link>
                        |
                        <button 
                            onClick={() => deleteProduct(product._id)}
                            style={{ color: "red", background: "none", border: "none", cursor: "pointer" }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ProductComponent;
