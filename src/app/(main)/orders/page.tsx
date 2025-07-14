
import { getOrders } from '@/stores/orders'
import { Metadata } from 'next'
import OrderList from './OrderList'

export const metadata: Metadata = {
  title: 'Your Orders',
  description: 'View your order history',
}

export default function OrdersPage() {
  const orders = getOrders()

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      <OrderList orders={orders} />
    </div>
  )
}