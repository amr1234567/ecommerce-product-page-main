import { ChangeDetectionStrategy, Component, input, output, signal, type OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav-button',
  standalone: true,
  imports: [],
  templateUrl: './HeaderNavButton.component.html',
  styleUrl: './HeaderNavButton.component.scss',
  host: {
    '(click)': 'onSelectButton()'
  }
})
export class HeaderNavButtonComponent implements OnInit {
  text = input.required<string>();
  onSelect = output()
  ngOnInit(): void { }

  onSelectButton() {
    this.onSelect.emit();
  }
}
