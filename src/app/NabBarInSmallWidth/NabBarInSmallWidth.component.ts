import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-nab-bar-in-small-width',
  standalone: true,
  imports: [],
  templateUrl: './NabBarInSmallWidth.component.html',
  styleUrl: './NabBarInSmallWidth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NabBarInSmallWidthComponent implements OnInit {

  ngOnInit(): void { }

}
