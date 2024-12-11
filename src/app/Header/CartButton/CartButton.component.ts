import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { CheckOutCartComponent } from "./CheckOutCart/CheckOutCart.component";

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [CheckOutCartComponent],
  templateUrl: './CartButton.component.html',
  styleUrl: './CartButton.component.scss',
})
export class CartButtonComponent implements OnInit {

  toggleBool: boolean = false;
  ngOnInit(): void { }

  toggle() {
    this.toggleBool = !this.toggleBool;
  }
}
