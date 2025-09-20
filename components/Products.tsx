import ProductCard from "./ProductCard";
import eventOne from "@/public/photos/event_one.png";
import eventTwo from "@/public/photos/event_two.png";
import eventThree from "@/public/photos/event_three.png";
import eventFour from "@/public/photos/event_four.png";
import eventFive from "@/public/photos/event_five.png";
import eventSix from "@/public/photos/event_six.png";
import Link from "next/link";
import { ROUTES } from "@/routes/routes";

const productItems = [
  {
    id: 1,
    title: "Nazwa wydarzenia",
    image: eventOne.src,
    price: 400,
    eventType: "Event",
    organizer: "Organizator",
    location: "Miejsce",
  },
  {
    id: 2,
    title: "Italy Retreat",
    image: eventTwo.src,
    price: 1200,
    eventType: "Retreat",
    organizer: "Yoga Around the Art",
    location: "Sycylia, Włochy",
  },
  {
    id: 3,
    title: "Dziewczyńskie Kolonie vol. 4",
    image: eventThree.src,
    price: 1600,
    eventType: "Retreat",
    organizer: "Dziewczyńskie Kolonie",
    location: "Półwysep Helski",
  },
  {
    id: 4,
    title: "Spring Vibes Yoga",
    image: eventFour.src,
    price: 400,
    eventType: "Event",
    organizer: "Dziewczyńskie Kolonie",
    location: "Góry Sowie",
  },
  {
    id: 5,
    title: "Spring Vibes Yoga",
    image: eventFive.src,
    price: 400,
    eventType: "Event",
    organizer: "Dziewczyńskie Kolonie",
    location: "Góry Sowie",
  },
  {
    id: 6,
    title: "Spring Vibes Yoga",
    image: eventSix.src,
    price: 400,
    eventType: "Event",
    organizer: "Dziewczyńskie Kolonie",
    location: "Góry Sowie",
  },
];

const Products = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold max-w-[20ch] mb-10">
        Odkrywaj wydarzenia
      </h2>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 mb-20">
        {productItems.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            eventType={item.eventType}
            organizer={item.organizer}
            location={item.location}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href={ROUTES.EVENTS}
          className="bg-black text-lg text-white px-12 py-2 rounded-xl cursor-pointer inline-block text-center"
        >
          Zobacz wszystkie
        </Link>
      </div>
    </div>
  );
};

export default Products;
