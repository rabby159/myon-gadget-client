import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className="bg-gradient-to-r from-cyan-100 to-blue-200 p-5">
            <div className="max-w-7xl mx-auto my-16"> 
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-5">Top Categories</h2>
                <p>This category includes smartphones, laptops, gaming consoles, and accessories.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 pt-8">
                {
                    categories?.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Category;