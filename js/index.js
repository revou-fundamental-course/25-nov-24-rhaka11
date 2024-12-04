function hitungBMI() {
  // Mengambil nilai berat badan dari input dengan id "weight" dan mengubahnya menjadi angka desimal
  const weight = parseFloat(document.getElementById("weight").value);

  // Mengambil nilai tinggi badan dari input dengan id "height", mengubahnya menjadi angka desimal, lalu mengonversinya ke meter
  const height = parseFloat(document.getElementById("height").value) / 100;

  // Validasi input: jika berat badan atau tinggi badan tidak diisi, tampilkan peringatan dan hentikan fungsi
  if (!weight || !height) {
    alert("Mohon isi data terlebih dahulu");
    return;
  }

  // Menghitung BMI menggunakan rumus: berat badan (kg) dibagi kuadrat tinggi badan (m), lalu membulatkan hasilnya ke 1 angka desimal
  const bmi = (weight / (height * height)).toFixed(1);

  // Variabel untuk menyimpan kategori BMI berdasarkan hasil perhitungan
  let category;

  // Menentukan kategori BMI berdasarkan nilai BMI
  if (bmi < 18.5) {
    // Jika BMI di bawah 18.5
    category = "Anda kekurangan berat badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    // Jika BMI antara 18.5 dan 24.9
    category = "Berat badan anda normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    // Jika BMI antara 25 dan 29.9
    category = "Berat badan anda berlebih";
  } else {
    category = "Berat badan anda sudah memasuki Obesitas"; // Jika BMI di atas 29.9
  }

  // Menampilkan hasil BMI dan kategori di elemen dengan id "hasilBMI" d
  document.getElementById(
    "hasilBMI"
  ).innerHTML = `<strong>BMI anda :</strong> ${bmi} <br>
  <strong>Kategori anda :</strong> ${category}`;
}
