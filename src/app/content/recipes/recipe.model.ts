export class Recipe {
    public name: string;
    public desc: string;
    public imagePath: string;
    public difficulty: number;

    constructor(name: string, desc: string, imagePath: string, difficulty: number){
        this.name = name;
        this.desc = desc;
        this.imagePath = imagePath;
        this.difficulty = difficulty;
    }
}