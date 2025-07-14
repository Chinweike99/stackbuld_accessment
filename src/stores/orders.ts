import { Order, OrderHistory } from "@/types/types"


const ORDERS_KEY = 'mini-commerce-orders'

// Get all orders
export const getOrders = (): OrderHistory => {
  if (typeof window === 'undefined') return []
  const orders = localStorage.getItem(ORDERS_KEY)
  return orders ? JSON.parse(orders) : []
}

// Save a new order
export const saveOrder = (order: Order): void => {
  if (typeof window === 'undefined') return
  const orders = getOrders()
  localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...orders]))
}

// Get single order by ID
export const getOrderById = (id: string): Order | undefined => {
  const orders = getOrders()
  return orders.find((order) => order.id === id)
}