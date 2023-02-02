import { ON } from './levelsOn.js'


export class contacto {
    Nombre  = '';
    Apellido = '';
    Email = '';
    Conectado = true

    constructor(Nombre, Apellido, Email, Conectado){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Conectado = Conectado;
    }

    
}