// Overriding
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }
  jalan() {
    console.log(`${this.nama} berjalan pelan`);
  }
}
class Burung extends Hewan {
  constructor(nama, warna) {
    super(nama);
    this.warna = warna;
  }
  terbang() {
    console.log(`${this.nama} Terbang`);
  }
  jalan() {
    console.log(`${this.nama} berwarna ${this.warna} berjalan cepat`);
  }
}

// let kucing = new Hewan("Kucing");
// kucing.jalan();

let nuri = new Burung("Burung Nuri", "Hitam");
nuri.jalan();
// nuri.terbang();
