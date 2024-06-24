# Penjelasan
Interface Shape:
Merupakan sebuah interface yang mendefinisikan satu metode, calculateArea(), yang harus diimplementasikan oleh kelas-kelas yang menggunakannya.

Kelas Abstrak AbstractShape:
Kelas ini merupakan kelas abstrak yang mengimplementasikan interface Shape.
Memiliki properti color yang diwarisi oleh kelas-kelas turunannya.
Memiliki metode abstrak calculateArea() yang harus diimplementasikan oleh kelas turunannya.

Kelas Rectangle dan Circle:
Rectangle dan Circle adalah kelas-kelas konkret yang mengimplementasikan kelas abstrak AbstractShape.
Mereka mengimplementasikan metode calculateArea() sesuai dengan bentuk geometris mereka sendiri.
Penggunaan dalam Program:

Membuat objek dari kelas Rectangle dan Circle, mengirimkan parameter yang diperlukan ke konstruktor.
Memanggil metode calculateArea() untuk menghitung dan mencetak luas dari masing-masing bentuk.
Dengan pendekatan ini, Anda bisa melihat bagaimana kelas dan interface bekerja bersama untuk menyediakan abstraksi dan struktur yang baik dalam pengembangan perangkat lunak dengan TypeScript. Interface Shape memberikan kontrak untuk metode calculateArea(), sedangkan kelas abstrak AbstractShape menyediakan implementasi yang umum untuk properti dan metode yang kemudian diperluas oleh kelas-kelas turunannya seperti Rectangle dan Circle.