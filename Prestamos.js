function calcularPrestamo () {
  const sueldo = Number(document.getElementById("sueldo").value / 2);
  const prestamo = Number(document.getElementById("prestamo").value);
  const years = Number(document.getElementById("years").value * 12);

  const resultado = document.getElementById("calculoPrestamo");

  if (prestamo <= sueldo * years) {
    resultado.innerText ="Sí podemos darte el prestamo";
  }else{
    resultado.innerText ="Tú sueldo no da para eso pide menos o agrega más años!!!";
  }
};

