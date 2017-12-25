import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent{
  ingredients: Ingredient[] = [
    new Ingredient('Ham', 1),
    new Ingredient('Eggs', 4),
    new Ingredient('Apples', 3)
  ];

  onIngredientAdded(ing: Ingredient){
    this.ingredients.push(ing);
  }
}
