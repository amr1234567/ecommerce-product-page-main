import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-move-photo-button',
  standalone: true,
  imports: [],
  templateUrl: './MovePhotoButton.component.html',
  styleUrl: './MovePhotoButton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovePhotoButtonComponent implements OnInit {

  ngOnInit(): void { }

}
