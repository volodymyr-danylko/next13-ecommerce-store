import { Product } from "@/types";
import { FC } from "react";

type ProductListProps = {
  title: string;
  items: Product[];
};

const ProductList: FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      <div>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
