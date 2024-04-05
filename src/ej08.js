import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/wrapper.js'
let resultado1 = null;
let resultado2=null;
let resultado3=null;
// Test de la función OMDBSearchByPage..
resultado1 = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado1);
resultado2 = await OMDBSearchComplete("cars", 1);
console.log("OMDBSearchComplete", resultado2);
resultado3 = await OMDBGetByImdbID("cars", 1);
console.log("OMDBGetByImdbID", resultado3);