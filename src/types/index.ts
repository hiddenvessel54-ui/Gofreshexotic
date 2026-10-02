export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  order_index: number;
}

export interface MenuItemExtra {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category_id: string;
  category_slug: string;
  category_name?: string;
  image_url: string;
  is_available: boolean;
  is_featured: boolean;
  is_popular?: boolean;
  badge?: string; // e.g. "Best Seller", "Chef's Special", "New"
  prep_time_minutes?: number;
  calories?: string;
  tags?: string[];
  options?: {
    sizes?: { name: string; price_offset: number }[];
    spice_levels?: string[];
    available_extras?: MenuItemExtra[];
  };
}

export interface CartItem {
  cart_id: string;
  item: MenuItem;
  quantity: number;
  selected_size?: string;
  size_price_offset: number;
  selected_spice_level?: string;
  selected_extras: MenuItemExtra[];
  special_instructions?: string;
  unit_total_price: number;
}

export interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  delivery_type: 'pickup' | 'delivery';
  delivery_address?: string;
  landmark?: string;
  area?: string;
  notes?: string;
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
  delivery_fee: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  created_at: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image_url: string;
  description?: string;
  span?: 'col-span-1' | 'col-span-2' | 'row-span-2' | 'col-span-1 row-span-2' | 'col-span-2 row-span-2';
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service_type?: string;
  message: string;
  created_at: string;
  status: 'unread' | 'read' | 'resolved';
}
