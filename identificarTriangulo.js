function identificarTriangulo(lado_1, lado_2, lado_3){
    if (lado_1 >= Number.MAX_SAFE_INTEGER/2 || lado_2 >= Number.MAX_SAFE_INTEGER/2 || lado_3 >= Number.MAX_SAFE_INTEGER/2){
        return "valores mas grandes de lo permitido"
    }
    if (lado_1 <= 0 || lado_2 <= 0 || lado_3 <= 0){
        return "valores menores o iguales a 0";
    }
    if (lado_1 === undefined  || lado_2 === undefined || lado_3 === undefined){
        return "faltan parametros";
    }
    if (!(lado_1 < lado_2 + lado_3 && lado_2 < lado_1 + lado_3 && lado_3 < lado_1 + lado_2)){
        return "invalido";
    }
    if (!Number.isInteger(lado_1) || !Number.isInteger(lado_2) || !Number.isInteger(lado_3)){
        return "los valores no son enteros";
    }
    if (lado_1 === lado_2  && lado_2 === lado_3){
        return "equilatero";
    }
    else if ((lado_1 === lado_2 && lado_2 != lado_3) || (lado_2 === lado_3 && lado_1 != lado_3) || (lado_1 === lado_3 && lado_2 != lado_3)){
        return "isoceles";
    }
    else if (lado_1 != lado_2 && lado_2 != lado_3 && lado_1 != lado_3){
        return "escaleno";
    }
}
module.exports = identificarTriangulo;