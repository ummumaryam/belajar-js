// @ts-nocheck
// Destructuring 

{
   function jumlahKali(a, b) {
      return [a + b, a * b]
   }

   // const jumlah = jumlahKali(2, 3)[0]
   // console.log(jumlah)
   // const kali = jumlahKali(2, 3)[1]
   // console.log(kali)

   // Destructuringnya
   const [jumlah, kali] = jumlahKali(2, 3)
   console.log(jumlah)
   console.log(kali)

}

{
   function kalkulasi(a, b) {
      return [a + b, a - b, a * b, a / b]
   }

   const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3)
   console.log(kurang)
   console.log(bagi)
}

{
   // ingin urutan tidak berpengaruh
   function kalkulasi(a, b) {
      return {
         tambah: a + b,
         kurang: a - b,
         kali: a * b,
         bagi: a / b
      }
   }

   const { tambah, bagi = 'tidak ada', kurang = 'tidak ada', kali } = kalkulasi(2, 3)
   console.log(kurang)
   console.log(bagi)
   console.log(tambah)
}

{
   // Destructuring function arguments
   const mhs1 = {
      nama: 'Dalis Hadi Saputra',
      umur: 34,
      email: 'dalishadi@ymail.com',
   }

   function cetakMhs(nama, umur) {
      return `Halo, nama saya ${nama}, saya berumur ${umur}`
   }

   console.log(cetakMhs(mhs1.nama, mhs1.umur))
   // const cetak = cetakMhs(mhs1.nama, mhs1.umur)
   // console.log(cetak)
}

{
   const mhs1 = {
      nama: 'Rendi Warisman',
      umur: 34,
      email: 'RendiW@ymail.com',
   }

   function cetakMhs({ nama, umur }) {
      return `Halo, nama saya ${nama}, saya berumur ${umur}`
   }

   console.log(cetakMhs(mhs1))
}

{
   const mhs1 = {
      nama: 'Rendi Warisman',
      umur: 34,
      email: 'RendiW@ymail.com',
      nilai: {
         tugas: 80,
         uts: 85,
         uas: 75,
      }
   }

   function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
      return `Halo, nama saya ${nama}, saya berumur ${umur} dan Nilai Uas ${uas}`
   }

   console.log(cetakMhs(mhs1));
}

