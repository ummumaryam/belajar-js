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

let promis = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let hasil = hitung(1, 5, tambah);
        resolve(hasil);
    }, 2000);
});

// 1 + 2 + 3 + 4

promis
    .then(
        function (value) {
            console.log(`hasil: ${value}`);
            return value;
        },
        function (error) {
            console.log(`hasil error: ${error}`);
        }
    )
    .then(function (val) {
        value = tambah(val, 3);
        console.log(value);
        return value;
    })
    .then(function (val) {
        value = tambah(val, 4);
        console.log(value);
    });
