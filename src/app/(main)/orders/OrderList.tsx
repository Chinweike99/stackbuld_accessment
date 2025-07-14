import Link from 'next/link'
import { format } from 'date-fns'
import { Order } from '@/types/types'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface OrderListProps {
  orders: Order[]
}

export default function OrderList({ orders }: OrderListProps) {
  if (orders.length === 0) {
    return (
      <div className="border rounded-lg p-8 text-center">
        <p className="text-gray-500 mb-4">You haven&apos;t placed any orders yet</p>
        <Link href="/">
          <Button>Browse Products</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="border rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h3 className="font-medium">Order #{order.id}</h3>
              <p className="text-sm text-gray-500">
                {format(new Date(order.date), 'MMMM d, yyyy')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  order.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : order.status === 'cancelled'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
              <p className="font-medium">${order.total.toFixed(2)}</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="grid gap-4">
              {order.items.slice(0, 2).map((item) => (
                <div key={item.product.id} className="flex items-center gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.product.name}</h4>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              {order.items.length > 2 && (
                <p className="text-sm text-gray-500">
                  + {order.items.length - 2} more items
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Link href={`/orders/${order.id}`}>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}