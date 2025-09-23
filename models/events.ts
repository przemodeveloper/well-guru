export interface Event {
  id: string;
  created_at: Date;
  entity: string | null;
  price: number | null;
  name: string | null;
  location: string | null;
  image: string | null;
  type: string | null;
}