// 1. Validasi Alamat Email
{
  const email = "dalishadisaputra@gmail.com";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    console.log("Alamat email valid");
  } else {
    console.log("Alamat email tidak valid");
  }
}


// 2. Pencocokan Teks
{
  const text = "Ini adalah contoh teks dengan kata kunci 123";
  const regex = /kata kunci/;

  if (regex.test(text)) {
    console.log("Teks mengandung kata kunci");
  } else {
    console.log("Teks tidak mengandung kata kunci");
  }
}

// 3. Penggantian Teks
{
  const text = "Merah adalah warna favorit saya";
  const regex = /merah/i;
  const teksBaru = text.replace(regex, "kuning");

  console.log(teksBaru);
}

// 4. Pemisahan Teks
{
  const text = "Ini adalah kalimat pertama. Dan ini adalah kalimat kedua.";
  const regex = /\./;
  const pemisah = text.split(regex);
  console.log(pemisah);
}

// 5. Ekstraksi Data
{
  const text = "Tanggal lahir saya adalah 15-03-1990";
  const regex = /(\d{2})-(\d{2})-(\d{4})/;
  const match = text.match(regex);

  if (match) {
    const hari = match[1];
    const bulan = match[2];
    const tahun = match[3];
    console.log(`Tanggal: ${hari}, Bulan: ${bulan}, Tahun: ${tahun}`);
  } else {
    console.log("Format tanggal tidak cocok");
  }
}

// 6. Menghilangkan karakter tidak diinginkan
{
  const text = "Hello, *world*!";
  const regex = /[\*\!]/g;
  const cleanText = text.replace(regex, "");

  console.log(cleanText);
}

// 7. Memvalidasi Format Tanggal
{
  const date = "2023-05-18";
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (regex.test(date)) {
    console.log("Format tanggal valid");
  } else {
    console.log("Format tanggal tidak valid");
  }
}

// 8. Mengekstrak Bagian teks
{
  const text = "Kode produk: XYZ123";
  const regex = /Kode produk: (\w+)/;
  const match = text.match(regex);

  if (match) {
    const productCode = match[1];
    console.log("Kode produk:", productCode);
  } else {
    console.log("Kode produk tidak ditemukan");
  }
}

// 9. Mencocokkan kata dengan Pencarian tidak sensitif

{
  const text = "Ini adalah contoh teks dengan kata kunci";
  const keyword = "kata KUNCI";
  const regex = new RegExp(keyword, "i");

  if (regex.test(text)) {
    console.log("Teks mengandung kata kunci");
  } else {
    console.log("Teks tidak mengandung kata kunci");
  }
}

// 10. Pencocokan Email. dari Teks yang lebih panjang
{
  const text = "Tulis email saya di sini: example@example.com";
  const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
  const match = text.match(regex);

  if (match) {
    const email = match[0];
    console.log("Email ditemukan:", email);
  } else {
    console.log("Email tidak ditemukan");
  }
}

// 11. Mendapatkan semua cocokan dengan Metode 'matchAll()'
{
  const text = "Hello, world! This is a sample text.";
  const regex = /\b\w+\b/g;
  const matches = [...text.matchAll(regex)];

  console.log(matches.map((match) => match[0]));
}

// 12. Mencari dan Mengganti dengan Callback Function
{
  const text = "Today is a sunny day.";
  const regex = /\b\w+\b/g;
  const replacedText = text.replace(regex, (match) => match.toUpperCase());

  console.log(replacedText);
}

// 13. Validasi password dengan syarat khusus;
{
  const password = "Passw0rd!";
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (regex.test(password)) {
    console.log("Password valid");
  } else {
    console.log("Password tidak valid");
  }
}

// 14. Menyaring URL dalam teks
{
  const text =
    "Ini adalah contoh teks dengan URL http://example.com dan https://www.example.com";
  const regex = /https?:\/\/[^\s]+/g;
  const urls = text.match(regex);

  console.log(urls);
}

// 15. Menghapus tanda baca di awal dan akhir kata;
{
  const text = "Hello, world! This is a sample text.";
  const regex = /\b[\.,!\?]+\B|\B[\.,!\?]+\b/g;
  const cleanedText = text.replace(regex, "");

  console.log(cleanedText);
}
