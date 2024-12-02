test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156,5 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const Yen = fromDollarToYen(3.5);

    // If 1 Dollar is 156.5 Yen, then 2 Dollar should be (3.5 * 156,5)
    const expected = 3.5 * 156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(547.75); // 1 Dollar is 156.5 Y, then 3.5 Dolar should be = (3.5 * 1.07)
})

test("One Yen should be 0,87 Pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const Yen = fromYenToPound(3.5);

    // If 1 Yen is 0.87 Pound, then 3.5 Yen should be (3.5 * 0.87)
    const expected = 3.5 * 0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(3.045); // 1 Yen is 0.87 Poun, then 3.5 Yen should be = (3.5 * 0.87)
})