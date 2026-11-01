import KartuBarang from './KartuBarang';

export default function DaftarBarang({ listBarang, loading, error, onRetry }) {
  // 1. Kondisi Loading
  if (loading) {
    return (
      <div className="status-box loading-box">
        <div className="spinner"></div>
        <p>Sedang memuat data inventaris dari API...</p>
      </div>
    );
  }

  // 2. Kondisi Error
  if (error) {
    return (
      <div className="status-box error-box">
        <p className="error-text"> Error: {error}</p>
        <button className="btn-retry" onClick={onRetry}>
           Coba Lagi
        </button>
      </div>
    );
  }

  // 3. Kondisi Data Kosong
  if (listBarang.length === 0) {
    return <p className="pesan-kosong">Belum ada data barang inventaris.</p>;
  }

  // 4. Kondisi Sukses (Render List)
  return (
    <div className="daftar-barang">
      {listBarang.map((barang) => (
        <KartuBarang key={barang.id} barang={barang} />
      ))}
    </div>
  );
}