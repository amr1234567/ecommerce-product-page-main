import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./Header/Header.component";
import { PreviewContentSectionComponent } from "./PreviewContentSection/PreviewContentSection.component";
import { ImagePerviewsComponent } from "./ImagePerviews/ImagePerviews.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PreviewContentSectionComponent, ImagePerviewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedProductId = signal(1)

  selectProduct(productId: number) {
    this.selectedProductId.set(productId);
  }
}
