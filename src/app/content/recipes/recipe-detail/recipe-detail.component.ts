import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  detailRecipe: Recipe;
  id: number;

  constructor(private shoppingService: ShoppingListService,
              private recipeService: RecipeService,
              private activeRoute: ActivatedRoute){}

  ngOnInit(){
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.detailRecipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  
  addRecipeToShoppingList(){
    this.shoppingService.addIngredients(this.detailRecipe.ingredients);
  }
}
