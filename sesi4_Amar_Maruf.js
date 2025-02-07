let kalkulator = '+'
let hasil

switch(kalkulator){
    case '+':
    hasil = 'Penjumlahan'
    break
case '-':
    hasil = 'Pengurangan'
    break
default:
   hasil = 'Perhitungan tidak ditemukan'
}
console.log(`Hasil perhitungan : ${hasil}`)
