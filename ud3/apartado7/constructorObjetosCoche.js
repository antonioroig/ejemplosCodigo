function Coche(marca, color) {
    this.marca = marca;
    this.color = color;

    this.arrancar = function() {
	console.log(`Arrancando un coche ${this.marca} de color ${this.color}`);
    }
}
