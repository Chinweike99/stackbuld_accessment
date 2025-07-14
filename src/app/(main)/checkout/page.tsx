'use client'

import { Button } from '@/components/ui/button'
import { selectCartTotal, useCartStore } from '@/stores/cartStores'
import { saveOrder } from '@/stores/orders'
import { Order } from '@/types/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


export default function CheckoutPage() {
   const total = useCartStore(selectCartTotal)
  const items = useCartStore((state) => state.items)
  const clearCart = useCartStore((state) => state.clearCart)
  const router = useRouter()
  const [orderId, setOrderId] = useState<string | null>(null)

   useEffect(() => {
    if (items.length === 0 && !orderId) {
      router.push('/cart')
    }
  }, [items, orderId, router])

  useEffect(() => {
    if (orderId) {
      router.push(`/checkout/success?orderId=${orderId}`)
    }
  }, [orderId, router])

  const handlePlaceOrder = () => {
  const newOrderId = `ORD-${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, '0')}`
  
  const newOrder: Order = {
    id: newOrderId,
    date: new Date().toISOString(),
    items: [...items],
    total,
    status: 'completed',
  }
  
  saveOrder(newOrder)
  setOrderId(newOrderId)
  clearCart()
}

  if (orderId) {
    router.push(`/checkout/success?orderId=${orderId}`)
    return null
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="border rounded-lg p-6 mb-6">
            <h2 className="font-bold text-xl mb-4">Shipping Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border rounded-lg p-6">
            <h2 className="font-bold text-xl mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between">
                  <span>
                    {item.product.name} × {item.quantity}
                  </span>
                  <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 font-bold">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Button className="w-full" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}