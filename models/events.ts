export interface Event {
  id: string;
  createdAt: Date;
  entity: string;
  price: number;
  name: string;
  location: string;
  image: string;
  type: string;
}