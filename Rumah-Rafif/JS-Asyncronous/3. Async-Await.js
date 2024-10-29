// @ts-nocheck
// Promise

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

async function fungsiku() {
    let promis = new Promise(function (resolve, reject) {
        setTimeout(() => {
            let hasil = hitung(1, 2, tambah);
            resolve(hasil);
        }, 2000);
    });
    let hasil = await promis;
    console.log(hasil);
}

fungsiku();
