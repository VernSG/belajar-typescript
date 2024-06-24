# Penjelasan Penggunaan
Decorators adalah fitur eksperimental di TypeScript yang memungkinkan Anda menambahkan metadata atau perilaku tambahan pada kelas, metode, properti, atau parameter fungsi. Dalam contoh ini:

Decorator LogMethod: Ini adalah decorator yang didefinisikan untuk log panggilan metode. Decorator menerima tiga parameter:
target: Merupakan instance dari kelas untuk metode non-statis atau fungsi konstruktor untuk metode statis.
propertyKey: Nama properti atau metode yang akan didekorasi.
descriptor: Deskripsi properti atau metode yang digunakan untuk menentukan perilaku.
Modifikasi descriptor.value: Pada decorator LogMethod, kita mengubah nilai dari descriptor.value agar ketika metode greet dipanggil, ia mencetak pesan log dengan argumen yang diterima sebelum menjalankan metode aslinya.

Penggunaan pada Kelas Example: Metode greet di dalam kelas Example didekorasi dengan @LogMethod, yang berarti setiap kali metode greet dipanggil, pesan log akan dicetak sebelum eksekusi sebenarnya dari metode tersebut.

Pemanggilan Metode: Pada bagian terakhir, kita membuat objek dari kelas Example dan memanggil metode greet dengan argumen 'Alice'. Hasilnya adalah pesan log yang menunjukkan bahwa metode greet dipanggil dengan argumen "Alice".

Dengan menggunakan decorators, Anda dapat memodifikasi perilaku metode atau kelas secara deklaratif tanpa harus mengubah implementasi di dalam metode itu sendiri, sehingga meningkatkan fleksibilitas dan pemeliharaan kode.