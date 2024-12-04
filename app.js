let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};
function fromDollarToYen (dollars) {
    return Math.round (((dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"]) *100) / 100;
}

function fromEuroToDollar (euros) {
 return euros * oneEuroIs["USD"];
}

function fromYenToPound (yen) {
    return Math.round (((yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"]) * 100) / 100;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }