import { ChangeDetectionStrategy, Component, input, output, type OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './AddToCartButton.component.html',
  styleUrl: './AddToCartButton.component.scss',
  host: {
    '(click)': 'onClick()'
  }
})
export class AddToCartButtonComponent implements OnInit {

  ngOnInit(): void { }
  onUpdate = output<void>();
  icon = input.required<string>();

  onClick() {
    this.onUpdate.emit();
  }
}
