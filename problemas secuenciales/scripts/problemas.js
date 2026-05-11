function calcularPago(){

    let metros = parseFloat(document.getElementById("metros").value);

    let costo = parseFloat(document.getElementById("costo").value);

    const result = metros * costo;

    document.getElementById("result").textContent =
    "El pago total es: $" + result;

}function calcularLuz(){

    let kw = parseFloat(document.getElementById("kw").value);

    let costo = parseFloat(document.getElementById("costo").value);

    const result = kw * costo;

    document.getElementById("result").textContent =
    "El pago total es: $" + result;

}

function calcularDescuento(){

    let precio = parseFloat(document.getElementById("precio").value);

    let descuento = precio * 0.20;

    let precioDescuento = precio - descuento;

    let iva = precioDescuento * 0.15;

    let total = precioDescuento + iva;

    document.getElementById("result").textContent =
    "Precio con descuento: $" + precioDescuento +
    " | Precio final: $" + total;

}

function calcularAhorro(){

    let sueldo = parseFloat(document.getElementById("sueldo").value);

    let ahorroSemana = sueldo * 0.15;

    let ahorroMes = ahorroSemana * 4;

    let ahorroAnual = ahorroMes * 12;

    document.getElementById("result").textContent =
    "Ahorro anual: $" + ahorroAnual;

}

function calcularCheque(){

    let dias = parseFloat(document.getElementById("dias").value);

    let hotel = parseFloat(document.getElementById("hotel").value);

    let comida = parseFloat(document.getElementById("comida").value);

    let otros = dias * 100;

    let totalHotel = hotel * dias;

    let totalComida = comida * dias;

    let total = totalHotel + totalComida + otros;

    document.getElementById("result").textContent =
    "Hotel: $" + totalHotel +
    " | Comida: $" + totalComida +
    " | Otros: $" + otros +
    " | Total: $" + total;

}

function calcularPotencia(){

    let r = parseFloat(document.getElementById("r").value);

    let i = parseFloat(document.getElementById("i").value);

    let v = r * i;

    let p = v * i;

    document.getElementById("result").textContent =
    "Voltaje: " + v + " | Potencia: " + p;

}

function calcularArea(){

    let lado = parseFloat(document.getElementById("lado").value);

    let area = lado * lado;

    document.getElementById("result").textContent =
    "Área del cuadrado: " + area;

}

function calcularPromedio(){

    let ex1 = parseFloat(document.getElementById("ex1").value);

    let ex2 = parseFloat(document.getElementById("ex2").value);

    let ex3 = parseFloat(document.getElementById("ex3").value);

    let promedio =
    (ex1 * 0.25) +
    (ex2 * 0.25) +
    (ex3 * 0.50);

    document.getElementById("result").textContent =
    "Promedio final: " + promedio;

}

function calcularVida(){

    let edad = parseFloat(document.getElementById("edad").value);

    let meses = edad * 12;

    let semanas = edad * 52;

    let dias = edad * 365;

    let horas = dias * 24;

    document.getElementById("result").textContent =
    "Meses: " + meses +
    " | Semanas: " + semanas +
    " | Días: " + dias +
    " | Horas: " + horas;

}

function calcularLlamada(){

    let minutos = parseFloat(document.getElementById("minutos").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = minutos * costo;

    document.getElementById("result").textContent =
    "Costo de llamada: $" + total;

}

function calcularHotel(){

    let dias = parseFloat(document.getElementById("dias").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = dias * costo;

    document.getElementById("result").textContent =
    "Total a pagar: $" + total;

}
function calcularTriangulo(){

    let base = parseFloat(document.getElementById("base").value);

    let altura = parseFloat(document.getElementById("altura").value);

    let area = (base * altura) / 2;

    document.getElementById("result").textContent =
    "Área del triángulo: " + area;

}

function calcularDolares(){

    let pesos = parseFloat(document.getElementById("pesos").value);

    let cambio = parseFloat(document.getElementById("cambio").value);

    let dolares = pesos / cambio;

    document.getElementById("result").textContent =
    "Dólares: $" + dolares;

}

function calcularEdad(){

    let nacimiento = parseFloat(document.getElementById("nacimiento").value);

    let actual = parseFloat(document.getElementById("actual").value);

    let edad = actual - nacimiento;

    document.getElementById("result").textContent =
    "Edad: " + edad + " años";

}

function calcularEstacionamiento(){

    let horas = parseFloat(document.getElementById("horas").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = Math.ceil(horas) * costo;

    document.getElementById("result").textContent =
    "Total a pagar: $" + total;

}

function calcularPintura(){

    let metros = parseFloat(document.getElementById("metros").value);

    let precio = parseFloat(document.getElementById("precio").value);

    let total = metros * precio;

    document.getElementById("result").textContent =
    "Costo total: $" + total;

}

function calcularHipotenusa(){

    let a = parseFloat(document.getElementById("a").value);

    let b = parseFloat(document.getElementById("b").value);

    let c = Math.sqrt((a*a) + (b*b));

    document.getElementById("result").textContent =
    "Hipotenusa: " + c;

}

function calcularAutobus(){

    let km = parseFloat(document.getElementById("km").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = km * costo;

    document.getElementById("result").textContent =
    "Costo del boleto: $" + total;

}

function calcularTiempo(){

    let distancia = parseFloat(document.getElementById("distancia").value);

    let velocidad = parseFloat(document.getElementById("velocidad").value);

    let tiempo = distancia / velocidad;

    document.getElementById("result").textContent =
    "Tiempo: " + tiempo + " horas";

}

function calcularLlamada2(){

    let minutos = parseFloat(document.getElementById("minutos").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = minutos * costo;

    document.getElementById("result").textContent =
    "Costo de llamada: $" + total;

}