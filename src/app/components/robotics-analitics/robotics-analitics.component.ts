import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem, PdfTableComponent } from '../../shared/ui/pdf-table/pdf-table';
import { ScrollUp } from '../../shared/ui/scroll-up/scroll-up';

@Component({
  selector: 'app-robotics-analitics',
  imports: [PdfTableComponent, ScrollUp],
  templateUrl: './robotics-analitics.component.html',
  styleUrl: './robotics-analitics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoboticsAnaliticsComponent {
  readonly roboticsAnaliticsDocs: PdfItem[] = [
    {
      title: 'Автоматизация, робототехника и связь для индустрии - 2025 ',
      file: 'ИБ-АРС-2025.pdf',
      info: 'ИБ-АРС-2025.pdf',
      sizeLabel: '868 КБ',
    },
    {
      title: 'Дроны и беспилотные системы - 2025 ',
      file: 'ИБ-ДБС-2025.pdf',
      info: 'ИБ-ДБС-2025.pdf',
      sizeLabel: '801 КБ',
    },
    {
      title: 'Роботизированные системы космического базирования - 2025 ',
      file: 'АМ-КОМИЧЕСКОЕ_БАЗИРОВАНИЕ-2025.pdf',
      info: 'АМ-КОМИЧЕСКОЕ_БАЗИРОВАНИЕ-2025.pdf',
      sizeLabel: '2.2 МБ',
    },
    {
      title: 'Разработка экзоскелетов - 2025 ',
      file: 'АМ-ЭКЗОСКЕЛЕТ-2025.pdf',
      info: 'АМ-ЭКЗОСКЕЛЕТ-2025.pdf',
      sizeLabel: '3.5 МБ',
    },
  ];
}
