interface Mahasiswa {
  nama: string;
  nilai: string;
  jurusan: string;
  fakultas: string;
}

const mahasiswa: Mahasiswa[] = [
  {
    nama: "John Doe",
    nilai: "123456789",
    jurusan: "Teknik Informatika",
    fakultas: "Fakultas Ilmu Komputer",
  },
  {
    nama: "Jane Smith",
    nilai: "987654321",
    jurusan: "Sistem Informasi",
    fakultas: "Fakultas Ilmu Komputer",
  },
  {
    nama: "Michael Johnson",
    nilai: "456789123",
    jurusan: "Teknik Elektro",
    fakultas: "Fakultas Teknik",
  },
  {
    nama: "Sarah Williams",
    nilai: "321654987",
    jurusan: "Manajemen",
    fakultas: "Fakultas Ekonomi",
  },
  {
    nama: "David Brown",
    nilai: "789123456",
    jurusan: "Psikologi",
    fakultas: "Fakultas Ilmu Sosial dan Ilmu Politik",
  },
];

export default mahasiswa;
