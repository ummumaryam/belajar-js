// DOM Selection
// document.getElementById - Mengembalikan Element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Dalis Hadi Saputra";

// document.getElementsByTagName() mengembalikan HTMLColections
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "30px";

// document.getElementsByClassName() - Mengembalikan HTMLColections
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari javascript";

// ----------------------------------------------------
