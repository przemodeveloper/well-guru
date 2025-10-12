import { categoryTypeLabels, eventTypeLabels } from "@/consts/events";

export type Category = keyof typeof categoryTypeLabels;
export type EventType = keyof typeof eventTypeLabels;

export interface Event {
  availableSpots: string;
  category: Category;
  id: string;
  created_at: Date;
  entity: string | null;
  price: number | null;
  name: string | null;
  location: string | null;
  image: string | null;
  type: EventType;
  locationd_id: number;
  tags: string;
  startDate: Date;
  endDate: Date;
}
