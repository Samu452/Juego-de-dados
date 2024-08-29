document.querySelector(".button").addEventListener("click", function () {
  lanzarDados();
});

function lanzarDados() {
  const numDados = parseInt(document.getElementById("numDados").value);
  const tipoDado = parseInt(document.getElementById("tipoDado").value);
  const bonificacion = parseInt(document.getElementById("bonificacion").value);
  const mostrarResultadoEspecifico = document.getElementById(
    "resultadoEspecifico"
  ).checked;

  if (numDados < 1) {
    alert("El número de dados debe ser al menos 1.");
    return;
  }

  const resultados = [];
  for (let i = 0; i < numDados; i++) {
    let resultado = Math.floor(Math.random() * tipoDado) + 1;
    resultados.push(resultado);
  }

  const sumaResultados = resultados.reduce((a, b) => a + b, 0);
  const resultadoConBonificacion = sumaResultados + bonificacion;

  document.getElementById("detalles").innerHTML = `
        Dados lanzados: ${numDados}d${tipoDado} <br>
        Bonificación: ${bonificacion}
    `;

  document.getElementById("resultadosDados").innerHTML = `
        Resultados de los dados: ${resultados.join(", ")}
    `;

  document.getElementById("sumaSinBonificacion").innerHTML = `
        Suma de los dados (sin bonificación): ${sumaResultados}
    `;

  document.getElementById("bonificacionTotal").innerHTML = `
        Total con Bonificación: ${resultadoConBonificacion}
    `;
}
