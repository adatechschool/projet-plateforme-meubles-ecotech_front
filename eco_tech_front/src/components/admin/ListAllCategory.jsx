import { useState, useEffect } from "react";

export const ListAllCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch('http://localhost:3000/products/category');
            const data = await response.json();
            setCategory(data);
        }
        fetchCategory()
        
    }, []);

    return (
        category.map((cat, index) => (
            <option key={index} value={cat.id}>
                {cat.category}
            </option>
        ))
    );
}