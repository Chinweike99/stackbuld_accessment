"use client";

import Link from 'next/link'
import CartItems from './CartItems'
import CartSummary from './CartSummary'
import { Button } from '@/components/ui/button'


export default function CartPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CartItems />
        </div>
        <div>
          <CartSummary />
          <Link href="/checkout">
            <Button className="w-full mt-4">Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}