import Alumno from './models/Alumno.js';
let alumno1 = new Alumno("Santiago Palma" , "47490000", 17);
let alumno2 = new Alumno("Franco Pasquale", "38123791", 17);
let alumno3 = new Alumno("Ramiro Sued", "12387872",18);
console.clear();
console.log(alumno1);
console.log(alumno2);
console.log(alumno3.toString());