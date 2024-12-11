import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { ProductsService } from '../../../Products.service';
import { CartItemComponent } from "./CartItem/CartItem.component";

@Component({
  selector: 'app-check-out-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './CheckOutCart.component.html',
  styleUrl: './CheckOutCart.component.scss',
})
export class CheckOutCartComponent implements OnInit {

  private productsServices = inject(ProductsService);
  ngOnInit(): void { }

  cartItems = this.productsServices.getCartItems;

  checkOut() {
    this.productsServices.emptyCartItems();
  }

  emptyCartItem(id: number): void {
    this.productsServices.deleteCartItem(id);
  }
}
