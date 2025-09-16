import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem, PdfTableComponent } from '../../shared/ui/pdf-table/pdf-table';
import { ScrollUp } from "../../shared/ui/scroll-up/scroll-up";

@Component({
  selector: 'app-robotics',
  imports: [PdfTableComponent, ScrollUp],
  templateUrl: './robotics.component.html',
  styleUrl: './robotics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoboticsComponent {
  readonly roboticsAnaliticsDocs: PdfItem[] = [
    {
      title: '"Робототехника - 4.2025"',
      file: 'Д-РОБОТОТЕХНИКА-2025.pdf',
      info: 'Д-РОБОТОТЕХНИКА-2025.pdf',
      sizeLabel: '2.4 МБ',
    },
  ];
}
