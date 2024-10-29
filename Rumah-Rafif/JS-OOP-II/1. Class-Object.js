// class, object setter dan getter

class Siswa {
  namaSekolah = "SD Negeri 1";
  constructor(nama) {
    console.log(`inisialisasi data ${nama}`);
    this._nama = nama;
  }
  halo() {
    console.log(`Halo nama saya ${this.nama} 
      dari sekolah ${this.namaSekolah}`);
  }

  get nama() {
    let namabaru;
    namabaru = this._nama.toUpperCase();
    return namabaru;
  }

  set nama(value) {
    if (value.length < 3) {
      console.log("Silahkan masukkan nama");
      return;
    }
    this._nama = value;
  }
}

let teman1 = new Siswa("Dalis Hadi Saputra");
teman1.halo();

teman1.nama = "Krismantari Aprilia";
console.log(`Nama siswa: ${teman1.nama}`);
