
export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id?:  number;
    img?: string;
} 

  

// Otra forma de crear las interfaces es con la herramienta de paste JSON as Code
// Copias es JSON en el clipboard y despues presionas Ctrl + Shift + P y buscas Paste JSON as Code
// Colocas el nombre de la interface y listo