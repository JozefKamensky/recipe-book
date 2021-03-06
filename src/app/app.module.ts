import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './content/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './content/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailComponent } from './content/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './content/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './content/recipes/recipe-item/recipe-item.component';
import { RecipesComponent } from './content/recipes/recipes.component';
import { ShoppingComponent } from './content/shopping/shopping.component';
import { BetterStyleDirective } from './shared/directives/better-style.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { ShoppingListService } from './content/shopping/shopping-list.service';
import { RecipeDetailEmptyComponent } from './content/recipes/recipe-detail-empty/recipe-detail-empty.component';
import { RecipeEditComponent } from './content/recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './content/recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    BetterStyleDirective,
    DropdownDirective,
    RecipeDetailEmptyComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
