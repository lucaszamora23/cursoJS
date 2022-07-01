let i = parseInt(prompt("Ingrese un número del 2 al 20, para restar de a 2"));


do {

    if (i < 2 || i > 20) {
        alert("Ingrese un numero válido");
    } else {
        i = i - 2;
        alert("El resultado es " + i + " y si le resto 2 más...");
    }
} while (i >= 2 && i <= 20) {
    alert("Llegamos a 0 :)");
}


