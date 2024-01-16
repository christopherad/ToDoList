import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Models/item'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  editable = false;

  @Input() item!:Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string){
    if (!description) return;
    this.editable= false;
    this.item.description=description;
  }
  removeItem(){
    this.remove.emit(this.item);
  }
}
