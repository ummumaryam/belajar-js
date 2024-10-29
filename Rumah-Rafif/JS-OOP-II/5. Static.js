// Static
class Hewan {
  static tempatHidup = "Darat";
  constructor(nama) {
    this.nama = nama;
  }
  jalan() {
    console.log(`${this.nama} berjalan pelan`);
  }
  static berhenti() {
    console.log(`Hewan Berhenti`);
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

// membuat blue print untuk mengakses tempathidup
let gajah = new Hewan("Gajah");
console.log(gajah.tempatHidup);

// ini tanpa membuat objek terlebih dahulu
console.log(Hewan.tempatHidup);
Hewan.berhenti();

console.log(Burung.tempatHidup);
Burung.berhenti();
