let precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let count = 0;

const cantidad = document.querySelector('.cantidad');
let total = document.querySelector(".valor-total");

function plus() {
    count++;
    cantidad.innerHTML = count;
    total.innerHTML= Number(precio)*Number(count);
}

function minus(){
    if(count !== 0) {
       count--;
       cantidad.innerHTML = count;
       total.innerHTML= Number(precio)*Number(count);
    } 
}





