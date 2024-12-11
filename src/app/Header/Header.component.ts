import { ChangeDetectionStrategy, Component, signal, type OnInit } from '@angular/core';
import { HeaderNavButtonComponent } from './HeaderNavButton/HeaderNavButton.component';
import { CartButtonComponent } from "./CartButton/CartButton.component";




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderNavButtonComponent, CartButtonComponent, CartButtonComponent],
  templateUrl: './Header.component.html',
  styleUrl: './Header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  buttonTexts = signal([
    "Collections",
    "Men",
    "Women",
    "About",
    "Contact"
  ])
  ngOnInit(): void { }
  selectedButton = signal<string>(this.buttonTexts()[0])

  onSelect(button: string) {
    this.selectedButton.set(button);
  }
}
