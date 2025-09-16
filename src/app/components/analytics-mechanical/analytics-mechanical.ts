import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollUp } from '../../shared/ui/scroll-up/scroll-up';
import { PdfItem, PdfTableComponent } from '../../shared/ui/pdf-table/pdf-table';

@Component({
  selector: 'app-analytics-mechanical',
  imports: [ScrollUp, PdfTableComponent],
  templateUrl: './analytics-mechanical.html',
  styleUrl: './analytics-mechanical.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyticsMechanicalComponent {
  readonly roboticsAnaliticsDocs: PdfItem[] = [
    {
      title: 'Разработка в США ПО для ГЗЛА - 2025 ',
      file: 'АМ-ГПВРД-2025.pdf',
      info: 'АМ-ГПВРД-2025.pdf',
      sizeLabel: '4.2 МБ',
    },
    {
      title: 'Технологии производства КМ для АП - 2025 ',
      file: 'АМ-КМ-2025.pdf',
      info: 'АМ-КМ-2025.pdf',
      sizeLabel: '3.9 МБ',
    },
  ];
}
