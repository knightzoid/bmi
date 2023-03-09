# bmi

Ini adalah proyek pengembangan aplikasi perhitungan berat badan ideal menggunakan React. user dapat input weight & height. setelah input dan tekan tombol cek hasil, akan ada kalkulasi dengan rumus ```const result = weight / Math.pow(height / 100, 2);```. dan di masukkan kedalam kategori yang tersedia 
```
if (result < 18.5) {
   setCategory("Underweight");
} else if (result >= 18.5 && result <= 22.9) {
   setCategory("Normal");
} else if (result >= 23 && result <= 29.9) {
   setCategory("Overweight");
} else if (result > 30) {
   setCategory("Obese");
}
```

untuk live preview dapat di lihat di link berikut https://codesandbox.io/s/bmi-d084to
