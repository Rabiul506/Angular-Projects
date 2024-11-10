import { Component } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-local-crud',
  standalone: true,
  imports: [],
  templateUrl: './local-crud.component.html',
  styleUrl: './local-crud.component.scss'
})
export class LocalCrudComponent {
  output: string = '';

  constructor(private ls: LocalService) {}

  createItem() {
    this.ls.setItem('exampleKey', { name: 'Angular', version: '18' });
    this.output = 'Item created!';
  }

  readItem() {
    const item = this.ls.getItem('exampleKey');
    this.output = item ? JSON.stringify(item, null, 2) : 'No item found!';
  }

  updateItem() {
    this.ls.updateItem('exampleKey', (currentValue) => {
      return { ...currentValue, version: '18.1' }; // Example update
    });
    this.output = 'Item updated!';
  }

  deleteItem() {
    this.ls.removeItem('exampleKey');
    this.output = 'Item deleted!';
  }
}
