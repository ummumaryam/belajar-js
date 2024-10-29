// @ts-nocheck
// Factory Function adalah -> fungsi untuk menghasilkan objek
// terkadang kita membuat function secara berulang sehingga membutuhkan alokasi memory
// @ts-ignore
{
    let orang1 = {
        namaPertama: "Dalis",
        namaBelakang: "Hadi",
        getNamaFull() {
            return this.namaPertama + " " + this.namaBelakang;
        },
    };
    console.log(orang1.getNamaFull());

    let orang2 = {
        namaPertama: "Krismantari",
        namaBelakang: "Aprilia",
        getNamaFull() {
            return this.namaPertama + " " + this.namaBelakang;
        },
    };
    console.log(orang2.getNamaFull());
}

{
    function createPerson(namaPertama, namaBelakang) {
        return {
            namaPertama: namaPertama,
            namaBelakang: namaBelakang,
            getNamaFull() {
                return namaPertama + " " + namaBelakang;
            },
        };
    }

    const orang1 = createPerson("Dalis", "Hadi");
    const orang2 = createPerson("Krismantari", "Aprilia");

    console.log(orang1.getNamaFull());
    console.log(orang2.getNamaFull());

    //  ini sudah lebih baik dari pada diatas, tetapi masih ada masalah pada function getnamafull
}

{
    function createPerson(firstName, LastName) {
        return {
            firstName: firstName,
            LastName: LastName,
        };
    }

    const personAction = {
        getFullName() {
            return this.firstName + " " + this.LastName;
        },
    };

    const orang1 = createPerson("Dalis", "Hadi");
    const orang2 = createPerson("Krismantari", "Aprilia");
    orang1.getFullName = personAction.getFullName;
    orang2.getFullName = personAction.getFullName;
    console.log(orang1.getFullName());
    console.log(orang2.getFullName());
}

{
    // Object.create
    const personAction = {
        getFullName() {
            return this.firstName + " " + this.lastName;
        },
    };

    function createPerson(firstName, lastName) {
        let person = Object.create(personAction);
        person.firstName = firstName;
        person.lastName = lastName;
        return person;
    }

    let dalis = createPerson("Dalis", "Hadi");
    let tari = createPerson("Tari", "Aprilia");
    console.log(dalis.getFullName());
    console.log(tari.getFullName());
}
