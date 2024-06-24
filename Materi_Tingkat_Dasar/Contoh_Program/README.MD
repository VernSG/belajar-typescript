# Penjelasan
Deklarasi Variabel:
let message: string = "Hello, TypeScript!";
Variabel message dideklarasikan dengan tipe string dan diinisialisasi dengan nilai "Hello, TypeScript!".

Fungsi greet:
function greet(name: string): string { ... }
Fungsi greet didefinisikan dengan satu parameter name bertipe string dan mengembalikan nilai berupa pesan salam yang mencakup nilai dari parameter name.

Pemanggilan Fungsi:
let greeting: string = greet("Alice");
Fungsi greet dipanggil dengan argumen "Alice" dan hasilnya disimpan dalam variabel greeting.

Pencetakan Hasil:
console.log(greeting);
Mencetak hasil dari fungsi greet, yaitu pesan "Hello, Alice!", ke konsol.

Pencetakan Pesan Variabel:
console.log(message);
Mencetak isi variabel message, yaitu "Hello, TypeScript!", ke konsol.

# Penjelasan Tambahan
Variabel digunakan untuk menyimpan dan merujuk pada data seperti teks, angka, objek, dll. Di contoh ini, message adalah variabel yang menyimpan pesan salam.
Fungsi adalah blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi greet mengambil parameter name dan mengembalikan pesan salam dengan nama yang diberikan.
Pemanggilan Fungsi terjadi ketika kita memanggil greet("Alice"), yang menghasilkan "Hello, Alice!" dan disimpan dalam variabel greeting.
console.log() digunakan untuk mencetak nilai ke konsol untuk melihat hasil dari eksekusi kode.
Dengan memahami dan menggabungkan konsep dasar seperti variabel dan fungsi dalam TypeScript, Anda dapat membangun dasar yang kuat untuk mempelajari konsep-konsep yang lebih lanjut seperti kelas, interface, dan konsep tingkat lanjut lainnya dalam pengembangan TypeScript.