let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL){
    laURL = new URL(laURL);
    const objetoUrl={
        "host":laURL.host,
        "pathname":laURL.pathname,
        "parametros":laURL.search
    }
    console.log(objetoUrl)
}
