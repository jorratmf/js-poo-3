class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }

  modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  mostrarPropiedades() {
    return `Alto: ${this.alto} - Ancho: ${this.ancho}`;
  }

  calcularPerimetro() {
    return 2 * this.alto + 2 * this.ancho;
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

function crearRectangulo() {
  const alto = document.getElementById("alto").value;
  const ancho = document.getElementById("ancho").value;

  if (ancho === "" || alto === "") {
    document.getElementById("info").innerHTML =
      "Por favor, ingrese valores para el alto y el ancho";
    return;
  }

  const rectangulo = new Rectangulo(alto, ancho);
  const info = document.getElementById("info");
  info.innerHTML = `
      Propiedades: ${rectangulo.mostrarPropiedades()}<br>
      Perímetro: ${rectangulo.calcularPerimetro()}<br>
      Área: ${rectangulo.calcularArea()}
    `;
}
