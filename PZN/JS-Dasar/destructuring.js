
{
    const names = ["Eko", "Kurniawan", "Khannedy", "Budi", "Joko"];
    let [firstName, middleName, lastName, ...others] = names;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
    console.log(others);
}

{
    const person = {
        firstName: "Eko",
        lastName: "Khannedy",
        address: {
            street: "Jalan Belum Ada",
            city: "Jakarta",
            country: "Indonesia"
        },
        hobby: "Game",
        channel: "Programmer Zaman Now"
    };

    let { firstName, lastName, address: { city, street, country }, ...others } = person;
    console.log(firstName);
    console.log(lastName);
    console.log(city);
    console.log(street);
    console.log(country);
    console.log(others);
}

{
    function displayPerson({ firstName, middleName, lastName }) {
        console.log(firstName);
        console.log(middleName);
        console.log(lastName);
    }

    const person = {
        firstName: "Eko",
        middleName: "Kurniawan",
        lastName: "Khannedy",
    };

    displayPerson(person);
}

{
    function sum([first, second]) {
        return first + second;
    }

    console.log(sum([1, 1]));
    console.log(sum([10, 10]));
}

{
    const names = ["Eko", "Budi", "Joko"];
    const [firstName, middleName = "Kurniawan", lastName = "Khannedy"] = names;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

{
    const person = {
        firstName: "Eko",
        // middleName: "Budi",
        lastName: "Khannedy"
    };

    let { firstName, middleName = "Kurniawan", lastName } = person;
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

{
    const person = {
        firstName: "Eko",
        middleName: "Budi",
        lastName: "Khannedy"
    };

    let { firstName: namaDepan,
        middleName: namaTengah = "Kurniawan",
        lastName: namaBelakang } = person;
    console.log(namaDepan);
    console.log(namaTengah);
    console.log(namaBelakang);
}
