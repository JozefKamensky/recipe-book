import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() headerSelected = new EventEmitter<{recipeList: boolean, shoppingList: boolean}>();

  selectRecipeList(){
    this.headerSelected.emit({
      recipeList: true,
      shoppingList: false
    });
  }

  selectShoppingList(){
    this.headerSelected.emit({
      recipeList: false,
      shoppingList: true
    });
  }
}
