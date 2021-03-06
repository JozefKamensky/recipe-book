import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService){}

  // onRecipeSelected(){
  //   console.log('Recipe clicked.');
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
