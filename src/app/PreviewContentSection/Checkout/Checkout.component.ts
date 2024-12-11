import { ChangeDetectionStrategy, Component, computed, effect, inject, input, OnChanges, output, signal, SimpleChanges, type OnInit } from '@angular/core';
import { UpdateQuantityButtonComponent } from "./UpdateQuantityButton/UpdateQuantityButton.component";
import { AddToCartButtonComponent } from "./AddToCartButton/AddToCartButton.component";
import { CartItem, ProductItemType, ProductsService } from '../../Products.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    UpdateQuantityButtonComponent,
    AddToCartButtonComponent
  ],
  templateUrl: './Checkout.component.html',
  styleUrl: './Checkout.component.scss',
})
export class CheckoutComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.changableQueantity.set(this.cartItem().quantity);
  }
  private productsServices = inject(ProductsService);

  itemId = input.required<number>();
  cartItem = input.required<CartItem>();

  changableQueantity = signal(0);


  updateInitialQuantity(quantity: number) {
    if (this.changableQueantity() + quantity >= 0) {
      this.changableQueantity.update(v => v + quantity);
    }

  }

  updateQuantityWithAdd() {
    this.productsServices.addToCart(this.itemId(), this.changableQueantity());
  }
}
