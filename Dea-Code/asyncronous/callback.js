// function satu() {
//    console.log('satu');
// }

// function dua() {
//    console.log('function 2 akan dieksekusi');
//    setTimeout(() => {
//       console.log('dua');
//    }, 3000);
// }

// function tiga() {
//    console.log('tiga');
// }

// satu()
// dua()
// tiga()


const token = ~~[Math.random() * 23456689]
const pictures = ['1.jpg', '2.jpg', '6.jpg']

function login(username, callback) {
   console.log('prosessing .. memvalidasi token!!');
   setTimeout(() => {
      callback({ token, username })
   }, 200)
}

function getUser(token, callback) {
   console.log('prosessing .. memvalidasi apikey Noow!!');
   if (token)
      setTimeout(() => {
         callback({ apikey: "xkey345" })
      }, 500)
}

function getPictures(apikey, callback) {
   console.log('prosessing .. mengambil Gambar!!');
   if (apikey)
      setTimeout(() => {
         callback({ gambar: pictures })
      }, 1500);
}

//* eksekusi

login('dalis-hadi', function (respon) {
   const { token } = respon
   console.log('token =>', token)
   getUser(token, function (respon) {
      const { apikey } = respon
      console.log(apikey)
      getPictures(apikey, function (respon) {
         const { gambar } = respon
         console.log(gambar)
      })
   })
})
