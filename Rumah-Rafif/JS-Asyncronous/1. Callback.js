// Asyncronous & Callback

{
    function hitung(param1, param2, aksi) {
        let hasil = 0;
        // hasil = aksi(param1, param2)
        if (aksi == "tambah") {
            hasil = param1 + param2;
        } else if (aksi == "kurang") {
            hasil = param1 - param2;
        }
        return hasil;
    }

    console.log(hitung(4, 1, "tambah"));
    console.log(hitung(4, 1, "kurang"));
}

{
    // callback
    function hitung(param1, param2, aksi) {
        let hasil = 0;
        hasil = aksi(param1, param2);
        return hasil;
    }

    function tambah(param1, param2) {
        return param1 + param2;
    }

    function kurang(param1, param2) {
        return param1 - param2;
    }

    console.log(hitung(4, 1, tambah));
    console.log(hitung(10, 1, kurang));
}
