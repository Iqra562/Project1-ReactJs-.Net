import { useEffect, useState } from "react";
import React from "react";

function Category() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/api/category/GetCategories")
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
                // console.log(data)
            })
    }, []);
    { console.log(categories, "catgeories") }
    return (
        <div>
            {categories && categories.length > 0 ? (
                categories.map((item) => (
                    <div key={item.categoryId
                    }>
                        <p>{item.categoryId
                        }</p>
                        <p>{item.name}</p>
                    </div>
                ))
            ) : (
                <p>No categories available.</p>
            )}
        </div>
    );


}

export default Category;
