var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if( penumpang.length == 0 ) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;

    } else {
        // telurusi seluruh kursi dari awal
        for( var i = 0; i < penumpang.length; i++ ) {
            // jika ada kursi kosong
            if( penumpang[i] = undefined ){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array  keluar dari function
                return penumpang;

            }

        }

    }
    
            // jika sudah ada nama yang sama
                // tampilkan pesan kesalahannya
                // kembalikan isi array  keluar dari function
            // jika seluruh kursi terisi
                // tambah penumpang di akhir array
                // kembalikan isi array  keluar dari function
} 

