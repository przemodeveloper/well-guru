import { categoryTypeLabels, eventTypeLabels } from "@/consts/events";
import { Category, EventType } from "@/models/events";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  productId: string;
  image: string;
  name: string;
  entity: string;
  price: number;
  eventType: EventType;
  location: string;
  startDate: Date;
  endDate: Date;
  category: Category;
}

const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const priceFormatter = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
  maximumFractionDigits: 0,
});

const ProductCard = ({
  productId,
  image,
  name,
  eventType,
  entity,
  price,
  location,
  startDate,
  endDate,
  category,
}: ProductCardProps) => {
  const start = dateFormatter.format(new Date(startDate));
  const end = dateFormatter.format(new Date(endDate));
  const areDatesSame = start === end;

  const dateString = areDatesSame ? `${start}` : `${start} - ${end}`;

  const priceString =
    Number(price) === 0 ? "Bezpłatne" : priceFormatter.format(price);

  return (
    <article className="rounded-lg overflow-hidden transition hover:shadow-md p-1">
      <div className="relative aspect-[4/3] w-full border border-gray-300 rounded mb-2 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fetchPriority="high"
          fill
          className="object-cover rounded h-full w-full"
        />
        <p className="text-sm font-semibold text-black bg-white px-2 py-1 rounded-full absolute top-1 left-1">
          {eventTypeLabels[eventType]}
        </p>
        <p className="text-sm font-semibold text-black bg-white px-2 py-1 rounded-full absolute top-1 right-1">
          {categoryTypeLabels[category]}
        </p>
      </div>
      <div className="flex justify-between items-end gap-4 flex-wrap">
        <div className="min-w-0 flex-1">
          <h3 className="font-bold truncate">{name}</h3>
          <p className="text-gray-500">{entity}</p>
          <p className="text-gray-500 truncate">{location}</p>
          <p className="text-lg font-bold">{priceString}</p>
        </div>

        <div className="flex flex-col items-end gap-1 text-right">
          <div className="text-sm text-gray-600">{dateString}</div>
          <Link
            href={`/events/${productId}`}
            aria-label={`Zarezerwuj ${name}`}
            className="bg-black text-sm text-white px-4 py-1 rounded-xl hover:bg-gray-800 transition"
          >
            Rezerwuj
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
