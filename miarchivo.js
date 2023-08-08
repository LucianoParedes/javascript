let nombreBD;
let apellidoBD;
let rta = " ";
let i = 0;
let pami = "pami";
let particular = "particular";
let obrasocial = "obrasocial";
let prepaga = "prepaga";
let contadorpami = i + 1;
let contadorpart = i + 1;
let contadorobra = i + 1;
let contadorprepa = i + 1;
while (rta != "esc") {
  nombreBD = prompt("indique su nombre");
  apellidoBD = prompt("ahora su apellido");
  alert("Bienvenido" + " " + nombreBD + " " + apellidoBD);

  let pregunta = Number(
    prompt(
      "digite por cual caso quiere ser atendido: pami, particular, obrasocial o prepaga?"
    )
  );

  if (pregunta == "pami") {
    resultado = "p" + contadorpami;
    alert("Su turno es" + " " + resultado);
  } else if (pregunta == "particular") {
    resultado1 = "a" + contadorpart;
    alert("Su turno es" + " " + resultado1);
  } else if (pregunta == "obrasocial") {
    resultado2 = "o" + contadorobra;
    alert("Su turno es" + " " + resultado2);
  } else pregunta == "prepaga";
  {
    resultado3 = "e" + contadorprepa;
    alert("Su turno es" + " " + resultado3);
  }

  rta = prompt("ingrese esc para salir");
}
