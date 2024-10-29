// Membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namapenumpang) {
        this.penumpang.push(namapenumpang);
        return this.penumpang;
    }

    // jika Penumpang Kosong

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('Angkot Masih Kosong!');
            return false;
        }
        // jika Penumpang Ada

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }

        }
    }
}

// Sopir Angkot
var angkot1 = new Angkot('Dalis Hadi Saputra', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Tom Jerry', ['Jl. Ombak', 'Jl. Sukajadi'], [], 0);