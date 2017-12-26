import { EventEmitter } from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<void>();
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
    this.ingredientsChanged.emit();
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients = this.ingredients.concat(ingredients);
    this.ingredientsChanged.emit();
  }
}