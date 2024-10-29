// setTimeout()

// untuk Mengatur Waktu
// const tes = setTimeout(function() {
//     console.log('ok');
// }, 2000);

// untuk menghentikan ditengah

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function() {
//     clearTimeout(tes);
//     console.log('selesai');
// });

// SetInterval()
// perintah oke akan dicetak setiap 2000 artinya 2detik sekali
// const tes = setInterval(function() {
//     console.log('oke');
// }, 2000);

// // untuk menghentikan ditengah
// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function() {
//         clearInterval(tes);
//         console.log('selesai');
// });

// Program Hitung Mundur
const tanggalTujuan = new Date("Mar 12, 2020 05:00:00").getTime();

const hitungMundur = setInterval(function () {
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(
        (selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    const teks = document.getElementById("teks");
    teks.innerHTML =
        "Waktu Anda tinggal : " +
        hari +
        " hari " +
        jam +
        " jam " +
        menit +
        " menit " +
        detik +
        " detik lagi!";

    // untuk menghentikan waktu berjalan

    if (selisih == 0) {
        clearInterval(hitungMundur);
        teks.innerHTML = "Waktu Anda Sudah HABIS!";
    }
}, 1000);
