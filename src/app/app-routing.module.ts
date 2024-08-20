import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    loadChildren: () =>
      import("./recipes/recipes.module").then(m => m.RecipesModule),  
  },
  
  // {path: 'recipes', component: RecipesComponent, children: [
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component: RecipeEditComponent },
  //   {
  //     path: ':id',
  //     component: RecipeDetailComponent,
  //     resolve: [RecipesResolverService]
  //   },
  //   {
  //     path: ':id/edit',
  //     component: RecipeEditComponent,
  //     resolve: [RecipesResolverService]
  //   }
  // ]},


  {
    path: "shopping-list",
    loadChildren: () =>
      import("./shopping-list/shopping-list.module").then(
        m => m.ShoppingListModule
      )
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
