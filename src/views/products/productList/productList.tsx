import React, { useEffect } from "react";
import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
  onOpenModal: (product: Product) => void;
}


export const ProductList: React.FC<ProductListProps> = ({
  products,
  onOpenModal,
}) => {
  useEffect(() => {
    
    if (typeof window !== 'undefined' && localStorage) {
      const storedProduct = localStorage.getItem('product');
      if (storedProduct) {
        const productOld = JSON.parse(storedProduct);
        console.log(productOld);
        onOpenModal(productOld)
      }
    }
  },[])
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="flex border p-2 justify-between">
          <div className="flex">
            <div>{product.id}</div>. {product.name}
          </div>
          <button onClick={() => onOpenModal(product)}>Details</button>
        </div>
      ))}
    </div>
  );
}