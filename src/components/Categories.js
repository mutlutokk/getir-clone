import { useEffect, useState } from "react";
import categoryData from "../api/categories.json";
import Category from "./ui/Category";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3  text-brand-primary-gray">
          Kategoriler
        </h3>
        <div className="grid 2xl:grid-cols-12 xl:grid-cols-11 lg:grid-cols-10 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-3">
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
