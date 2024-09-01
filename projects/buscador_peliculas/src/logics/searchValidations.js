export function validate(search){
    if(search == ''){
        return "No se puede buscar un texto vacío";
    }

    if(search.match(/^[0-9]+/)){
        return "La cadena no puede empezar con numeros";
    }

    if(search.length < 3){
        return "La cadena debe ser mayor a 3 caracteres";
    }

    return "";
}