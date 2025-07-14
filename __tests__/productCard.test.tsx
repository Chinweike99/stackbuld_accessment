import '@testing-library/jest-dom'
// import ProductCard from '@/app/components/products/ProductCard'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from 'src/app/components/products/ProductCard'
import { useCartStore } from 'src/stores/cartStores'
// import { useCartStore } from '@/stores/cartStores'

// Fix the mock path to match your import
jest.mock('@/stores/cartStores', () => ({
  useCartStore: jest.fn(),
}))

const mockProduct = {
  id: '1',
  slug: 'test-product',
  name: 'Test Product',
  description: 'Test description',
  price: 99.99,
  image: '/test-image.jpg',
  category: 'test',
  stock: 10,
}

describe('ProductCard', () => {
  const mockAddItem = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    // Simplified mock implementation
    ;(useCartStore as jest.MockedFunction<typeof useCartStore>).mockImplementation((selector) => {
      return selector({
          addItem: mockAddItem,
          items: [],
          removeItem: function (productId: string): void {
              throw new Error('Function not implemented.')
          },
          updateQuantity: function (productId: string, quantity: number): void {
              throw new Error('Function not implemented.')
          },
          clearCart: function (): void {
              throw new Error('Function not implemented.')
          }
      })
    })
  })

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />)
    
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument()
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument()
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument()
  })

  it('calls addItem when Add to Cart button is clicked', () => {
    render(<ProductCard product={mockProduct} />)
    fireEvent.click(screen.getByText('Add to Cart'))
    
    expect(mockAddItem).toHaveBeenCalledWith(mockProduct)
  })
})