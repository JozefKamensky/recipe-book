import { 
  Component,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent{

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('countInput') countInputRed: ElementRef;

  onAddToList(){
    this.ingredientAdded.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value, 
        this.countInputRed.nativeElement.value)
    );
  }

}
