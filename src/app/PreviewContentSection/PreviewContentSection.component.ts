import { ChangeDetectionStrategy, Component, computed, inject, input, output, type OnInit } from '@angular/core';
import { CheckoutComponent } from "./Checkout/Checkout.component";
import { DiscountPricePipe } from '../../Directives/DiscountPrice.pipe';
import { CommonModule } from '@angular/common';
import { CartItem, ProductsService } from '../Products.service';

@Component({
  selector: 'app-preview-content-section',
  standalone: true,
  imports: [CheckoutComponent, DiscountPricePipe, CommonModule],
  templateUrl: './PreviewContentSection.component.html',
  styleUrl: './PreviewContentSection.component.scss',
})
export class PreviewContentSectionComponent implements OnInit {
  private productsServices = inject(ProductsService);
  productItemId = input.required<number>();
  productItem = computed(() => this.productsServices.getProductById(this.productItemId()));
  cartItem = computed<CartItem>(() => this.productsServices.getCartItemById(this.productItemId())
    ?? ({ productid: this.productItemId(), quantity: 0 } as CartItem));
  ngOnInit(): void { }
}
