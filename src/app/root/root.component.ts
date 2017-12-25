import { Component } from '@angular/core';

@Component({
    selector: 'root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class RootComponent{
  isRecipeListSelected = true;
  isShoppingListSelected = false;

  onheaderSelected(headerSelectedData: {recipeList: boolean, shoppingList: boolean}){
    this.isRecipeListSelected = headerSelectedData.recipeList;
    this.isShoppingListSelected = headerSelectedData.shoppingList;
  }
}
