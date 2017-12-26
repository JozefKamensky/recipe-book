import { Ingredient } from "../../shared/ingredient.model";

export class Recipe {
    public name: string;
    public desc: string;
    public imagePath: string;
    public difficulty: number;
    public ingredients: Ingredient[];

    constructor(
      name: string, 
      desc: string,
      imagePath: string,
      difficulty: number,
      ing: Ingredient[]){
        this.name = name;
        this.desc = desc;
        this.imagePath = imagePath;
        this.difficulty = difficulty;
        this.ingredients = ing;
    }
}