
const token = ~~[Math.random() * 23456689]
const pictures = ['1.jpg', '2.jpg', '6.jpg']

function login(username) {
   console.log('prosessing .. memvalidasi user now!!');
   return new Promise((sukses, gagal) => {
      setTimeout(() => {
         if (username != 'dalis_hadi') gagal('Maaf Data Salah')
         sukses({ token })
      }, 200)
   })
}

function getUser(token) {
   console.log('prosessing .. memvalidasi apikey Noow!!');
   return new Promise((sukses, gagal) => {
      if (!token) gagal('sorry, no token')
      setTimeout(() => {
         sukses({ apikey: "xkey345" })
      }, 500)

   })
}

function getPictures(apikey) {
   console.log('prosessing .. mengambil Gambar!!');
   return new Promise((sukses, gagal) => {
      if (!apikey) gagal('no apikey, cannot access!')
      setTimeout(() => {
         sukses({ gambar: pictures })
      }, 1500)
   })
}

//* eksekusi
// const user = login("dalis_hadi")
// user.then(function (respon) {
//    const { token } = respon
//    // console.log(respon)
//    getUser(token).then((respon) => {
//       const { apikey } = respon
//       console.log(apikey)
//    }).catch(err => console.log(err))
// })

//! Async Await - solusinya

async function userDisplay() {
   try {
      const { token } = await login('dalis_hadi')
      const { apikey } = await getUser(token)
      const { gambar } = await getPictures(apikey)

      console.log(`
      token anda adalah: ${token}
      apikey anda adalah: ${apikey}
      hasil request gambar anda berikut ini: ${gambar}
      `)
   } catch (err) {
      console.log(err);
   }
}
userDisplay()
