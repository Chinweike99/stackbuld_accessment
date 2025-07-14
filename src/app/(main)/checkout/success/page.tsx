'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CheckoutSuccess() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')

  return (
    <div className="container py-8 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order #{orderId} has been received.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button variant="outline">Continue Shopping</Button>
          </Link>
          <Link href="/orders">
            <Button>View Orders</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}