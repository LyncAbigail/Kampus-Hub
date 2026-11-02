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

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/post",
        );
        if (!response.ok) {
          throw new Error("Gagal mengambil data berita.");
        }
        const data = await response.json();
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="berita">
      <h2>Berita / Pengumuman</h2>
      {berita.map((post) => (
        <div key={post.id} className="berita-item">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Berita;
