export interface Order {
  id: string;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  createdAt: Date;
  updatedAt: Date;
}