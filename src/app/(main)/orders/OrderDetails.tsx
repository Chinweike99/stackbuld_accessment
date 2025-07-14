import { Button } from '@/components/ui/button'
import { Order } from '@/types/types'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'


interface OrderDetailsProps {
  order: Order
}

export default function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <div className="border rounded-lg p-6 mb-6">
          <h2 className="font-bold text-xl mb-4">Order Items</h2>
          <div className="divide-y">
            {order.items.map((item) => (
              <div key={item.product.id} className="py-4 flex gap-4">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-gray-500 text-sm">
                    ${item.product.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 flex justify-between font-bold">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="border rounded-lg p-6 sticky top-4">
          <h2 className="font-bold text-xl mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Order Status</h3>
              <p
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : order.status === 'cancelled'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Order Date</h3>
              <p>{format(new Date(order.date), 'MMMM d, yyyy')}</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Order Number</h3>
              <p>{order.id}</p>
            </div>
          </div>
          <Link href="/" className="mt-6 block">
            <Button className="w-full">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}