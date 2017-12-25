import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: 'recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent{
  recipeForDetail;
  
  onRecipeSelected(recipe: Recipe){
    console.log('Selected recipe item received!');
    this.recipeForDetail = recipe;
    console.log(this.recipeForDetail);
  }
}
