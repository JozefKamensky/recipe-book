import { Component, Input } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model'; 
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent{
  @Input() ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingListService){}

  onEditItem(index: number){
    this.shoppingService.ingredientToEdit.next(index);
  }
}
