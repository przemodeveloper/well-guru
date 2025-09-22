import eventOne from "@/public/photos/event_one.png";
import eventTwo from "@/public/photos/event_two.png";
import eventThree from "@/public/photos/event_three.png";
import eventFour from "@/public/photos/event_four.png";
import eventFive from "@/public/photos/event_five.png";
import eventSix from "@/public/photos/event_six.png";

import retreat from "@/public/photos/retreat.png";
import event from "@/public/photos/event.png";
import workshop from "@/public/photos/workshop.png";

export const productItems = [
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

export const teaserItems = [
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