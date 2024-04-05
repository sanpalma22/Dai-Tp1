import { getCurrency } from 'currency-map-country';
let monedaDelPais, codigoPais;
codigoPais = 'ARG'

monedaDelPais = getCurrency(codigoPais)
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
