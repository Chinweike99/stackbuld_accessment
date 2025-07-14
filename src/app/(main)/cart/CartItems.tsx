'use client'

import { Button } from '@/components/ui/button'
import { selectCartItems, useCartStore } from '@/stores/cartStores'
import Image from 'next/image'
import Link from 'next/link'

export default function CartItems() {
  const items = useCartStore(selectCartItems)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  if (items.length === 0) {
    return (
      <div className="border rounded-lg p-8 text-center">
        <p className="text-gray-500 mb-4">Your cart is empty</p>
        <Link href="/">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="border rounded-lg divide-y">
      {items.map((item) => (
        <div key={item.product.id} className="p-4 flex gap-4">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={item.product.image}
              alt={item.product.name}
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{item.product.name}</h3>
            <p className="text-gray-500 text-sm">${item.product.price.toFixed(2)}</p>
            <div className="flex items-center gap-2 mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <p className="font-medium">
              ${(item.product.price * item.quantity).toFixed(2)}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeItem(item.product.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}