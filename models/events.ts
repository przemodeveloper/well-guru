export interface Event {
  availableSpots: string;
  category: string;
  id: string;
  created_at: Date;
  entity: string | null;
  price: number | null;
  name: string | null;
  location: string | null;
  image: string | null;
  type: "event" | "workshop" | "retreat";
  locationd_id: number;
  tags: string;
  startDate: Date;
  endDate: Date;
}
