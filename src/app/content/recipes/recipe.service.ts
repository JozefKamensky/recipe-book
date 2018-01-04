import { Recipe } from './recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Ham and Eggs',
      'Quick and filling breakfast.',
      'https://www.toprecepty.cz/fotky/recepty/0069/ham-and-eggs-sunka-s-vejci-164432-1920-1080.jpg',
      1,
      [new Ingredient('Ham', 1), new Ingredient('Onion', 1), new Ingredient('Eggs', 4)]
    ),
    new Recipe(
      'Beef Steak',
      'Lunch for REAL men!',
      'https://cdn.pixabay.com/photo/2017/04/30/09/30/steak-2272464_960_720.jpg',
      3,
      [new Ingredient('Beef steak', 2)]
    )
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}