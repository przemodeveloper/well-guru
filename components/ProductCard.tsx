import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  title: string;
  organizer: string;
  price: number;
  eventType: string;
  location: string;
}

const ProductCard = ({
  image,
  title,
  eventType,
  organizer,
  price,
  location,
}: ProductCardProps) => {
  return (
    <div>
      <div className="w-[400px] h-[200px] relative border border-gray-300 rounded mb-2">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="object-cover rounded h-full w-full"
        />
        <p className="text-sm font-semibold text-black bg-white px-2 py-1 rounded-full absolute top-1 right-1">
          {eventType}
        </p>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-gray-500">{organizer}</p>
          <p className="text-gray-500">{location}</p>
          <p className="text-lg font-bold">{price} PLN</p>
        </div>

        <Link
          href="/products"
          className="bg-black text-sm text-white px-4 py-1 rounded-xl cursor-pointer inline-block text-center"
        >
          Rezerwuj
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
