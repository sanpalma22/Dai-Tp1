class Alumno {
    constructor(username, DNI, edad) {
      this.username = username;
      this.DNI = DNI;
      this.edad = edad;
    }
  
    toString() {
      return `Nombre de usuario: ${this.username}, DNI: ${this.DNI}, Edad: ${this.edad}`;
    }
  }
export default Alumno;