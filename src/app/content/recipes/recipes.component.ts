import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
    selector: 'recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  recipeForDetail;

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        console.log('Recipe click recognized.');
        this.recipeForDetail = recipe;
      }
    );
  }
}
