import { useState } from "react";
import mahasiswa from "./data";

function Dashboard() {
  const [search, setSearch] = useState("");

  const hasilPencarian = mahasiswa.filter((m) => {
    const keyword = search.toLowerCase();

    return (
      m.nama.toLowerCase().includes(keyword) ||
      m.nilai.toLowerCase().includes(keyword) ||
      m.jurusan.toLowerCase().includes(keyword) ||
      m.fakultas.toLowerCase().includes(keyword)
    );
  });

  return (
    <main className="main">
      <h2>Dashboard KampusHub</h2>
      <p>Selamat datang di Pusat Informasi Kampus.</p>

      <section className="data-mahasiswa">
        <h3>Data Mahasiswa</h3>

        <input
          type="text"
          className="search-input"
          placeholder="Cari nama, NIM, jurusan, atau fakultas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p>
          Menampilkan {hasilPencarian.length} dari {mahasiswa.length} mahasiswa.
        </p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>NIM</th>
                <th>Jurusan</th>
                <th>Fakultas</th>
              </tr>
            </thead>

            <tbody>
              {hasilPencarian.length > 0 ? (
                hasilPencarian.map((m, index) => (
                  <tr key={index}>
                    <td>{m.nama}</td>
                    <td>{m.nilai}</td>
                    <td>{m.jurusan}</td>
                    <td>{m.fakultas}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>Data mahasiswa tidak ditemukan.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
