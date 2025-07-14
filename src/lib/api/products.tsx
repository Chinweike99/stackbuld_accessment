import { Product } from "@/types/types";

const PRODUCTS_KEY = "mini-commerce-products";

export const seedProducts = (): Product[] => {
  return [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      slug: "wireless-bluetooth-headphones",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      description:
        "Premium wireless headphones with noise cancellation and 30-hour battery life.",
      category: "Electronics",
      stock: 25,
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      slug: "smart-fitness-watch",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      description:
        "Track your fitness goals with GPS, heart rate monitoring, and smartphone notifications.",
      category: "Electronics",
      stock: 15,
    },
    {
      id: "3",
      name: "Organic Cotton T-Shirt",
      slug: "organic-cotton-t-shirt",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      description:
        "Soft, comfortable, and sustainably made organic cotton t-shirt.",
      category: "Clothing",
      stock: 50,
    },
    {
      id: "4",
      name: "Stainless Steel Water Bottle",
      slug: "stainless-steel-water-bottle",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
      description:
        "Insulated stainless steel water bottle keeps drinks cold for 24 hours.",
      category: "Accessories",
      stock: 30,
    },
    {
      id: "5",
      name: "LED Desk Lamp",
      slug: "led-desk-lamp",
      price: 45.99,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description:
        "Adjustable LED desk lamp with touch controls and USB charging port.",
      category: "Home & Office",
      stock: 20,
    },
    {
      id: "6",
      name: "Leather Wallet",
      slug: "leather-wallet",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop",
      description:
        "Genuine leather wallet with RFID blocking technology and multiple card slots.",
      category: "Accessories",
      stock: 40,
    },
    {
      id: "7",
      name: "Wireless Charging Pad",
      slug: "wireless-charging-pad",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
      description:
        "Fast wireless charging pad compatible with all Qi-enabled devices.",
      category: "Electronics",
      stock: 35,
    },
    {
      id: "8",
      name: "Bamboo Cutting Board",
      slug: "bamboo-cutting-board",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      description:
        "Eco-friendly bamboo cutting board with juice groove and non-slip feet.",
      category: "Kitchen",
      stock: 60,
    },
    {
      id: "9",
      name: "Bluetooth Speaker",
      slug: "bluetooth-speaker",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
      description:
        "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
      category: "Electronics",
      stock: 28,
    },
    {
      id: "10",
      name: "Yoga Mat",
      slug: "yoga-mat",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      description:
        "Non-slip yoga mat with extra cushioning for comfort during workouts.",
      category: "Sports & Fitness",
      stock: 45,
    },
  ];
};

export const getProducts = async (): Promise<Product[]> => {
  if (typeof window !== "undefined") {
    const storedProducts = localStorage.getItem(PRODUCTS_KEY);
    if (storedProducts) return JSON.parse(storedProducts);
  }

  const products = seedProducts();
  if (typeof window !== "undefined") {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  }
  return products;
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | undefined> => {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
};
