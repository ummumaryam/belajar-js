//! JavaScript decorator adalah fitur yang diperkenalkan dalam standar ECMAScript 2016 (juga dikenal sebagai ES7) yang memungkinkan kamu untuk memodifikasi perilaku fungsi atau kelas dalam JavaScript.Decorator biasanya didefinisikan sebagai fungsi yang mengambil target sebagai argumen dan mengembalikan target yang dimodifikasi

//? Decorator dapat digunakan untuk berbagai tujuan, termasuk memperluas atau mengubah perilaku fungsi atau kelas, memberikan metadata tambahan, melacak penggunaan fungsi atau kelas, dan banyak lagi. Decorator sangat berguna dalam paradigma pemrograman fungsional dan dapat membantu dalam mengimplementasikan pola desain seperti Dependency Injection (DI) atau Aspect-Oriented Programming (AOP)

{
    // contoh sederhana penggunaan decorator pada sebuah fungsi dalam JavaScript

    function logDecorator(target) {
        return function (...args) {
            console.log("Fungsi sedang dijalankan");
            return target(...args);
        };
    }

    function sayHello() {
        console.log("Hello, Dunia!");
    }

    const decoratedSayHello = logDecorator(sayHello);
    decoratedSayHello();
}

{
    //* JavaScript juga mendukung penggunaan sintaksis khusus menggunakan tanda @ sebelum decorator
    function logDecorator(target) {
      return function (...args) {
        console.log("Fungsi sedang dijalankan");
        return target(...args);
      };
    }
     // @ts-ignore
     @logDecorator
    function sayHello() {
      console.log("Hello, dunia!");
    }
    sayHello();
}
