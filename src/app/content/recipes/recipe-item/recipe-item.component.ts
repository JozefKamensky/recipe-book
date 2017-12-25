import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{
  @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipe: Recipe;

  onRecipeSelected(){
    console.log('Recipe item clicked!');
    this.recipeSelected.emit();
  }
}
