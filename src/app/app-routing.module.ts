import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './content/recipes/recipes.component';
import { ShoppingComponent } from './content/shopping/shopping.component';
import { RecipeDetailComponent } from './content/recipes/recipe-detail/recipe-detail.component';
import {  RecipeDetailEmptyComponent} from './content/recipes/recipe-detail-empty/recipe-detail-empty.component';
import { RecipeEditComponent } from './content/recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeDetailEmptyComponent},
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent},
    { path: ':id/edit', component: RecipeEditComponent}
  ]},
  { path: 'shopping', component: ShoppingComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}