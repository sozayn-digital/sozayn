import { Order } from '@/types/orders.d.ts';
import { db } from '@/lib/services/firebase';

/**
 * Real-time order update service using Firebase
 * @param {string} restaurantId - ID of restaurant to listen for updates
 * @param {(order: Order) => void} callback - Function to handle new orders
 */
export function initRealtimeOrders(restaurantId: string, callback: (order: Order) => void) {
  const ordersRef = db.collection('restaurants').doc(restaurantId).collection('orders');
  
  return ordersRef.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        callback({
          id: change.doc.id,
          ...change.doc.data(),
          timestamp: new Date(change.doc.data().timestamp.toMillis())
        });
      }
    });
  });
}