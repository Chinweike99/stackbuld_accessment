import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getOrderById } from "@/stores/orders";
import OrderDetails from "../OrderDetails";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ orderId: string }>;
}): Promise<Metadata> {
  const { orderId } = await params;
  
  return {
    title: `Order #${orderId}`,
    description: `Details for your order #${orderId}`,
  };
}

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const order = getOrderById(orderId);

  if (!order) {
    notFound();
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Order #{order.id}</h1>
      <OrderDetails order={order} />
    </div>
  );
}