'use client'
import { useCartStore, selectCartTotal, selectCartCount } from "@/stores/cartStores"

export default function CartSummary() {
  const total = useCartStore(selectCartTotal)
  const itemCount = useCartStore(selectCartCount)
  
  return (
    <div className="border rounded-lg p-4">
      <h2 className="font-bold text-lg mb-4">Order Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal ({itemCount} items)</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}