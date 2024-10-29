class Hewan {
  constructor(nama) {
    this.nama = nama;
  }
  jalan() {
    console.log(`${this.nama} berjalan pelan`);
  }
}
class Burung extends Hewan {
  terbang() {
    console.log(`${this.nama} Terbang`);
  }
  jalan() {
    super.jalan();
    console.log(`${this.nama} berjalan cepat`);
    this.terbang();
  }
}

let kucing = new Hewan("Kucing Putih");
kucing.jalan();

let nuri = new Burung("Burung Nuri");
nuri.jalan();
nuri.terbang();
