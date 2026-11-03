import { useState, useEffect } from "react";

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Berita() {
  const [berita, setBerita] = useState<post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [kataKunci, setKataKunci] = useState("");

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/post",
        );

        if (!response.ok) {
          throw new Error("Gagal mengambil data berita.");
        }

        const data: post[] = await response.json();
        setBerita(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Terjadi kesalahan yang tidak diketahui.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  // Filter berita berdasarkan judul atau isi berita.
  const beritaFilter = berita.filter((post) => {
    const pencarian = kataKunci.toLowerCase().trim();

    return (
      post.title.toLowerCase().includes(pencarian) ||
      post.body.toLowerCase().includes(pencarian)
    );
  });

  if (loading) {
    return <div className="berita">Memuat berita...</div>;
  }

  if (error) {
    return <div className="berita berita-error">Error: {error}</div>;
  }

  return (
    <div className="berita">
      <h2>Berita / Pengumuman</h2>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Cari berita berdasarkan judul atau isi..."
          value={kataKunci}
          onChange={(event) => setKataKunci(event.target.value)}
          aria-label="Cari berita"
        />

        {kataKunci && (
          <button
            type="button"
            className="search-clear"
            onClick={() => setKataKunci("")}
          >
            Hapus
          </button>
        )}
      </div>

      <p className="hasil-pencarian">
        {kataKunci
          ? `Ditemukan ${beritaFilter.length} berita untuk "${kataKunci}"`
          : `Menampilkan ${berita.length} berita`}
      </p>

      {beritaFilter.length > 0 ? (
        beritaFilter.map((post) => (
          <div key={post.id} className="berita-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <div className="berita-kosong">
          <p>Berita tidak ditemukan.</p>
          <span>Coba gunakan kata kunci yang lain.</span>
        </div>
      )}
    </div>
  );
}

export default Berita;
