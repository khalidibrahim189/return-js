// Return pada javascript

function menjumlahkan(angka1, angka2){
    return angka1 + angka2;
}

var text = menjumlahkan(20, 20);

document.getElementById("wrap").innerHTML = text;

// Untuk perkalian


function perkalian(angka1, angka2){
    return angka1 * angka2;
}

var hasil = perkalian(10, 10);

document.getElementById("hasil").innerHTML = hasil;


// pengurangan


function perkurangan(angka1, angka2){
    return angka1 - angka2;
}

var hasilKali = perkurangan(50, 20);

document.getElementById("perkurangan").innerHTML = hasilKali;