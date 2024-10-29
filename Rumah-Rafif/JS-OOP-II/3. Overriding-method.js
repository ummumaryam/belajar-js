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
  terbang() {
    console.log(`${this.nama} Terbang`);
  }
  jalan() {
    super.jalan();
    console.log(`${this.nama} berjalan cepat`);
    this.terbang();
  }
}

let gagak = new Burung("Burung Gagak");
gagak.jalan();
// gagak.terbang();
