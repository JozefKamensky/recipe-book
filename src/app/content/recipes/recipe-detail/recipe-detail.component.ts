import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping/shopping-list.service';

@Component({
    selector: 'recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent{
  @Input() detailRecipe: Recipe;

  constructor(private shoppingService: ShoppingListService){}
  
  addRecipeToShoppingList(){
    this.shoppingService.addIngredients(this.detailRecipe.ingredients);
  }
}
