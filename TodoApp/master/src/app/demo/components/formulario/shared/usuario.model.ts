export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    sexo: Genero;
    killed: boolean;
}

export class Genero {
    id: number;
    nombre: string;
}