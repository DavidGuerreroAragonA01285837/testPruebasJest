const identificarTriangulo = require("./identificarTriangulo");

test('identifica triangulos equilateros', () =>{
    expect(identificarTriangulo(3,3,3)).toBe("equilatero");
    expect(identificarTriangulo(2,2,2)).toBe("equilatero");
});

test('identifica triangulos invalidos', () =>{
    expect(identificarTriangulo(1,3,10)).toBe("invalido");
    expect(identificarTriangulo(3,1,100)).toBe("invalido");
});

test('identifica falta de parametros', () =>{
    expect(identificarTriangulo(1)).toBe("faltan parametros");
    expect(identificarTriangulo(1,2)).toBe("faltan parametros");
    expect(identificarTriangulo()).toBe("faltan parametros");
});

test('identifica lados con valor 0 o menor', () =>{
    expect(identificarTriangulo(1,0,1)).toBe("valores menores o iguales a 0");
    expect(identificarTriangulo(0,1,1)).toBe("valores menores o iguales a 0");
    expect(identificarTriangulo(1,1,0)).toBe("valores menores o iguales a 0");
    expect(identificarTriangulo(-3,-4,-5)).toBe("valores menores o iguales a 0");
});

test('triangulos isoceles muy parecidos a equilateros', () =>{
    expect(identificarTriangulo(100,100,101)).toBe("isoceles");
    expect(identificarTriangulo(1000,1000,1001)).toBe("isoceles");
    expect(identificarTriangulo(2,2,3)).toBe("isoceles");
});

test('triangulos escalenos que son casi equilateros o isoceles', () =>{
    expect(identificarTriangulo(10,9,11)).toBe("escaleno");
    expect(identificarTriangulo(1000,1001,999)).toBe("escaleno");
    expect(identificarTriangulo(50,60,61)).toBe("escaleno");
});

test('combinacion de lados demasiado grandes y demasiado chicos en todas posiciones', () =>{
    expect(identificarTriangulo(1,100,50)).toBe("invalido");
    expect(identificarTriangulo(100,50,1)).toBe("invalido");
    expect(identificarTriangulo(50,1,100)).toBe("invalido");
});

test('valores mas grandes de lo permitido', () =>{
    expect(identificarTriangulo(20, 20, Number.MAX_SAFE_INTEGER - 10)).toBe("valores mas grandes de lo permitido");
    expect(identificarTriangulo(20, Number.MAX_SAFE_INTEGER - 10, 20)).toBe("valores mas grandes de lo permitido");
    expect(identificarTriangulo(Number.MAX_SAFE_INTEGER - 10,  20, 20)).toBe("valores mas grandes de lo permitido");
});

test('triangulos muy chicos', () =>{
    expect(identificarTriangulo(3,3,3)).toBe("equilatero");
    expect(identificarTriangulo(2,2,2)).toBe("equilatero");
    expect(identificarTriangulo(1,2,2)).toBe("isoceles");
    expect(identificarTriangulo(3,4,5)).toBe("escaleno");
});

test('triangulos muy grandes', () =>{
    expect(identificarTriangulo((Number.MAX_SAFE_INTEGER-1)/2 -1, (Number.MAX_SAFE_INTEGER-1)/2 -1, (Number.MAX_SAFE_INTEGER-1)/2 -1)).toBe("equilatero");
    expect(identificarTriangulo((Number.MAX_SAFE_INTEGER-1)/2 -2, (Number.MAX_SAFE_INTEGER-1)/2 -1, (Number.MAX_SAFE_INTEGER-1)/2 -1)).toBe("isoceles");
    expect(identificarTriangulo((Number.MAX_SAFE_INTEGER-1)/2 -2, (Number.MAX_SAFE_INTEGER-1)/2 -3, (Number.MAX_SAFE_INTEGER-1)/2 -1)).toBe("escaleno");
});

test('un lado es igual a la suma de los otros 2', () =>{
    expect(identificarTriangulo(1,1,2)).toBe("invalido");
    expect(identificarTriangulo(4,2,2)).toBe("invalido");
    expect(identificarTriangulo(3,6,3)).toBe("invalido");
});

test('un lado ligeramente mas chico que la suma de los otros dos', () =>{
    expect(identificarTriangulo(99,50,50)).toBe("isoceles");
    expect(identificarTriangulo(60,99,40)).toBe("escaleno");
    expect(identificarTriangulo(501,500,1000)).toBe("escaleno");
});

test('un lado es ligeramente mas grande a la suma de los otros dos', () =>{
    expect(identificarTriangulo(100,50,49)).toBe("invalido");
    expect(identificarTriangulo(49,100,50)).toBe("invalido");
    expect(identificarTriangulo(1000,2001,1000)).toBe("invalido");
})