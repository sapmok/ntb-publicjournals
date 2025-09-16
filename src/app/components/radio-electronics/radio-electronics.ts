import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PdfItem, PdfTableComponent } from '../../shared/ui/pdf-table/pdf-table';
import { ScrollUp } from '../../shared/ui/scroll-up/scroll-up';

@Component({
  selector: 'app-radio-electronics',
  imports: [PdfTableComponent, ScrollUp],
  templateUrl: './radio-electronics.html',
  styleUrl: './radio-electronics.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioElectronicsComponent {
  readonly radioElectronicsDocs: PdfItem[] = [
    {
      title: 'Оптика, фотоника и лазерные технологии - 2025 ',
      file: 'ИБ-ОПТИКА-2025.pdf',
      info: 'ИБ-ОПТИКА-2025.pdf',
      sizeLabel: '786 КБ',
    },
    {
      title: 'Полупроводниковая ЭКМБ за рубежом - 2025 ',
      file: 'АМ-ПОЛУПРОВОДНИКИ-2025.pdf',
      info: 'АМ-ПОЛУПРОВОДНИКИ-2025.pdf',
      sizeLabel: '3.3 МБ',
    },
  ];
}
