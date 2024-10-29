{
    // Nested Function / function bersarang

    function outer() {
        function inner() {
            console.log("Inner");
        }

        inner();
        inner();
    }

    outer();
    // inner(); //ini error tidak bisa diakses
}

//

{
    function hitungGaji(karyawan) {
        function hitungTunjangan() {
            let tunjangan = 0;
            if (karyawan.status === "menikah") {
                tunjangan = 0.2 * karyawan.gajiPokok;
            }
            return tunjangan;
        }

        function hitungPajak() {
            let pajak = 0.1 * karyawan.gajiPokok;
            return pajak;
        }

        let gajiBersih = karyawan.gajiPokok + hitungTunjangan() - hitungPajak();
        return gajiBersih;
    }

    const karyawan1 = {
        nama: "Andi",
        status: "menikah",
        gajiPokok: 8000000,
    };

    const karyawan2 = {
        nama: "Rudi",
        status: "lajang",
        gajiPokok: 7000000,
    };

    console.log(`Gaji bersih ${karyawan1.nama}: ${hitungGaji(karyawan1)}`);
    console.log(`Gaji bersih ${karyawan2.nama}: ${hitungGaji(karyawan2)}`);
}

{
    function hitungTotalBelanja(daftarBelanja) {
        let total = 0;

        function hitungDiskon(belanjaan) {
            let diskon = 0;
            if (belanjaan >= 100000) {
                diskon = 0.1 * belanjaan;
            } else if (belanjaan >= 50000) {
                diskon = 0.05 * belanjaan;
            }
            return diskon;
        }
        function hitungPajak(belanjaan) {
            let pajak = 0.1 * belanjaan;
            return pajak;
        }

        for (let i = 0; i < daftarBelanja.length; i++) {
            let belanjaan = daftarBelanja[i];
            let diskon = hitungDiskon(belanjaan);
            let pajak = hitungPajak(belanjaan);
            total += belanjaan - diskon + pajak;
        }
        return total;
    }

    const daftarBelanja = [50000, 75000, 120000];
    console.log(`Total belanja : ${hitungTotalBelanja(daftarBelanja)}`);
}

{
    function cekNilai(nama, nilai) {
        function isLulus(nilai) {
            return nilai >= 60 ? true : false;
        }

        function hitungGrade(nilai) {
            if (nilai >= 90) {
                return "A";
            } else if (nilai >= 80) {
                return "B";
            } else if (nilai >= 70) {
                return "C";
            } else if (nilai >= 60) {
                return "D";
            } else {
                return "E";
            }
        }
        let lulus = isLulus(nilai);
        let grade = hitungGrade(nilai);

        if (lulus) {
            console.log(
                `${nama} lulus dengan nilai ${nilai} dan mendapatkan grade ${grade}.`
            );
        } else {
            console.log(
                `${nama} tidak lulus dengan nilai ${nilai} dan mendapatkan grade ${grade}.`
            );
        }
    }

    cekNilai("RIDO", 85);
    cekNilai("Budee", 60);
}

{
    function hitungLuasPersegiPanjang(panjang, lebar) {
        function hitungLuas() {
            return panjang * lebar;
        }

        let luas = hitungLuas();
        console.log(
            `Luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${luas}`
        );
    }
    hitungLuasPersegiPanjang(10, 6);
}
