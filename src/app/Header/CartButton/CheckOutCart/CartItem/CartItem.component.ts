import { ChangeDetectionStrategy, Component, computed, inject, input, output, type OnInit } from '@angular/core';
import { CartItem, ProductItemType, ProductsService } from '../../../../Products.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './CartItem.component.html',
  styleUrl: './CartItem.component.scss',
})
export class CartItemComponent implements OnInit {
  private productsServices = inject(ProductsService);

  item = input.required<CartItem>();
  delete = output<number>()
  productItem = computed(() => this.productsServices.getProductById(this.item().productid) ?? {} as ProductItemType)
  ngOnInit(): void { }

  finalPrice = computed(() =>
    parseFloat((this.productItem()?.price * (1 - this.productItem()?.discount / 100) * this.item().quantity).toFixed(2))
  )

  onDelete() {
    this.delete.emit(this.item().productid)
  }
}
