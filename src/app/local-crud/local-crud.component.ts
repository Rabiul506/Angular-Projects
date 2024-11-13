import { LocalService } from './../local.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-local-crud',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './local-crud.component.html',
  styleUrl: './local-crud.component.scss'
})
export class LocalCrudComponent implements OnInit{
  output: string = '';
  itemForm: FormGroup;
  name!: string;

  constructor(
    private fb: FormBuilder,
    private ls: LocalService) {
      this.itemForm = this.fb.group({
        name: [''],
        description: ['']
      });
    }

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

  existingArray: any [] = [];

// Form 

onSubmit() {
    if (this.itemForm.valid) {
      const formData = this.itemForm.value;
      this.ls.addItemToArray('itemsArray', formData);
      this.existingArray.push(formData)
      this.itemForm.reset();
    }
    console.log(this.itemForm.value);
    
  }

  onRemoveItem(name: string) {
    this.ls.removeItemFromArray('itemsArray', name, '');
  }

  ngOnInit(): void {
      this.existingArray
  }
}
