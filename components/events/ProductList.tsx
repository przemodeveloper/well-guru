import type { Event } from "@/models/events";
import ProductCard from "./ProductCard";

interface ProductListProps {
  events: Event[];
}

const ProductList = ({ events }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 px-2">
      {events?.map((item) => (
        <ProductCard
          productId={item.id}
          key={item.id}
          image={item.image || ""}
          name={item.name || ""}
          price={item.price || 0}
          eventType={item.type || ""}
          entity={item.entity || ""}
          location={item.location || ""}
          startDate={item?.startDate}
          endDate={item?.endDate}
          category={item?.category}
        />
      ))}
    </div>
  );
};

export default ProductList;
