import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BiTableConfig } from './app/shared/bi-table/bi-table';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
  tableConfig: BiTableConfig = {
    headers: [
      { label: 'Nome', key: 'nome' },
      { label: 'Età', key: 'eta', type: 'number' },
      { label: 'Registrato il', key: 'registrato', type: 'date' },
      { label: 'Stato', key: 'stato', type: 'badge' }
    ],
    data: [
      { nome: 'Mario', eta: 33, registrato: '2025-01-01', stato: 'ATTIVO' },
      { nome: 'Lucia', eta: 27, registrato: '2024-11-28', stato: 'SOSPESO' }
    ]
  };
}

bootstrapApplication(App);
