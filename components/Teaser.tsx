import TeaserItem from "./TeaserItem";
import retreat from "@/public/photos/retreat.png";
import event from "@/public/photos/event.png";
import workshop from "@/public/photos/workshop.png";
import Link from "next/link";
import { ROUTES } from "@/routes/routes";

const teaserItems = [
  {
    title: "Wyjazdy",
    image: retreat.src,
  },
  {
    title: "Eventy",
    image: event.src,
  },
  {
    title: "Warsztaty",
    image: workshop.src,
  },
];

const Teaser = () => {
  return (
    <>
      <div className="flex justify-between flex-wrap mb-10 gap-y-10">
        <div className="flex gap-5 flex-wrap">
          <h2 className="text-3xl font-bold max-w-[20ch]">
            Odpoczywaj i doświadczaj świadomie
          </h2>
          <p className="text-lg font-bold max-w-[32ch] text-gray-500">
            Selekcjonujemy wyjazdy, wydarzenia i warsztaty offline wspierające
            dobrostan ciała i umysłu
          </p>
        </div>

        <div>
          <Link
            href={ROUTES.EVENTS}
            className="bg-black text-white px-12 py-3 rounded-xl cursor-pointer text-nowrap"
          >
            Odkrywaj wydarzenia
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {teaserItems.map((item) => (
          <TeaserItem key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
    </>
  );
};

export default Teaser;
