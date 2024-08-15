export interface EventType {
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  images: string[];
  ticketTypes: {
    name: string;
    price: number;
    limit: number;
  }[];

  createdAt: string;
  updatedAt: string;
  user: any;
  _id: string;
}

export interface BookingType {
  event: EventType;
  ticketType: String;
  ticketsCount: Number;
  totalAmount: Number;
  paymentId: String;
  user: any;
  _id: string;
  createdAt: string;
}
