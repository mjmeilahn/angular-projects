import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A test recipe', 'a description', 'https://www.maxpixel.net/static/photo/2x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'),
    new Recipe('A test recipe', 'a description', 'https://www.maxpixel.net/static/photo/2x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}