import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount).replace("NGN", "₦").trim();
}

export function generateWhatsAppOrderUrl(params: {
  phone: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  deliveryType: "pickup" | "delivery";
  deliveryAddress?: string;
  landmark?: string;
  items: {
    name: string;
    quantity: number;
    size?: string;
    spice?: string;
    extras?: string[];
    price: number;
    subtotal: number;
  }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  notes?: string;
}): string {
  const {
    phone,
    orderNumber,
    customerName,
    customerPhone,
    deliveryType,
    deliveryAddress,
    landmark,
    items,
    subtotal,
    deliveryFee,
    total,
    notes,
  } = params;

  let message = `🔥 *NEW ORDER — GO FRESH EXOTIC* 🔥\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Order Ref:* #${orderNumber}\n`;
  message += `*Customer:* ${customerName}\n`;
  message += `*Phone:* ${customerPhone}\n`;
  message += `*Fulfillment:* ${deliveryType.toUpperCase()}\n`;

  if (deliveryType === "delivery" && deliveryAddress) {
    message += `*Delivery Address:* ${deliveryAddress}\n`;
    if (landmark) {
      message += `*Landmark:* ${landmark}\n`;
    }
  }

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*ORDER ITEMS:*\n`;

  items.forEach((item, index) => {
    message += `\n${index + 1}. *${item.quantity}x ${item.name}*`;
    if (item.size) message += `\n   ▪ Size: ${item.size}`;
    if (item.spice) message += `\n   ▪ Spice: ${item.spice}`;
    if (item.extras && item.extras.length > 0) {
      message += `\n   ▪ Extras: ${item.extras.join(", ")}`;
    }
    message += `\n   ▪ Subtotal: ₦${item.subtotal.toLocaleString()}`;
  });

  message += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Subtotal:* ₦${subtotal.toLocaleString()}\n`;
  if (deliveryType === "delivery") {
    message += `*Est. Delivery Fee:* ${deliveryFee > 0 ? `₦${deliveryFee.toLocaleString()}` : "To be confirmed based on location"}\n`;
  }
  message += `*TOTAL:* *₦${total.toLocaleString()}*\n`;

  if (notes) {
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*Special Note:* ${notes}\n`;
  }

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_Please confirm availability and account details for payment. Thank you!_`;

  return `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppInquiryUrl(phone: string, text: string = "Hello Go Fresh Exotic! I'd like to make an enquiry."): string {
  return `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
}
