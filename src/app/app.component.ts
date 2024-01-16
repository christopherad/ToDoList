import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Item } from './Models/item'
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ToDoList';

  filter: "all" | "enCours" | "fait"="all";

  allItems: Item[]=[
    {description:"Faire des courses", fait:false},
    {description:"Faire le ménage", fait:true},
    {description:"Assiter au cours", fait:true},
    {description:"Faire à manger", fait:false},
    {description:"Installer Angular", fait:true},
  ];

  get items(){
    if (this.filter==="all"){
      return this.allItems;
    }
    return this.allItems.filter((item)=>
      this.filter==="fait" ? item.fait: !item.fait);
  }

  addItem(description: string){
    this.allItems.push({
      description, fait:false
    });
  }
  remove(item: Item){
    this.allItems.splice(this.allItems.indexOf(item),1);
  }
}
