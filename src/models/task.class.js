import { LEVELS } from "./levels.enum";


export class Task {
    name = '';
    descripcion = '';
    completada = false;
    level = LEVELS.NORMAL

    constructor(name,description,completada,level){
        this.name = name;
        this.descripcion = description;
        this.completada = completada;
        this.level = level
    }
}