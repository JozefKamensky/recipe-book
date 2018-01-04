import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingSubscription: Subscription;

  constructor(private shoppingService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppingService.getIngredients();
    this.ingSubscription = this.shoppingService.ingredientsChanged.subscribe(
      () => {
        this.ingredients = this.shoppingService.getIngredients();
      }
    )
  }

  ngOnDestroy(){
    this.ingSubscription.unsubscribe();
  }
}
