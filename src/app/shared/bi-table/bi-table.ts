import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type BiTableCellType = 'string' | 'number' | 'date' | 'badge';

export interface BiTableHeader {
  label: string;
  key: string;
  type?: BiTableCellType;
}

export interface BiTableConfig {
  headers: BiTableHeader[];
  data: any[];
}

@Component({
  selector: 'app-bi-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bi-table.component.html',
})
export class BiTableComponent {
  @Input() config!: BiTableConfig;

  getCellType(header: BiTableHeader): BiTableCellType {
    return header.type ?? 'string';
  }

  getCellValue(row: any, key: string): any {
    return row?.[key];
  }
}
