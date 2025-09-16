import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem, PdfTableComponent } from '../../shared/ui/pdf-table/pdf-table';
import { ScrollUp } from '../../shared/ui/scroll-up/scroll-up';

@Component({
  selector: 'app-naval-forces',
  imports: [PdfTableComponent, ScrollUp],
  templateUrl: './naval-forces.component.html',
  styleUrl: './naval-forces.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavalForcesComponent {
  readonly navalDocs: PdfItem[] = [
    {
      title: '"Кораблестроение - 2.2025"',
      file: 'Д-КОРАБЛЕСТРОЕНИЕ-2025.pdf',
      info: 'Д-КОРАБЛЕСТРОЕНИЕ-2025.pdf',
      sizeLabel: '2.1 МБ',
    },
  ];
}
