// @ts-nocheck
// Expression pada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variabel yang terpisah

{
    // Array
    const coba = ["satu", "dua", "tiga", 900];

    const [l, t, y, h] = coba;
    console.log(l);
    console.log(t);
    console.log(y);
    console.log(h);
}

{
    const perkenalan = ["Halo", "nama", "saya", "Dalis Hadi Saputra"];
    const salam = perkenalan[0];
    console.log(salam);
    const nama1 = perkenalan[3];
    console.log(nama1);

    // Destructuring
    const [nol, satu, dua, tiga] = perkenalan;
    console.log(nol);
    console.log(tiga);

    // skipping item
    const [noll, , , tilu] = perkenalan;
    console.log(noll);
    console.log(tilu);
}

{
    // swap items - menukar isi dari variabel
    // let a = 1
    // let b = 2
    // console.log(a)
    // console.log(b)
    // [a, b] = [b, a]
    // console.log(a)
    // console.log(b)
}

{
    // return value pada function
    function coba() {
        return [1, 2];
    }

    const [a, b] = coba();
    console.log(a);
    console.log(b);
}

{
    // Rest Parameter
    const [c, ...t] = [1, 2, 3, 4, 5, 6];
    console.log(c);
    console.log(t);
}

{
    // Object Literal
    const mhs = {
        nama: "Dalis Hadi Saputra",
        umur: 34,
        email: "dalishadi@gmail.com",
    };

    const { nama, umur, email } = mhs;
    console.log(nama);
    console.log(umur);
}

{
    // Assignment tanpa deklarasi object
    ({ nama, umur, email } = {
        nama: "Dalis Hadi Saputra",
        umur: 34,
        email: "dalishadi@gmail.com",
    });
    console.log(nama);
    console.log(umur);
    console.log(email);
}

{
    // Assign ke variabel baru
    const mhs = {
        nama: "Dalis Hadi Saputra",
        umur: 34,
        email: "dalishadi@gmail.com",
    };

    const { nama: n, umur: u, email: e } = mhs;
    console.log(n);
    console.log(e);
}

{
    // Memberikan Default value
    const mhs = {
        nama: "Dalis Hadi Saputra",
        umur: 34,
        email: "dalishadi@gmail.com",
    };

    const { nama, umur, email: e = "email@defaul.com" } = mhs;
    console.log(nama);
    console.log(e);
}

{
    // Rest Parameter
    const mhs = {
        nama: "Dalis Hadi Saputra",
        umur: 34,
        email: "dalishadi@gmail.com",
    };

    const { nama, ...nilai } = mhs;
    console.log(nama);
    console.log(nilai);
}

{
    // Mengambil field pada object, setelah dikirim sebagai parameter untuk function
    const mhs = {
        id: 1245,
        nama: "Dalis Hadi Saputra",
        umur: 34,
        email: "dalishadi@gmail.com",
    };

    function getIdMhs({ id, nama, umur }) {
        return { id, nama, umur };
    }

    console.log(getIdMhs(mhs));
}
