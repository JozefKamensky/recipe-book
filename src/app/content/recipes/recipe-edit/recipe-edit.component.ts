import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { 
  FormGroup,
  Validators,
  FormControl,
  FormArray
 } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onAddInredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'ingredientName': new FormControl(null, Validators.required),
        'count': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onSubmit(){
    const recipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['img'],
      3,
      this.recipeForm.value['ingredients']
    );

    if (this.editMode) this.recipeService.updateRecipe(this.id, recipe);
    else this.recipeService.addRecipe(recipe);
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {'relativeTo': this.route});
  }

  onIngDelete(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  initForm(){
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDescription = recipe.desc;
      if(recipe['ingredients']){
        for (let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'ingredientName': new FormControl(ingredient.name, Validators.required),
              'count': new FormControl(ingredient.count, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'img': new FormControl(recipeImage),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

}
