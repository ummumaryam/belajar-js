// @ts-nocheck
// JS SETTER DAN GETTER
// DASAR AWAL
// @ts-ignore
{
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  let orang = new Person("Hadi");
  console.log(orang.name);
}

{
  // contoh setter dan getter : cara lama
  class Person {
    constructor(name) {
      this.setName(name);
    }

    // getname adalah fungsi untuk mengambil name
    getName() {
      return this.name;
    }

    setName(newName) {
      newName = newName.trim();
      if (newName === "") {
        throw "Nama tidak boleh Kosong";
      }
      this.name = newName;
    }
  }
  let person2 = new Person("Dalis Hadi");
  console.log(person2.getName());
}

{
  // di ES6 Menyediakan setter dan getter khusus
  class Person {
    constructor(nama) {
      this.nama = nama;
    }

    get nama() {
      return this._nama;
    }

    set nama(namaBaru) {
      namaBaru = namaBaru.trim();
      if (namaBaru === "") {
        throw "Nama tidak boleh Kosong";
      }
      this._nama = namaBaru;
    }
  }
  let orang = new Person("Rudi Hartono");
  console.log(orang.nama);
  orang.nama = "Contoh Pojok Kode";
  console.log(orang.nama);
}

{
  // tidak didefinisikan set
  class Person {
    constructor(nama) {
      this._nama = nama;
    }
    get nama() {
      return this._nama;
    }
  }
  let orang = new Person("Kode 4");
  console.log(orang.nama);
  orang.nama = "Ganti Nama";
  console.log(orang.nama);
}

{
  // Getter dan Setter Untuk Object Literal
  let meeting = {
    attendees: [],
    add(attendee) {
      console.log(`${attendee} bergabung meeting`);
      this.attendees.push(attendee);
      return this;
    },

    get latest() {
      let count = this.attendees.length;
      return count == 0 ? undefined : this.attendees[count - 1];
    },
  };

  meeting.add("Pojok COde").add("Code 24").add("COde yu");
  console.log(`Last attendee is ${meeting.latest}`);
}
