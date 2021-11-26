import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe("Spagetti","this is spagetti","https://assets.afcdn.com/recipe/20180326/78166_w1024h1024c1cx2592cy1728.jpg"),
    new Recipe("Spagetti","this is spagetti","https://assets.afcdn.com/recipe/20180326/78166_w1024h1024c1cx2592cy1728.jpg"),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
