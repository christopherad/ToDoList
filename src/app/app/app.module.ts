import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ItemComponent } from '../item/item.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
