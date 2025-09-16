import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../../shared/ui/svg-icon/svg-icon.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [SvgIconComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  private router = inject(Router);
  goHome(): void {
    this.router.navigate(['']);
  }
}
