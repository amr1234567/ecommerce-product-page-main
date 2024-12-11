import { Injectable, signal } from '@angular/core';

export type CartItem = {
  productid: number;
  quantity: number;
}
export type ProductItemType = {
  id: number;
  name: string;
  price: number;
  image: string;
  imageThumbnail: string;
  description: string;
  discount: number;
}

const InitialData: ProductItemType[] = [
  {
    id: 1,
    name: "Running Shoes",
    price: 79.99,
    image: "/images/image-product-1.jpg",
    imageThumbnail: "/images/image-product-1-thumbnail.jpg",
    description: "Lightweight and durable running shoes designed for comfort and performance.",
    discount: 15,
  },
  {
    id: 2,
    name: "Casual Sneakers",
    price: 59.99,
    imageThumbnail: "/images/image-product-2-thumbnail.jpg",
    image: "/images/image-product-2.jpg",
    description: "Stylish casual sneakers perfect for everyday wear.",
    discount: 10,
  },
  {
    id: 3,
    name: "Leather Boots",
    price: 129.99,
    imageThumbnail: "/images/image-product-3-thumbnail.jpg",
    image: "/images/image-product-3.jpg",
    description: "Premium leather boots with rugged soles for outdoor adventures.",
    discount: 20,
  },
  {
    id: 4,
    name: "Formal Shoes",
    price: 99.99,
    imageThumbnail: "/images/image-product-4-thumbnail.jpg",
    image: "/images/image-product-4.jpg",
    description: "Elegant formal shoes crafted with high-quality materials for a sharp look.",
    discount: 5,
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = signal<ProductItemType[]>([]);
  private cartItems = signal<CartItem[]>([]);
  constructor() {
    this.products.set(InitialData);
  }


  addToCart(productId: number, quantity: number) {
    console.log(quantity)
    if (quantity < 0) {
      console.error("Invalid quantity")
      return;
    }
    const product = this.products().find(p => p.id == productId);
    const cartItem = this.cartItems().find(c => c.productid == productId);
    if (product) {
      if (cartItem) {
        if (quantity === 0) {
          this.cartItems.update(c => c.filter(cart => cart.productid != productId));
          return;
        }
        this.cartItems.update(c => c.map(cart => {
          if (cart.productid == productId) {
            const newCart = { ...cart };
            newCart.quantity = quantity;
            return newCart;
          }
          return cart;
        }));
      }
      else {
        if (quantity !== 0) {
          let newCart = { productid: productId, quantity: quantity } as CartItem;
          this.cartItems.update(c => c.concat(newCart));
        }
      }
    }
  }

  get getCartItems() {
    return this.cartItems.asReadonly();
  }
  get getProducts() {
    return this.products.asReadonly();
  }

  getCartItemById(productId: number) {
    return this.cartItems().find(c => c.productid == productId);
  }

  getProductById(productId: number) {
    return this.products().find(p => p.id == productId);
  }

  emptyCartItems() {
    this.cartItems.update(v => []);
  }

  deleteCartItem(productId: number) {
    this.cartItems.update(c => c.filter(cart => cart.productid != productId));
  }
}
