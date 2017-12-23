import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
    recipes: Recipe[] = [
        new Recipe(
          'Ham and Eggs',
          'Quick and filling breakfast.',
          'https://www.toprecepty.cz/fotky/recepty/0069/ham-and-eggs-sunka-s-vejci-164432-1920-1080.jpg',
          1),
        new Recipe(
          'Beef Steak',
          'Lunch for REAL men!',
          'https://cdn.pixabay.com/photo/2017/04/30/09/30/steak-2272464_960_720.jpg',
          3)
      ];

    constructor(){

    }
}
