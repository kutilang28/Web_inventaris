export default function RingkasanInventaris({ listBarang }) {
  const totalJenis = listBarang.length;
  const totalStok = listBarang.reduce((acc, item) => acc + Number(item.stok), 0);

  return (
    <div className="ringkasan-container">
      <div className="card-stat">
        <h3>Total Jenis Barang</h3>
        <p>{totalJenis} Jenis</p>
      </div>
      <div className="card-stat">
        <h3>Total Stok Unit</h3>
        <p>{totalStok} Unit</p>
      </div>
    </div>
  );
}