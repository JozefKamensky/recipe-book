import { 
  Component,
  OnInit,
  OnDestroy, 
  ViewChild
} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy{
  @ViewChild('form') form: NgForm;
  editSub: Subscription;
  editMode = false;
  editIndex;
  editIng: Ingredient;

  constructor(private shoppingService: ShoppingListService){}

  ngOnInit(){
    this.editSub = this.shoppingService.ingredientToEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editIng = this.shoppingService.getIngredient(this.editIndex);
        this.form.setValue({
          'name': this.editIng.name,
          'count': this.editIng.count
        });
    });
  }

  onAddToList(form: NgForm){
    const ingredient = new Ingredient(form.value.name, form.value.count);
    if(this.editMode) this.shoppingService.updateIngredient(this.editIndex, ingredient);
    else this.shoppingService.addIngredient(ingredient);
    this.onClear();
  }

  onClear(){
    this.form.reset();
    this.editMode = false;
  }

  onDelete(){
    if(!this.editMode) return;
    this.shoppingService.deleteIngredient(this.editIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.editSub.unsubscribe();
  }

}
