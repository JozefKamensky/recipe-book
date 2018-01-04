import { Subject } from 'rxjs/Subject';

import { Ingredient } from "../../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new Subject<void>();
  private ingredients: Ingredient[] = [
    new Ingredient('Ham', 1),
    new Ingredient('Eggs', 4),
    new Ingredient('Apples', 3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(name: string, count: number){
    this.ingredients.push(new Ingredient(name, count));
    this.ingredientsChanged.next();
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientsChanged.next();
  }
}