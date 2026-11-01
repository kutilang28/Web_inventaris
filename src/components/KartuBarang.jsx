export default function KartuBarang({ barang }) {
  return (
    <div className="kartu-barang">
      <span className="badge-kategori">{barang.kategori}</span>
      <h3>{barang.nama}</h3>
      <p><strong>Stok:</strong> {barang.stok} unit</p>
      <p><strong>Lokasi:</strong> {barang.lokasi}</p>
    </div>
  );
}