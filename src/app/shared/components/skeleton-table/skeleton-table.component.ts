import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-table.component.html',
  styleUrl: './skeleton-table.component.scss'
})
export class SkeletonTableComponent {
  @Input() rows: number = 5;
  @Input() columns: number = 5;

  get rowsArray() { return Array(this.rows).fill(0); }
  get colsArray() { return Array(this.columns).fill(0); }
}
