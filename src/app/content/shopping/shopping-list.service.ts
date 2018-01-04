import { Subject } from 'rxjs/Subject';

import { Ingredient } from "../../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new Subject<void>();
  ingredientToEdit = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Ham', 1),
    new Ingredient('Eggs', 4),
    new Ingredient('Apples', 3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next();
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientsChanged.next();
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next();
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next();
  }
}