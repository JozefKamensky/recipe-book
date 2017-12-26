import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit{
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
      () => {
        this.ingredients = this.shoppingService.getIngredients();
      }
    )
  }
}
