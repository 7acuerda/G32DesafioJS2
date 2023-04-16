const PASS = 911;
const btn = document.querySelector ('#btn');
const resultado = document.querySelector('#respuesta');
const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');
const numero3 = document.querySelector('#numero3');

btn.addEventListener('click', () => {
    const codigo = numero1.value + numero2.value + numero3.value;

    if (codigo == 911) {
        respuesta.innerHTML = "Contraseña 1 correcta"
        respuesta.style.color = "green";
    } else if (codigo == 714) {
        respuesta.innerHTML = "Contraseña 2 correcta"
        respuesta.style.color = "green";
    } else {
        respuesta.innerHTML = "Contraseña es incorrecta"
        respuesta.style.color = "red";
    }
});