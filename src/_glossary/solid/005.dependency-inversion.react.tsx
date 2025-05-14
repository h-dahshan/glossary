/**
 * - component should not depend on low-level implementation,
 *      both should depend on abstractions.
 */

import { useState, useEffect } from "react";

// BAD - breaks single-responsibility and dependency-inversion
const _OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then(setOrders);
  }, []);

  return <div>{orders.length} orders</div>;
};

// GOOD - break into abstractions
type Order = {
  id: string;
  status: string;
};
/**
 * - abstract fetching - SR
 * - make it dynamic = more abstraction = DI
 */
// orderService.ts
const getOrders = async (): Promise<Order[]> => {
  const res = await fetch("/api/orders");
  return res.json();
};
/**
 * - rendering - SR (not 100%)
 * - extract login into a hook = more abstraction = DI
 */
// OrderList.tsx
type OrderListProps = {
  fetchOrders: () => Promise<Order[]>;
};
const OrderList = ({ fetchOrders }: OrderListProps) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, [fetchOrders]);

  return <div>{orders.length} orders</div>;
};

// review rtk-query and tanstack-query; good DI
