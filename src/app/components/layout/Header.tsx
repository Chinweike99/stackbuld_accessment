'use client'

import { Button } from '@/components/ui/button'
import { selectCartCount, useCartStore } from '@/stores/cartStores'
import Link from 'next/link'


export default function Header() {
  const itemCount = useCartStore(selectCartCount)

  return (
    <header className="border-b sticky top-0 z-50 bg-background flex flex-col items-center px-5 md:px-0">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Mini-Commerce
        </Link>
        <nav className="hidden md:flex items-center gap-4">
  <Link href="/" className="text-sm font-medium hover:text-primary">
    Shop
  </Link>
  <Link href="/orders" className="text-sm font-medium hover:text-primary">
    Orders
  </Link>
</nav>
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" className="relative">
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}