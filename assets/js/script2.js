const btn = document.querySelector('#calcularStickers');
const stickerPrimero = document.querySelector('#sticker1');
const stickerSegundo = document.querySelector('#sticker2');
const stickerTercero = document.querySelector('#sticker3');
const resultado = document.querySelector('#resultado');

btn.addEventListener('click', () => {

    if(+stickerPrimero.value < 0) {
        stickerPrimero.value = 0;
    }

    if(+stickerSegundo.value < 0) {
        stickerSegundo.value = 0;
    }

    if(+stickerTercero.value < 0) {
        stickerTercero.value = 0;
    }

    const total = +stickerPrimero.value + +stickerSegundo.value + +stickerTercero.value;

    if (total <= 10) {
        resultado.innerHTML = `Llevas ${total} de stickers`  ;
    } else {
        resultado.innerHTML = "Sobrepasaste la cantidad de stickers";
    }  
});