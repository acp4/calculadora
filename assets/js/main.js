let res = document.getElementById(`respuesta`);
// Suma
const suma = () => {
    const a = parseInt(document.getElementById("in").value);
    const b = parseInt(document.getElementById("in2").value);
    const resultado = a + b;
    res.innerHTML = resultado;
};
// resta
const rest = () => {
    const a = parseInt(document.getElementById("in").value);
    const b = parseInt(document.getElementById("in2").value);
    const resultado = a - b;
    res.innerHTML = resultado;
};

// multiplicacion
const multi = () => {
    const a = parseInt(document.getElementById("in").value);
    const b = parseInt(document.getElementById("in2").value);

    const resultado = a * b;
    res.innerHTML = resultado;
};
// division
    const division = () => {
    const a = parseInt(document.getElementById("in").value);
    const b = parseInt(document.getElementById("in2").value);
    const resultado = a / b;
    res.innerHTML = resultado;
};
