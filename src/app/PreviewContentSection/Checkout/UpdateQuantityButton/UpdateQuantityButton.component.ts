import { ChangeDetectionStrategy, Component, input, output, type OnInit } from '@angular/core';

@Component({
  selector: 'app-update-quantity-button',
  standalone: true,
  imports: [],
  templateUrl: './UpdateQuantityButton.component.html',
  styleUrl: './UpdateQuantityButton.component.scss',
  host: {
    "(click)": "OnClick()"
  }
})
export class UpdateQuantityButtonComponent implements OnInit {

  ngOnInit(): void { }
  icon = input.required<string>()

  onUpdate = output<void>();

  OnClick(): void {
    this.onUpdate.emit()
  }
}
