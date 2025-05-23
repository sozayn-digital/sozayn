import { renderHook } from '@testing-library/react';
import { useOrders } from '@/lib/hooks/useOrders';

describe('useOrders hook', () => {
  it('should fetch initial orders', async () => {
    const { result } = renderHook(() => useOrders());
    
    expect(result.current.orders).toEqual([]);
    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.orders.length).toBeGreaterThan(0);
  });
});