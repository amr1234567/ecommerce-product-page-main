import { ChangeDetectionStrategy, Component, computed, inject, input, model, output, signal, type OnInit } from '@angular/core';
import { ImagePerviewDirective } from '../../Directives/ImagePerview.directive';
import { ProductItemType, ProductsService } from '../Products.service';

@Component({
  selector: 'app-image-perviews',
  standalone: true,
  imports: [ImagePerviewDirective],
  templateUrl: './ImagePerviews.component.html',
  styleUrl: './ImagePerviews.component.scss',
})
export class ImagePerviewsComponent implements OnInit {

  private productService = inject(ProductsService);
  products = this.productService.getProducts
  selectedProductId = input.required<number>();
  onSelectProduct = output<number>();
  showPreviewImage = signal(false);

  prodcutSelected = computed(() => this.productService.getProductById(this.selectedProductId()))
  ngOnInit(): void { }

  onSelect(id: number) {
    this.onSelectProduct.emit(id);
  }

  ToggleImage() {
    this.showPreviewImage.update(v => !v);
  }
}
