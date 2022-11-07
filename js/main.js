

const listaSpesa = ["pane", "burro", "uova", "salmone", "birra",];
console.log(listaSpesa);

let i = 0;

while (i < listaSpesa.length) {

    const prodottiSpesa = listaSpesa[i];
    console.log(prodottiSpesa)

    i++;
    console.log(i)

};

const listaSpesaEl = document.getElementById(lista);
console.log(listaSpesaEl);

listaSpesaEl.innerHTML = 