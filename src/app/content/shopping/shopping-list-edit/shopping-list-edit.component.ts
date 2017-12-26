import { 
  Component,
  ElementRef,
  ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent{

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('countInput') countInputRed: ElementRef;

  constructor(private shoppingService: ShoppingListService){}

  onAddToList(){
    this.shoppingService.addIngredient(
      this.nameInputRef.nativeElement.value, 
      this.countInputRed.nativeElement.value
    );
  }

}
