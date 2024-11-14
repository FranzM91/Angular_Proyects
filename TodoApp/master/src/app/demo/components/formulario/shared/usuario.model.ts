export class Usuario {
    Id: number;
    Nombre: string;
    Apellido: string;
    FechaNacimiento: Date;
    Sexo: Genero;
    // killed: boolean;
}

export class Genero {
    id: number;
    nombre: string;
}